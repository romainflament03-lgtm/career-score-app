const questions = [
  "Je suis satisfait(e) de mon travail au quotidien.",
  "Mon salaire me semble juste par rapport à la valeur que j'apporte.",
  "Je vois des opportunités claires d'évolution de carrière.",
  "Mon manager soutient ma progression.",
  "L'ambiance dans mon équipe est bonne.",
  "J'apprends des compétences utiles pour l'avenir.",
  "Mon équilibre vie pro / vie perso est acceptable.",
  "Je me sens reconnu(e) pour mes contributions.",
  "Je suis fier(e) de l'entreprise pour laquelle je travaille.",
  "Je peux m'imaginer encore ici dans 2 ans."
];

const dimensionConfig = {
  Meaning: [0, 8, 9],
  Growth: [2, 3, 5],
  Recognition: [1, 7],
  Environment: [4, 6]
};

const dimensionLabelFr = {
  Meaning: "Sens",
  Growth: "Évolution",
  Recognition: "Reconnaissance",
  Environment: "Environnement"
};

const domainLabelFr = {
  tech: "Numérique / Tech",
  finance: "Finance / Assurance",
  industrie: "Industrie / Production",
  commerce: "Commerce / Distribution",
  sante: "Santé / Médico-social",
  education: "Éducation / Formation",
  public: "Administration / Service public",
  transport: "Transport / Logistique",
  conseil: "Conseil / Services aux entreprises",
  autre: "Autre domaine"
};

const domainActions = {
  tech: "Priorisez une action qui réduit la dette opérationnelle et augmente l'impact produit.",
  finance: "Alignez vos objectifs avec les enjeux de risque, de conformité et de performance.",
  industrie: "Travaillez sur un levier concret de qualité, cadence ou sécurité terrain.",
  commerce: "Concentrez-vous sur un levier mesurable de marge, conversion ou fidélisation.",
  sante: "Renforcez l'organisation et la coordination pour limiter la surcharge cognitive.",
  education: "Structurez vos priorités entre impact pédagogique et charge administrative.",
  public: "Clarifiez vos marges d'action et formalisez des objectifs atteignables.",
  transport: "Sécurisez vos priorités opérationnelles et anticipez les points de friction.",
  conseil: "Cadrez vos attentes de progression et votre positionnement sur des activités visibles.",
  autre: "Formalisez une action prioritaire visible et mesurable dans votre contexte."
};

const jobActions = {
  dev: "Cadrez un objectif technique visible (qualité, lead time, fiabilité) et rendez-le mesurable.",
  data: "Priorisez un cas d'usage data à fort impact business et clarifiez les attentes métier.",
  product: "Alignez roadmap, impact utilisateur et responsabilité décisionnelle explicite.",
  it_ops: "Réduisez les irritants opérationnels avec un plan de stabilisation en 30 jours.",
  compta: "Formalisez vos livrables critiques et négociez une charge soutenable en clôture.",
  audit: "Cadrez un plan de progression sur des sujets à plus forte valeur analytique.",
  banque: "Mettez en avant vos résultats client pour soutenir reconnaissance et progression.",
  assurance: "Priorisez fiabilité de traitement et clarté des objectifs de performance.",
  production: "Négociez des objectifs atteignables et un support terrain adapté à la charge.",
  maintenance: "Ciblez un chantier de fiabilisation visible avec gains mesurables.",
  qualite: "Alignez attentes qualité et moyens réels avec un plan d'action partagé.",
  supply: "Renforcez votre influence transverse sur les priorités flux/coûts/délais.",
  vente: "Fixez une stratégie de portefeuille et demandez un coaching ciblé sur vos objectifs.",
  retail: "Clarifiez priorités opérationnelles et leviers de reconnaissance magasin.",
  achat: "Mettez en avant l'impact business de vos arbitrages fournisseurs.",
  marketing: "Concentrez-vous sur 1 levier ROI et formalisez vos KPI de progression.",
  soignant: "Recadrez charge et organisation pour protéger qualité de soin et endurance.",
  medecin: "Identifiez un levier d'autonomie organisationnelle à forte valeur clinique.",
  administratif_sante: "Fluidifiez la coordination inter-services avec des standards simples.",
  medico_social: "Cadrez vos priorités d'accompagnement et vos limites de charge.",
  enseignant: "Priorisez l'impact pédagogique et délimitez la charge hors face-à-face.",
  direction_edu: "Arbitrez les priorités d'établissement et sécurisez les moyens associés.",
  administratif_edu: "Rendez visible votre contribution et clarifiez les attentes du poste.",
  support_edu: "Consolidez votre périmètre et vos interactions avec l'équipe pédagogique.",
  agent_public: "Formalisez votre marge d'action et ciblez une amélioration de service concrète.",
  cadre_public: "Renforcez votre influence transverse sur un chantier prioritaire.",
  territorial: "Alignez objectifs politiques, moyens et réalité terrain.",
  etat: "Structurez une progression de poste sur des dossiers à forte visibilité.",
  exploitation: "Stabilisez planification et priorités pour réduire la pression opérationnelle.",
  logistique: "Travaillez un levier de fluidité entre entrepôt, transport et service client.",
  conducteur: "Recadrez conditions de travail et reconnaissance des contraintes terrain.",
  planif_transport: "Clarifiez vos arbitrages et KPI avec votre management.",
  consultant: "Discutez des activités qui vous conviennent et du rôle cible pour votre trajectoire.",
  manager_conseil: "Cadrez charge équipe, priorités client et développement des talents.",
  project_manager: "Clarifiez périmètre, autorité de décision et priorités projet avec vos sponsors.",
  pmo: "Standardisez pilotage, capacité et arbitrages pour réduire les frictions inter-équipes.",
  program_manager: "Renforcez la gouvernance transverse et la priorisation des dépendances critiques.",
  commercial_conseil: "Alignez objectifs commerciaux et support delivery.",
  backoffice_conseil: "Formalisez votre impact opérationnel et vos perspectives d'évolution.",
  autre_metier: "Identifiez une action à fort impact visible dans votre périmètre."
};

