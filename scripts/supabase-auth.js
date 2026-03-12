(function initJobPulseSupabase() {
  const storageKey = "jobpulse_pending_result_v1";
  const cfg = window.JOBPULSE_SUPABASE_CONFIG || {};
  const supabaseFactory = window.supabase && typeof window.supabase.createClient === "function"
    ? window.supabase.createClient
    : null;
  const isConfigured = Boolean(cfg.url && cfg.anonKey && supabaseFactory);

  const ui = {
    authStatusText: document.getElementById("authStatusText"),
    authOpenBtn: document.getElementById("auth-open-btn"),
    saveResultBtn: document.getElementById("save-result-btn"),
    historyBtn: document.getElementById("history-btn"),
    signoutBtn: document.getElementById("auth-signout-btn"),
    saveFeedback: document.getElementById("saveFeedback"),
    historySection: document.getElementById("historySection"),
    historyList: document.getElementById("historyList"),
    authModal: document.getElementById("auth-modal"),
    authModalTitle: document.getElementById("authModalTitle"),
    authModalInfo: document.getElementById("authModalInfo"),
    authFeedback: document.getElementById("authFeedback"),
    authCloseBtn: document.getElementById("auth-close-btn"),
    authSwitchSignin: document.getElementById("auth-switch-signin"),
    authSwitchSignup: document.getElementById("auth-switch-signup"),
    authSwitchReset: document.getElementById("auth-switch-reset"),
    signinForm: document.getElementById("auth-signin-form"),
    signupForm: document.getElementById("auth-signup-form"),
    resetForm: document.getElementById("auth-reset-form"),
    updatePasswordForm: document.getElementById("auth-update-password-form"),
    signinEmail: document.getElementById("auth-signin-email"),
    signinPassword: document.getElementById("auth-signin-password"),
    signupEmail: document.getElementById("auth-signup-email"),
    signupPassword: document.getElementById("auth-signup-password"),
    resetEmail: document.getElementById("auth-reset-email"),
    newPassword: document.getElementById("auth-new-password"),
    googleBtn: document.getElementById("auth-google-btn"),
    closeTriggers: [...document.querySelectorAll("[data-auth-close]")]
  };

  if (!ui.saveResultBtn || !ui.authOpenBtn || !ui.authModal) return;

  const state = {
    client: null,
    user: null,
    latestSerializableResult: null,
    pendingSaveAfterAuth: false,
    historyVisible: false
  };

  function toggleHidden(element, hidden) {
    if (!element) return;
    element.hidden = Boolean(hidden);
  }

  function setText(element, value) {
    if (!element) return;
    element.textContent = value || "";
  }

  function setFeedback(target, message, tone = "info") {
    if (!target) return;
    target.textContent = message || "";
    if (tone === "error") target.style.color = "#b91c1c";
    else if (tone === "success") target.style.color = "#047857";
    else target.style.color = "#334a70";
  }

  function buildContextSummary(contextData) {
    if (!contextData || typeof contextData !== "object") return "";
    const parts = [
      contextData.domainLabel,
      contextData.functionLabel,
      contextData.companySizeLabel,
      contextData.tenureLabel,
      contextData.hierarchyLabel,
      contextData.offerLabel
    ].filter((item) => Boolean(item && String(item).trim()));
    return parts.join(" | ");
  }

  function normalizeDimensionScores(scores) {
    const safe = scores || {};
    return {
      meaning: Number.isFinite(safe.meaning) ? Math.round(safe.meaning) : 0,
      growth: Number.isFinite(safe.growth) ? Math.round(safe.growth) : 0,
      recognition: Number.isFinite(safe.recognition) ? Math.round(safe.recognition) : 0,
      environment: Number.isFinite(safe.environment) ? Math.round(safe.environment) : 0
    };
  }

  function serializeResultPayload(detail) {
    const result = detail?.result;
    if (!result || !Number.isFinite(result.isc)) return null;
    const contextData = detail?.contextData || result.contextData || {};
    return {
      generatedAt: result.generatedAt || new Date().toISOString(),
      careerProfile: result.careerProfile?.profileName || "Profil non precise",
      isc: Math.round(result.isc),
      dimensions: normalizeDimensionScores(result.scores),
      strongestDimension: result.strongestDimension || null,
      weakestDimension: result.weakestDimension || null,
      topPriorityDimension: result.topPriorityDimension || null,
      contextSummary: buildContextSummary(contextData)
    };
  }

  function writePendingResult(payload) {
    if (!payload) return;
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(payload));
    } catch {
      // Ignore storage errors in private mode.
    }
  }

  function readPendingResult() {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && Number.isFinite(parsed.isc) ? parsed : null;
    } catch {
      return null;
    }
  }

  function clearPendingResult() {
    try {
      sessionStorage.removeItem(storageKey);
    } catch {
      // Ignore storage errors in private mode.
    }
  }

  function buildInsertRow(payload) {
    return {
      user_id: state.user?.id || null,
      diagnostic_date: payload.generatedAt || new Date().toISOString(),
      career_profile: payload.careerProfile,
      isc_score: payload.isc,
      dimension_scores: payload.dimensions,
      context_summary: payload.contextSummary || null,
      strongest_dimension: payload.strongestDimension,
      weakest_dimension: payload.weakestDimension,
      top_priority_dimension: payload.topPriorityDimension
    };
  }

  function renderHistory(items) {
    if (!ui.historyList) return;
    ui.historyList.innerHTML = "";
    if (!items.length) {
      const li = document.createElement("li");
      li.className = "history-item";
      li.innerHTML = "<p class=\"history-item-title\">Aucun diagnostic sauvegarde pour le moment.</p>";
      ui.historyList.appendChild(li);
      return;
    }

    items.forEach((item) => {
      const score = Number.isFinite(item.isc_score) ? item.isc_score : "?";
      const date = item.diagnostic_date
        ? new Date(item.diagnostic_date).toLocaleString("fr-FR")
        : "Date inconnue";
      const dims = item.dimension_scores || {};
      const li = document.createElement("li");
      li.className = "history-item";
      li.innerHTML = `
        <p class="history-item-date">${date}</p>
        <p class="history-item-title">${item.career_profile || "Profil non precise"} - ISC ${score}</p>
        <p class="history-item-meta">Sens ${Math.round(dims.meaning || 0)} | Evolution ${Math.round(dims.growth || 0)} | Reconnaissance ${Math.round(dims.recognition || 0)} | Environnement ${Math.round(dims.environment || 0)}</p>
      `;
      if (item.context_summary) {
        const meta = document.createElement("p");
        meta.className = "history-item-meta";
        meta.textContent = item.context_summary;
        li.appendChild(meta);
      }
      ui.historyList.appendChild(li);
    });
  }

  function updateAuthUi() {
    if (!isConfigured) {
      setText(ui.authStatusText, "Connexion indisponible: configurez Supabase pour activer la sauvegarde.");
      ui.authOpenBtn.disabled = true;
      ui.saveResultBtn.disabled = true;
      toggleHidden(ui.historyBtn, true);
      toggleHidden(ui.signoutBtn, true);
      return;
    }

    if (state.user) {
      const verifiedLabel = state.user.email_confirmed_at ? "email verifie" : "email en attente de verification";
      setText(ui.authStatusText, `Connecte en tant que ${state.user.email} (${verifiedLabel}).`);
      setText(ui.authOpenBtn, "Gerer mon compte");
      ui.saveResultBtn.disabled = false;
      toggleHidden(ui.historyBtn, false);
      toggleHidden(ui.signoutBtn, false);
    } else {
      setText(ui.authStatusText, "Mode anonyme: connectez-vous pour sauvegarder vos diagnostics.");
      setText(ui.authOpenBtn, "Se connecter / Creer un compte");
      ui.saveResultBtn.disabled = false;
      toggleHidden(ui.historyBtn, true);
      toggleHidden(ui.signoutBtn, true);
      toggleHidden(ui.historySection, true);
      state.historyVisible = false;
    }
  }

  function setAuthMode(mode) {
    const isSignIn = mode === "signin";
    const isSignUp = mode === "signup";
    const isReset = mode === "reset";
    const isUpdate = mode === "update";

    toggleHidden(ui.signinForm, !isSignIn);
    toggleHidden(ui.signupForm, !isSignUp);
    toggleHidden(ui.resetForm, !isReset);
    toggleHidden(ui.updatePasswordForm, !isUpdate);

    if (isSignIn) {
      setText(ui.authModalTitle, "Connexion");
      setText(ui.authModalInfo, "Connectez-vous pour sauvegarder vos diagnostics.");
    } else if (isSignUp) {
      setText(ui.authModalTitle, "Creer un compte");
      setText(ui.authModalInfo, "Un email de verification vous sera envoye.");
    } else if (isReset) {
      setText(ui.authModalTitle, "Mot de passe oublie");
      setText(ui.authModalInfo, "Recevez un lien de reinitialisation par email.");
    } else {
      setText(ui.authModalTitle, "Nouveau mot de passe");
      setText(ui.authModalInfo, "Saisissez votre nouveau mot de passe.");
    }

    toggleHidden(ui.googleBtn, isReset || isUpdate);
    setFeedback(ui.authFeedback, "");
  }

  function openAuthModal(mode = "signin") {
    setAuthMode(mode);
    toggleHidden(ui.authModal, false);
  }

  function closeAuthModal() {
    toggleHidden(ui.authModal, true);
    setFeedback(ui.authFeedback, "");
  }

  async function insertDiagnostic(payload) {
    if (!state.client || !state.user) {
      throw new Error("Utilisateur non connecte.");
    }
    const row = buildInsertRow(payload);
    const { error } = await state.client
      .from(cfg.tableName || "diagnostic_results")
      .insert(row);
    if (error) throw error;
  }

  async function saveCurrentDiagnostic() {
    if (!isConfigured) {
      setFeedback(ui.saveFeedback, "Supabase n'est pas configure. Renseignez scripts/supabase-config.js.", "error");
      return;
    }

    if (!state.latestSerializableResult) {
      setFeedback(ui.saveFeedback, "Lancez un diagnostic complet avant de sauvegarder.", "error");
      return;
    }

    if (!state.user) {
      state.pendingSaveAfterAuth = true;
      writePendingResult(state.latestSerializableResult);
      setFeedback(ui.saveFeedback, "Connectez-vous pour sauvegarder ce diagnostic.", "info");
      openAuthModal("signin");
      return;
    }

    try {
      await insertDiagnostic(state.latestSerializableResult);
      clearPendingResult();
      state.pendingSaveAfterAuth = false;
      setFeedback(ui.saveFeedback, "Diagnostic sauvegarde dans votre historique.", "success");
    } catch (error) {
      console.error("[JobPulse][Supabase] Save failed", error);
      setFeedback(ui.saveFeedback, `Echec de sauvegarde: ${error.message || "erreur inconnue"}.`, "error");
    }
  }

  async function loadHistory() {
    if (!state.client || !state.user) {
      setFeedback(ui.saveFeedback, "Connectez-vous pour consulter l'historique.", "info");
      return;
    }
    try {
      const { data, error } = await state.client
        .from(cfg.tableName || "diagnostic_results")
        .select("id, diagnostic_date, career_profile, isc_score, dimension_scores, context_summary")
        .order("diagnostic_date", { ascending: false })
        .limit(20);
      if (error) throw error;
      renderHistory(data || []);
      toggleHidden(ui.historySection, false);
      state.historyVisible = true;
    } catch (error) {
      console.error("[JobPulse][Supabase] History load failed", error);
      setFeedback(ui.saveFeedback, `Echec de chargement de l'historique: ${error.message || "erreur inconnue"}.`, "error");
    }
  }

  async function restorePendingAfterLogin() {
    const pending = readPendingResult();
    if (!pending || !state.user) return;
    try {
      await insertDiagnostic(pending);
      clearPendingResult();
      setFeedback(ui.saveFeedback, "Diagnostic precedent sauvegarde automatiquement apres connexion.", "success");
    } catch (error) {
      console.error("[JobPulse][Supabase] Pending save failed", error);
      setFeedback(ui.saveFeedback, `Connexion reussie, mais la sauvegarde auto a echoue: ${error.message || "erreur inconnue"}.`, "error");
    } finally {
      state.pendingSaveAfterAuth = false;
    }
  }

  function attachUiHandlers() {
    ui.authOpenBtn.addEventListener("click", () => {
      if (!isConfigured) return;
      openAuthModal("signin");
    });
    ui.authCloseBtn?.addEventListener("click", closeAuthModal);
    ui.closeTriggers.forEach((trigger) => trigger.addEventListener("click", closeAuthModal));

    ui.authSwitchSignin?.addEventListener("click", () => setAuthMode("signin"));
    ui.authSwitchSignup?.addEventListener("click", () => setAuthMode("signup"));
    ui.authSwitchReset?.addEventListener("click", () => setAuthMode("reset"));

    ui.saveResultBtn.addEventListener("click", saveCurrentDiagnostic);

    ui.historyBtn?.addEventListener("click", async () => {
      if (state.historyVisible) {
        toggleHidden(ui.historySection, true);
        state.historyVisible = false;
        return;
      }
      await loadHistory();
    });

    ui.signoutBtn?.addEventListener("click", async () => {
      if (!state.client) return;
      const { error } = await state.client.auth.signOut();
      if (error) {
        setFeedback(ui.saveFeedback, `Deconnexion impossible: ${error.message || "erreur inconnue"}.`, "error");
        return;
      }
      setFeedback(ui.saveFeedback, "Deconnexion effectuee.", "info");
    });

    ui.signinForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!state.client) return;
      const email = ui.signinEmail?.value?.trim();
      const password = ui.signinPassword?.value || "";
      if (!email || !password) return;
      const { error } = await state.client.auth.signInWithPassword({ email, password });
      if (error) {
        setFeedback(ui.authFeedback, `Connexion impossible: ${error.message || "erreur inconnue"}.`, "error");
        return;
      }
      closeAuthModal();
      setFeedback(ui.saveFeedback, "Connexion reussie.", "success");
    });

    ui.signupForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!state.client) return;
      const email = ui.signupEmail?.value?.trim();
      const password = ui.signupPassword?.value || "";
      if (!email || !password) return;
      const { error } = await state.client.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: cfg.redirectTo
        }
      });
      if (error) {
        setFeedback(ui.authFeedback, `Creation de compte impossible: ${error.message || "erreur inconnue"}.`, "error");
        return;
      }
      setFeedback(ui.authFeedback, "Compte cree. Verifiez votre email avant de vous connecter.", "success");
    });

    ui.resetForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!state.client) return;
      const email = ui.resetEmail?.value?.trim();
      if (!email) return;
      const { error } = await state.client.auth.resetPasswordForEmail(email, {
        redirectTo: cfg.redirectTo
      });
      if (error) {
        setFeedback(ui.authFeedback, `Envoi impossible: ${error.message || "erreur inconnue"}.`, "error");
        return;
      }
      setFeedback(ui.authFeedback, "Lien de reinitialisation envoye.", "success");
    });

    ui.updatePasswordForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!state.client) return;
      const password = ui.newPassword?.value || "";
      if (!password || password.length < 8) {
        setFeedback(ui.authFeedback, "Le mot de passe doit contenir au moins 8 caracteres.", "error");
        return;
      }
      const { error } = await state.client.auth.updateUser({ password });
      if (error) {
        setFeedback(ui.authFeedback, `Mise a jour impossible: ${error.message || "erreur inconnue"}.`, "error");
        return;
      }
      setFeedback(ui.authFeedback, "Mot de passe mis a jour. Vous pouvez vous connecter.", "success");
      setAuthMode("signin");
      if (window.location.hash.includes("type=recovery")) {
        history.replaceState({}, document.title, window.location.pathname + window.location.search);
      }
    });

    ui.googleBtn?.addEventListener("click", async () => {
      if (!state.client) return;
      if (state.latestSerializableResult) {
        writePendingResult(state.latestSerializableResult);
      }
      const { error } = await state.client.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: cfg.redirectTo
        }
      });
      if (error) {
        setFeedback(ui.authFeedback, `Google login impossible: ${error.message || "erreur inconnue"}.`, "error");
      }
    });
  }

  function handleResultReady(event) {
    const payload = serializeResultPayload(event?.detail || {});
    if (!payload) return;
    state.latestSerializableResult = payload;
    setFeedback(ui.saveFeedback, "");
  }

  async function initSupabase() {
    attachUiHandlers();

    window.addEventListener("jobpulse:result-ready", handleResultReady);

    if (!isConfigured) {
      updateAuthUi();
      return;
    }

    state.client = supabaseFactory(cfg.url, cfg.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });

    const { data: sessionData } = await state.client.auth.getSession();
    state.user = sessionData?.session?.user || null;
    updateAuthUi();

    state.client.auth.onAuthStateChange(async (event, session) => {
      state.user = session?.user || null;
      updateAuthUi();

      if (event === "PASSWORD_RECOVERY") {
        openAuthModal("update");
        setFeedback(ui.authFeedback, "Definissez un nouveau mot de passe.", "info");
        return;
      }

      if (state.user && (state.pendingSaveAfterAuth || readPendingResult())) {
        await restorePendingAfterLogin();
      }
    });

    if (window.location.hash.includes("type=recovery")) {
      openAuthModal("update");
      setFeedback(ui.authFeedback, "Definissez un nouveau mot de passe.", "info");
    } else if (state.user) {
      await restorePendingAfterLogin();
    }
  }

  initSupabase().catch((error) => {
    console.error("[JobPulse][Supabase] Initialization failed", error);
    setFeedback(ui.saveFeedback, "Initialisation Supabase impossible. Verifiez la configuration.", "error");
  });
})();