const weakDimensionActions = {
  Meaning: {
    Fragile: "Recentrez votre poste autour de 2 activités à forte valeur pour vous.",
    Stagnation: "Demandez davantage d'activités alignées avec vos motivations.",
    Sain: "Renforcez votre impact sur un sujet qui vous mobilise.",
    Excellent: "Partagez ce qui donne du sens dans votre rôle avec votre équipe."
  },
  Growth: {
    Fragile: "Demandez une feuille de route d'évolution explicite sur 90 jours.",
    Stagnation: "Obtenez une responsabilité supplémentaire à livrer ce trimestre.",
    Sain: "Positionnez-vous sur une responsabilité de progression visible.",
    Excellent: "Structurez votre prochaine étape avec un sponsor interne."
  },
  Recognition: {
    Fragile: "Préparez un point reconnaissance/rémunération avec preuves concrètes.",
    Stagnation: "Fixez des critères de reconnaissance explicites avec votre manager.",
    Sain: "Augmentez la visibilité de vos résultats sur les priorités business.",
    Excellent: "Demandez des leviers de progression au-delà du salaire (scope, autonomie, visibilité)."
  },
  Environment: {
    Fragile: "Recadrez charge, priorités et limites de disponibilité immédiatement.",
    Stagnation: "Installez un rituel hebdo de synchronisation avec votre manager.",
    Sain: "Améliorez la collaboration d'équipe sur un irritant récurrent.",
    Excellent: "Partagez vos bonnes pratiques d'organisation autour de vous."
  }
};

const bandPriority = {
  Fragile: "Priorité immédiate: protéger votre énergie et rétablir un cadre de travail tenable.",
  Stagnation: "Priorité immédiate: débloquer un levier de progression concret et visible.",
  Sain: "Priorité immédiate: augmenter votre impact sur votre axe le plus faible.",
  Excellent: "Priorité immédiate: consolider vos acquis et créer un levier de carrière durable."
};

const tenureAction = {
  lt6: "Clarifiez vos attentes mutuelles avec votre manager pour bien cadrer votre prise de poste.",
  "6to24": "Définissez un objectif de positionnement qui élargit votre périmètre de façon concrète.",
  gt24: "Réévaluez votre trajectoire interne/externe avec des critères objectifs."
};

const indicativeByBand = {
  Fragile: "1-2 semaines",
  Stagnation: "2-4 semaines",
  Sain: "4-6 semaines",
  Excellent: "6-8 semaines"
};

const dimensionIndicators = {
  Meaning: "2 activités réalignées et validées avec votre manager",
  Growth: "1 responsabilité supplémentaire formalisée",
  Recognition: "1 point de calibration réalisé avec critères écrits",
  Environment: "1 rituel d'alignement installé et suivi"
};

const dimensionRationale = {
  Meaning: "Cet axe est bas, il faut reconnecter vos activités à ce qui a de la valeur pour vous et pour l'entreprise.",
  Growth: "Cet axe est bas, votre risque principal est la stagnation de trajectoire et de compétences.",
  Recognition: "Cet axe est bas, vos contributions ne sont pas suffisamment visibles ou valorisées.",
  Environment: "Cet axe est bas, votre cadre de travail freine votre performance durable."
};

const dimensionExamples = {
  Meaning: "Exemple: remplacer une partie des tâches peu utiles par des activités à forte valeur.",
  Growth: "Exemple: prendre un lot projet, animer un rituel d'équipe ou mentorer un collègue junior.",
  Recognition: "Exemple: présenter vos résultats avec impacts chiffrés (qualité, délai, chiffre, satisfaction).",
  Environment: "Exemple: instaurer un point hebdomadaire de priorisation pour réduire les urgences."
};

function jobExample(job) {
  switch (job) {
    case "project_manager":
      return "Exemple: clarifier avec le sponsor qui décide de quoi, puis publier un plan d'arbitrage partagé.";
    case "pmo":
      return "Exemple: mettre en place un tableau unique charge/capacité/arbitrages revu chaque semaine.";
    case "program_manager":
      return "Exemple: formaliser les dépendances critiques et le protocole d'escalade inter-équipes.";
    case "consultant":
      return "Exemple: choisir les activités à plus forte valeur (cadrage, expertise, relation client) et les prioriser.";
    default:
      return "Exemple: choisir une action visible et mesurable, validée avec votre manager.";
  }
}

function domainExample(domain) {
  switch (domain) {
    case "industrie":
      return "Exemple: cibler un KPI atelier (rebuts, pannes, cadence) et suivre son évolution.";
    case "finance":
      return "Exemple: réduire un risque opérationnel avec un contrôle simple et documenté.";
    case "commerce":
      return "Exemple: améliorer un indicateur de conversion ou de fidélisation sur un segment précis.";
    case "sante":
      return "Exemple: améliorer la coordination d'équipe sur un point de tension récurrent.";
    default:
      return "Exemple: cibler un indicateur métier concret et suivre son amélioration.";
  }
}

function tenureExample(tenure) {
  if (tenure === "lt6") return "Exemple: formaliser les attentes du poste et les critères de réussite avec votre manager.";
  if (tenure === "6to24") return "Exemple: élargir votre périmètre sur un sujet prioritaire et le rendre visible.";
  return "Exemple: comparer vos options internes/externes avec 3 critères objectifs (impact, progression, équilibre).";
}

// Override wording for clearer, less jargony recommendations.
weakDimensionActions.Growth.Stagnation = "Faites valider une nouvelle responsabilité utile à l'équipe, avec un résultat attendu clair.";
bandPriority.Fragile = "Priorité immédiate: réduire la surcharge et clarifier ce qui est réellement prioritaire.";
bandPriority.Stagnation = "Priorité immédiate: obtenir une évolution concrète du poste (périmètre, responsabilités ou visibilité).";
dimensionIndicators.Meaning = "2 activités prioritaires validées par écrit avec votre manager";
dimensionIndicators.Growth = "1 nouvelle responsabilité définie clairement (objectif, périmètre, critères de réussite)";
dimensionIndicators.Recognition = "1 échange formel avec votre manager sur votre contribution, avec critères de reconnaissance écrits";
dimensionIndicators.Environment = "1 rituel hebdomadaire de priorisation en place et réellement utilisé";
jobActions.pmo = "Mettez en place un tableau unique de priorisation, charge et arbitrages partagé entre équipes.";

const screens = {
  landing: document.getElementById("screen-landing"),
  weights: document.getElementById("screen-weights"),
  questions: document.getElementById("screen-questions"),
  profile: document.getElementById("screen-profile"),
  results: document.getElementById("screen-results")
};

const ui = {
  startBtn: document.getElementById("start-btn"),
  weightsNextBtn: document.getElementById("weights-next-btn"),
  weightsResetBtn: document.getElementById("weights-reset-btn"),
  weightMeaning: document.getElementById("weight-meaning"),
  weightGrowth: document.getElementById("weight-growth"),
  weightRecognition: document.getElementById("weight-recognition"),
  weightEnvironment: document.getElementById("weight-environment"),
  weightPctMeaning: document.getElementById("weightPctMeaning"),
  weightPctGrowth: document.getElementById("weightPctGrowth"),
  weightPctRecognition: document.getElementById("weightPctRecognition"),
  weightPctEnvironment: document.getElementById("weightPctEnvironment"),
  questionCount: document.getElementById("question-count"),
  remainingTime: document.getElementById("remaining-time"),
  progressFill: document.getElementById("progress-fill"),
  questionText: document.getElementById("question-text"),
  questionCard: document.getElementById("question-card"),
  answerRange: document.getElementById("answer-range"),
  answerValue: document.getElementById("answer-value"),
  nextBtn: document.getElementById("next-btn"),
  domainSelect: document.getElementById("domain-select"),
  jobSelect: document.getElementById("job-select"),
  tenureSelect: document.getElementById("tenure-select"),
  profileNextBtn: document.getElementById("profile-next-btn"),
  restartBtn: document.getElementById("restart-btn"),
  shareBtn: document.getElementById("share-btn"),
  chiGauge: document.getElementById("chiGauge"),
  chiScore: document.getElementById("chiScore"),
  chiLabel: document.getElementById("chiLabel"),
  chiSummary: document.getElementById("chiSummary"),
  calcFormula: document.getElementById("calcFormula"),
  resultDate: document.getElementById("result-date"),
  barMeaning: document.getElementById("barMeaning"),
  barGrowth: document.getElementById("barGrowth"),
  barRecognition: document.getElementById("barRecognition"),
  barEnvironment: document.getElementById("barEnvironment"),
  valMeaning: document.getElementById("valMeaning"),
  valGrowth: document.getElementById("valGrowth"),
  valRecognition: document.getElementById("valRecognition"),
  valEnvironment: document.getElementById("valEnvironment"),
  lvlMeaning: document.getElementById("lvlMeaning"),
  lvlGrowth: document.getElementById("lvlGrowth"),
  lvlRecognition: document.getElementById("lvlRecognition"),
  lvlEnvironment: document.getElementById("lvlEnvironment"),
  recommendationContext: document.getElementById("recommendationContext"),
  priorityAction: document.getElementById("priorityAction"),
  actionsList: document.getElementById("actionsList"),
  zoneFragile: document.getElementById("zoneFragile"),
  zoneStagnation: document.getElementById("zoneStagnation"),
  zoneSain: document.getElementById("zoneSain"),
  zoneExcellent: document.getElementById("zoneExcellent")
};

let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);
let customWeights = { Meaning: 0.25, Growth: 0.25, Recognition: 0.25, Environment: 0.25 };
let latestResult = null;
const profile = { domain: "tech", tenure: "6to24" };
profile.job = "consultant";

function showScreen(key) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[key].classList.add("active");
  if (key === "landing") ui.progressFill.style.width = "0%";
  if (key === "results") ui.progressFill.style.width = "100%";
}

function normalizeWeights(raw) {
  const total = raw.Meaning + raw.Growth + raw.Recognition + raw.Environment;
  return {
    Meaning: raw.Meaning / total,
    Growth: raw.Growth / total,
    Recognition: raw.Recognition / total,
    Environment: raw.Environment / total
  };
}

function updateWeightPreview() {
  const raw = {
    Meaning: Number(ui.weightMeaning.value),
    Growth: Number(ui.weightGrowth.value),
    Recognition: Number(ui.weightRecognition.value),
    Environment: Number(ui.weightEnvironment.value)
  };
  customWeights = normalizeWeights(raw);
  ui.weightPctMeaning.textContent = `${Math.round(customWeights.Meaning * 100)}%`;
  ui.weightPctGrowth.textContent = `${Math.round(customWeights.Growth * 100)}%`;
  ui.weightPctRecognition.textContent = `${Math.round(customWeights.Recognition * 100)}%`;
  ui.weightPctEnvironment.textContent = `${Math.round(customWeights.Environment * 100)}%`;
}

function resetWeights() {
  ui.weightMeaning.value = "3";
  ui.weightGrowth.value = "3";
  ui.weightRecognition.value = "3";
  ui.weightEnvironment.value = "3";
  updateWeightPreview();
}

function startQuestions() {
  currentQuestionIndex = 0;
  answers = new Array(questions.length).fill(null);
  latestResult = null;
  renderQuestion();
  showScreen("questions");
}

function renderQuestion() {
  ui.questionCount.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
  ui.questionText.textContent = questions[currentQuestionIndex];
  ui.progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  const remainingQuestions = questions.length - (currentQuestionIndex + 1);
  ui.remainingTime.textContent = currentQuestionIndex >= 6 ? `~${remainingQuestions * 12}s restantes` : "";
  const value = answers[currentQuestionIndex] || 3;
  ui.answerRange.value = String(value);
  ui.answerValue.textContent = String(value);
}

function averageTo100(values) {
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.round((avg / 5) * 100);
}

function computeDimensions() {
  const result = {};
  Object.keys(dimensionConfig).forEach((key) => {
    result[key] = averageTo100(dimensionConfig[key].map((i) => answers[i] || 3));
  });
  return result;
}

function computeISC(dim, weights) {
  return Math.round(
    dim.Meaning * weights.Meaning +
    dim.Growth * weights.Growth +
    dim.Recognition * weights.Recognition +
    dim.Environment * weights.Environment
  );
}

function getInterpretation(isc) {
  if (isc < 40) return { label: "Fragile", summary: "La situation est fragile et demande des ajustements rapides.", tone: "warn", band: "Fragile" };
  if (isc < 60) return { label: "Zone de stagnation", summary: "La situation est mitigée et peut se débloquer avec les bons leviers.", tone: "warn", band: "Stagnation" };
  if (isc < 80) return { label: "Sain", summary: "La situation est globalement saine avec quelques optimisations utiles.", tone: "good", band: "Sain" };
  return { label: "Excellent", summary: "La dynamique est très favorable, consolidez vos leviers de progression.", tone: "good", band: "Excellent" };
}

function rankDimensions(dimensions) {
  return Object.entries(dimensions).sort((a, b) => b[1] - a[1]);
}

function scoreLevel(value) {
  if (value < 40) return "faible";
  if (value < 70) return "moyen";
  return "fort";
}

function jobIndicator(job) {
  switch (job) {
    case "dev":
    case "it_ops":
      return "1 indicateur technique (fiabilité, lead time ou incidents) amélioré";
    case "data":
      return "1 cas d'usage data prioritaire validé par le métier";
    case "product":
      return "1 décision produit formalisée avec impact mesuré";
    case "compta":
    case "audit":
    case "assurance":
      return "1 objectif de qualité/conformité documenté et validé";
    case "banque":
    case "vente":
    case "commercial_conseil":
      return "1 résultat client/commercial mesurable atteint";
    case "production":
    case "maintenance":
    case "qualite":
    case "supply":
    case "exploitation":
    case "logistique":
    case "planif_transport":
      return "1 KPI opérationnel (délai, qualité ou flux) amélioré";
    case "soignant":
    case "medecin":
    case "administratif_sante":
    case "medico_social":
      return "1 amélioration d'organisation réduisant la surcharge constatée";
    case "enseignant":
    case "direction_edu":
    case "administratif_edu":
    case "support_edu":
      return "1 objectif pédagogique/organisationnel formalisé et suivi";
    case "agent_public":
    case "cadre_public":
    case "territorial":
    case "etat":
      return "1 amélioration de service ou process validée par la hiérarchie";
    case "consultant":
    case "manager_conseil":
    case "project_manager":
    case "pmo":
    case "program_manager":
    case "backoffice_conseil":
      return "1 livrable à forte valeur ajoutée reconnu par le client ou le management";
    case "conducteur":
      return "1 action concrète sur les conditions d'exploitation mise en place";
    default:
      return "1 action prioritaire formalisée et validée avec votre manager";
  }
}

function domainIndicator(domain) {
  switch (domain) {
    case "tech":
      return "réduction d'un irritant technique impactant la performance";
    case "finance":
      return "objectif risque/conformité/performance clarifié et suivi";
    case "industrie":
      return "gain mesurable sur qualité, cadence ou sécurité";
    case "commerce":
      return "amélioration mesurable sur marge, conversion ou fidélisation";
    case "sante":
      return "meilleure coordination observée avec baisse d'une tension récurrente";
    case "education":
      return "priorités pédagogiques et charge administrative mieux arbitrées";
    case "public":
      return "marge d'action explicitée avec un objectif de service atteignable";
    case "transport":
      return "stabilisation d'un indicateur d'exploitation (retard, charge, incidents)";
    case "conseil":
      return "positionnement activités/progression validé par un sponsor";
    default:
      return "impact concret visible dans votre contexte";
  }
}

function tenureIndicator(tenure) {
  if (tenure === "lt6") return "attentes de poste formalisées et validées";
  if (tenure === "6to24") return "objectif d'évolution formalisé sur votre périmètre";
  return "décision de trajectoire interne/externe éclairée par des critères objectifs";
}

function buildRecommendations(weakestDims, band, domain, job, tenure) {
  const [first, second] = weakestDims;
  const indicative = indicativeByBand[band];
  const candidates = [
    {
      title: `Axe prioritaire: ${dimensionLabelFr[first]}`,
      badge: "Priorité 1",
      action: weakDimensionActions[first][band],
      why: dimensionRationale[first],
      indicator: dimensionIndicators[first],
      example: dimensionExamples[first],
      indicative
    },
    {
      title: `Axe secondaire: ${dimensionLabelFr[second]}`,
      badge: "Priorité 2",
      action: weakDimensionActions[second][band],
      why: dimensionRationale[second],
      indicator: dimensionIndicators[second],
      example: dimensionExamples[second],
      indicative
    },
    {
      title: "Levier métier",
      badge: "Contexte métier",
      action: jobActions[job] || jobActions.autre_metier,
      why: "Action adaptée à votre métier pour augmenter l'impact de vos résultats visibles.",
      indicator: jobIndicator(job),
      example: jobExample(job),
      indicative: "2-6 semaines"
    },
    {
      title: "Levier domaine",
      badge: "Contexte secteur",
      action: domainActions[domain] || domainActions.autre,
      why: "Action alignée sur les contraintes et standards de votre domaine d'activité.",
      indicator: domainIndicator(domain),
      example: domainExample(domain),
      indicative: "2-8 semaines"
    },
    {
      title: "Levier ancienneté",
      badge: "Contexte poste",
      action: tenureAction[tenure],
      why: "Action adaptée à votre maturité sur le poste pour rester réaliste et utile.",
      indicator: tenureIndicator(tenure),
      example: tenureExample(tenure),
      indicative: "2-8 semaines"
    }
  ];

  const unique = [];
  const seen = new Set();
  candidates.forEach((item) => {
    if (!seen.has(item.action)) {
      seen.add(item.action);
      unique.push(item);
    }
  });

  return {
    context: `Domaine: ${domainLabelFr[domain]} - Métier: ${ui.jobSelect.options[ui.jobSelect.selectedIndex]?.text || "N/A"} - Ancienneté: ${tenure === "lt6" ? "< 6 mois" : tenure === "6to24" ? "6-24 mois" : "> 24 mois"}`,
    priority: bandPriority[band],
    actions: unique.slice(0, 3)
  };
}

function updateGauge(isc) {
  const angle = Math.round((isc / 100) * 360);
  ui.chiGauge.style.setProperty("--gauge-angle", `${angle}deg`);
}

function activateZone(isc) {
  [ui.zoneFragile, ui.zoneStagnation, ui.zoneSain, ui.zoneExcellent].forEach((node) => node.classList.remove("active"));
  if (isc < 40) ui.zoneFragile.classList.add("active");
  else if (isc < 60) ui.zoneStagnation.classList.add("active");
  else if (isc < 80) ui.zoneSain.classList.add("active");
  else ui.zoneExcellent.classList.add("active");
}

function renderDimensionBars(dimensions) {
  ui.valMeaning.textContent = `${dimensions.Meaning}`;
  ui.valGrowth.textContent = `${dimensions.Growth}`;
  ui.valRecognition.textContent = `${dimensions.Recognition}`;
  ui.valEnvironment.textContent = `${dimensions.Environment}`;
  ui.barMeaning.style.width = `${dimensions.Meaning}%`;
  ui.barGrowth.style.width = `${dimensions.Growth}%`;
  ui.barRecognition.style.width = `${dimensions.Recognition}%`;
  ui.barEnvironment.style.width = `${dimensions.Environment}%`;
  ui.lvlMeaning.textContent = scoreLevel(dimensions.Meaning);
  ui.lvlGrowth.textContent = scoreLevel(dimensions.Growth);
  ui.lvlRecognition.textContent = scoreLevel(dimensions.Recognition);
  ui.lvlEnvironment.textContent = scoreLevel(dimensions.Environment);
}

function renderRecommendations(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "recommendation-item";
    li.innerHTML = `
      <div class="recommendation-head">
        <p class="recommendation-title">${item.title}</p>
        <span class="recommendation-badge">${item.badge}</span>
      </div>
      <p class="recommendation-action"><strong>Action:</strong> ${item.action}</p>
      <p class="recommendation-why"><strong>Pourquoi:</strong> ${item.why}</p>
      <p class="recommendation-indicator"><strong>Indicateur de réussite:</strong> ${item.indicator}${item.indicative ? ` (indicatif: ${item.indicative})` : ""}</p>
      <p class="recommendation-example"><strong>Exemple concret:</strong> ${item.example || "À adapter à votre contexte."}</p>
    `;
    target.appendChild(li);
  });
}

function computeAndShowResults() {
  const dimensions = computeDimensions();
  const isc = computeISC(dimensions, customWeights);
  const interpretation = getInterpretation(isc);
  const ranked = rankDimensions(dimensions);
  const weakKeys = ranked.slice(-2).map((d) => d[0]);
  const recommendations = buildRecommendations(weakKeys, interpretation.band, profile.domain, profile.job, profile.tenure);

  latestResult = {
    isc,
    dimensions,
    profile: { ...profile },
    weights: { ...customWeights },
    generatedAt: new Date().toISOString()
  };

  ui.chiScore.textContent = `${isc} / 100`;
  ui.chiLabel.textContent = interpretation.label;
  ui.chiLabel.classList.remove("good", "warn");
  ui.chiLabel.classList.add(interpretation.tone);
  ui.chiSummary.textContent = interpretation.summary;
  ui.calcFormula.textContent = `ISC = Sens*${customWeights.Meaning.toFixed(2)} + Évolution*${customWeights.Growth.toFixed(2)} + Reconnaissance*${customWeights.Recognition.toFixed(2)} + Environnement*${customWeights.Environment.toFixed(2)}`;
  ui.resultDate.textContent = `Généré le ${new Date(latestResult.generatedAt).toLocaleString("fr-FR")}`;
  updateGauge(isc);
  activateZone(isc);
  renderDimensionBars(dimensions);
  ui.recommendationContext.textContent = recommendations.context;
  ui.priorityAction.textContent = recommendations.priority;
  renderRecommendations(ui.actionsList, recommendations.actions);
  showScreen("results");
}

async function shareISC() {
  if (!latestResult) return;
  const interpretation = getInterpretation(latestResult.isc);
  const text = `Mon indice de santé de carrière (ISC) est ${latestResult.isc}/100 (${interpretation.label}).`;

  if (navigator.share) {
    try {
      await navigator.share({ title: "Indice de Santé de Carrière (ISC)", text });
      return;
    } catch {
      return;
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      ui.shareBtn.textContent = "Copie";
      setTimeout(() => { ui.shareBtn.textContent = "Partager mon ISC"; }, 1200);
    } catch {
      ui.shareBtn.textContent = "Copie impossible";
      setTimeout(() => { ui.shareBtn.textContent = "Partager mon ISC"; }, 1200);
    }
  }
}

ui.startBtn.addEventListener("click", () => {
  resetWeights();
  showScreen("weights");
});

ui.weightsNextBtn.addEventListener("click", startQuestions);
ui.weightsResetBtn.addEventListener("click", resetWeights);
[ui.weightMeaning, ui.weightGrowth, ui.weightRecognition, ui.weightEnvironment].forEach((input) => {
  input.addEventListener("input", updateWeightPreview);
});

ui.answerRange.addEventListener("input", () => {
  const value = Number(ui.answerRange.value);
  answers[currentQuestionIndex] = value;
  ui.answerValue.textContent = String(value);
});

ui.nextBtn.addEventListener("click", () => {
  if (answers[currentQuestionIndex] === null) answers[currentQuestionIndex] = Number(ui.answerRange.value);
  ui.questionCard.classList.remove("bump");
  void ui.questionCard.offsetWidth;
  ui.questionCard.classList.add("bump");
  if (navigator.vibrate) navigator.vibrate(12);

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }
  showScreen("profile");
});

ui.profileNextBtn.addEventListener("click", () => {
  profile.domain = ui.domainSelect.value;
  profile.job = ui.jobSelect.value;
  profile.tenure = ui.tenureSelect.value;
  computeAndShowResults();
});

ui.restartBtn.addEventListener("click", () => showScreen("landing"));
ui.shareBtn.addEventListener("click", shareISC);
