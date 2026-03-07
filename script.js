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

const careerProfiles = {
  explorateur: {
    profileName: "Explorateur",
    icon: "\uD83E\uDDED",
    description: "Vous \u00eates motiv\u00e9 par l\u2019apprentissage, les nouvelles opportunit\u00e9s et la progression."
  },
  architecte: {
    profileName: "Architecte",
    icon: "\uD83C\uDFD7\uFE0F",
    description: "Vous avez besoin que votre travail ait du sens et une utilit\u00e9 concr\u00e8te."
  },
  stabilisateur: {
    profileName: "Stabilisateur",
    icon: "\uD83D\uDEE1\uFE0F",
    description: "Vous vous \u00e9panouissez dans un environnement stable avec une \u00e9quipe solide."
  },
  ambitieux_reconnu: {
    profileName: "Ambitieux reconnu",
    icon: "\uD83C\uDFC6",
    description: "Vous \u00eates motiv\u00e9 lorsque votre travail est reconnu et valoris\u00e9."
  },
  stratege: {
    profileName: "Strat\u00E8ge",
    icon: "\u265F\uFE0F",
    description: "Vous avancez lorsque votre travail combine impact et progression."
  },
  pilier: {
    profileName: "Pilier",
    icon: "\uD83E\uDDF1",
    description: "Vous contribuez avec engagement lorsque votre travail est utile et reconnu."
  },
  challenger: {
    profileName: "Challenger",
    icon: "\u26A1",
    description: "Vous \u00eates stimul\u00e9 par les d\u00e9fis et la progression rapide."
  },
  desengage_latent: {
    profileName: "D\u00E9sengag\u00E9 latent",
    icon: "\uD83D\uDD25",
    description: "Plusieurs aspects de votre situation actuelle ne correspondent plus \u00e0 vos attentes."
  }
};

const profileImageFileByKey = {
  stratege: "strategiste.png",
  architecte: "architecte.png",
  explorateur: "explorateur.png",
  stabilisateur: "stabilisateur.png",
  challenger: "challenger.png",
  ambitieux_reconnu: "ambitieux.png",
  pilier: "pilier.png",
  desengage_latent: "desengage.png"
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
  priorityList: document.getElementById("priority-list"),
  presetBalancedBtn: document.getElementById("preset-balanced-btn"),
  presetCareerBtn: document.getElementById("preset-career-btn"),
  presetWellbeingBtn: document.getElementById("preset-wellbeing-btn"),
  presetImpactBtn: document.getElementById("preset-impact-btn"),
  questionCount: document.getElementById("question-count"),
  remainingTime: document.getElementById("remaining-time"),
  progressFill: document.getElementById("progress-fill"),
  questionText: document.getElementById("question-text"),
  questionCard: document.getElementById("question-card"),
  answerRange: document.getElementById("answer-range"),
  answerValue: document.getElementById("answer-value"),
  nextBtn: document.getElementById("next-btn"),
  domainSelect: document.getElementById("domain-select"),
  functionSelect: document.getElementById("function-select"),
  companySizeSelect: document.getElementById("company-size-select"),
  tenureSelect: document.getElementById("tenure-select"),
  hierarchySelect: document.getElementById("hierarchy-select"),
  offerSelect: document.getElementById("offer-select"),
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
  radarChart: document.getElementById("radarChart"),
  quickStrongestDimension: document.getElementById("quickStrongestDimension"),
  quickWeakestDimension: document.getElementById("quickWeakestDimension"),
  heroProgressFill: document.getElementById("heroProgressFill"),
  socialComparisonLine: document.getElementById("socialComparisonLine"),
  dimensionSummary: document.getElementById("dimensionSummary"),
  analysisText: document.getElementById("analysisText"),
  recommendationContext: document.getElementById("recommendationContext"),
  actionsList: document.getElementById("actionsList"),
  copySummaryBtn: document.getElementById("copy-summary-btn"),
  downloadCardBtn: document.getElementById("download-card-btn"),
  secondDimensionSummary: document.getElementById("secondDimensionSummary"),
  shareResultCard: document.getElementById("shareResultCard"),
  shareCardProfileLine: document.getElementById("shareCardProfileLine"),
  shareCardISCLine: document.getElementById("shareCardISCLine"),
  shareCardStateLine: document.getElementById("shareCardStateLine"),
  shareCardStrongLine: document.getElementById("shareCardStrongLine"),
  shareCardWeakLine: document.getElementById("shareCardWeakLine"),
  profileImage: document.getElementById("profileImage"),
  profileImageFallback: document.getElementById("profileImageFallback"),
  careerProfileName: document.getElementById("careerProfileName"),
  careerStateLabel: document.getElementById("careerStateLabel"),
  careerISCScore: document.getElementById("careerISCScore"),
  careerProfileDescription: document.getElementById("careerProfileDescription"),
  careerStrongestDimension: document.getElementById("careerStrongestDimension"),
  careerSecondRow: document.getElementById("careerSecondRow"),
  careerSecondDimension: document.getElementById("careerSecondDimension"),
  careerWeakestDimension: document.getElementById("careerWeakestDimension"),
  careerShareLine: document.getElementById("careerShareLine")
};

let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill(null);
let customWeights = { Meaning: 0.4, Growth: 0.3, Recognition: 0.2, Environment: 0.1 };
let latestResult = null;
const profile = {
  domainInput: "tech_it",
  functionInput: "it_data_product",
  companySize: "startup",
  tenureInput: "6m_2y",
  hierarchy: "individual_contributor",
  offerIntent: "",
  domain: "tech",
  job: "data",
  tenure: "6to24"
};
const rankToWeight = [0.4, 0.3, 0.2, 0.1];
const defaultRanking = ["Meaning", "Growth", "Recognition", "Environment"];
const rankingPresets = {
  balanced: ["Meaning", "Growth", "Recognition", "Environment"],
  career: ["Growth", "Recognition", "Meaning", "Environment"],
  wellbeing: ["Environment", "Meaning", "Recognition", "Growth"],
  impact: ["Meaning", "Growth", "Environment", "Recognition"]
};

function showScreen(key) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[key].classList.add("active");
  document.body.classList.toggle("results-screen", key === "results");
  if (key === "landing") ui.progressFill.style.width = "0%";
  if (key === "results") ui.progressFill.style.width = "100%";
}

function getRankingFromDOM() {
  return [...ui.priorityList.querySelectorAll(".priority-card")].map((node) => node.dataset.dimension);
}

function rankingToWeights(ranking) {
  const weights = { Meaning: 0, Growth: 0, Recognition: 0, Environment: 0 };
  ranking.forEach((dimensionKey, index) => {
    weights[dimensionKey] = rankToWeight[index];
  });
  return weights;
}

function updateRankingBadges() {
  const cards = [...ui.priorityList.querySelectorAll(".priority-card")];
  cards.forEach((node, index) => {
    const badge = node.querySelector(".priority-rank");
    if (badge) badge.textContent = String(index + 1);
  });
  cards.forEach((node, index) => {
    const upButton = node.querySelector(".priority-move-btn[data-move=\"up\"]");
    const downButton = node.querySelector(".priority-move-btn[data-move=\"down\"]");
    if (upButton) upButton.disabled = index === 0;
    if (downButton) downButton.disabled = index === cards.length - 1;
  });
}

function applyRanking(ranking) {
  ranking.forEach((dimensionKey) => {
    const card = ui.priorityList.querySelector(`.priority-card[data-dimension="${dimensionKey}"]`);
    if (card) ui.priorityList.appendChild(card);
  });
  updateRankingBadges();
  customWeights = rankingToWeights(getRankingFromDOM());
}

function resetWeights() {
  applyRanking(defaultRanking);
}

function setupPriorityDragAndDrop() {
  let draggingCard = null;

  const cards = [...ui.priorityList.querySelectorAll(".priority-card")];
  cards.forEach((card) => {
    card.draggable = true;
  });

  ui.priorityList.addEventListener("dragstart", (event) => {
    const card = event.target.closest(".priority-card");
    if (!card) return;
    draggingCard = card;
    card.classList.add("dragging");
    if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
  });

  ui.priorityList.addEventListener("dragover", (event) => {
    event.preventDefault();
    const overCard = event.target.closest(".priority-card");
    if (!draggingCard || !overCard || overCard === draggingCard) return;
    const overRect = overCard.getBoundingClientRect();
    const insertAfter = event.clientY > overRect.top + overRect.height / 2;
    if (insertAfter) overCard.after(draggingCard);
    else overCard.before(draggingCard);
  });

  ui.priorityList.addEventListener("dragend", () => {
    if (!draggingCard) return;
    draggingCard.classList.remove("dragging");
    draggingCard = null;
    updateRankingBadges();
    customWeights = rankingToWeights(getRankingFromDOM());
  });
}

function setupPriorityTouchReorder() {
  let activeCard = null;

  ui.priorityList.addEventListener("touchstart", (event) => {
    const card = event.target.closest(".priority-card");
    if (!card) return;
    activeCard = card;
    activeCard.classList.add("dragging");
  }, { passive: true });

  ui.priorityList.addEventListener("touchmove", (event) => {
    if (!activeCard) return;
    const touch = event.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const overCard = target ? target.closest(".priority-card") : null;
    if (!overCard || overCard === activeCard) return;
    const overRect = overCard.getBoundingClientRect();
    const insertAfter = touch.clientY > overRect.top + overRect.height / 2;
    if (insertAfter) overCard.after(activeCard);
    else overCard.before(activeCard);
    event.preventDefault();
  }, { passive: false });

  ui.priorityList.addEventListener("touchend", () => {
    if (!activeCard) return;
    activeCard.classList.remove("dragging");
    activeCard = null;
    updateRankingBadges();
    customWeights = rankingToWeights(getRankingFromDOM());
  });
}

function mapDomainToLegacy(domainInput) {
  switch (domainInput) {
    case "tech_it": return "tech";
    case "finance_banking_insurance": return "finance";
    case "industry_engineering":
    case "construction_real_estate":
    case "energy_environment": return "industrie";
    case "health_pharma": return "sante";
    case "consulting_audit": return "conseil";
    case "marketing_communication":
    case "media_creation": return "commerce";
    case "commerce_distribution":
    case "hospitality_tourism": return "commerce";
    case "education_research": return "education";
    case "public_admin": return "public";
    case "transport_logistics": return "transport";
    default: return "autre";
  }
}

function mapFunctionToLegacy(functionInput) {
  switch (functionInput) {
    case "direction_leadership": return "manager_conseil";
    case "team_management":
    case "manager_of_managers": return "project_manager";
    case "engineering_technical": return "dev";
    case "it_data_product": return "data";
    case "finance_accounting": return "compta";
    case "marketing_communication": return "marketing";
    case "sales_business_dev": return "vente";
    case "operations_production": return "production";
    case "support_admin":
    case "human_resources": return "backoffice_conseil";
    case "research_expertise": return "consultant";
    default: return "autre_metier";
  }
}

function mapTenureToLegacy(tenureInput) {
  if (tenureInput === "lt6") return "lt6";
  if (tenureInput === "6m_2y") return "6to24";
  return "gt24";
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

function getCareerStateLabel(iscScore) {
  if (iscScore >= 80) return "\uD83D\uDE80 Align\u00E9";
  if (iscScore >= 65) return "\uD83C\uDF31 En progression";
  if (iscScore >= 50) return "\u26A0\uFE0F D\u00E9salignement";
  return "\uD83D\uDD25 Risque de rupture";
}

function getCareerProfile({ iscScore, sensScore, evolutionScore, reconnaissanceScore, environnementScore }) {
  const dimensionScores = {
    Meaning: sensScore,
    Growth: evolutionScore,
    Recognition: reconnaissanceScore,
    Environment: environnementScore
  };

  const ranked = rankDimensions(dimensionScores);
  const strongestKey = ranked[0][0];
  const secondKey = ranked[1][0];
  const weakestKey = ranked[ranked.length - 1][0];
  const topDiff = ranked[0][1] - ranked[1][1];
  const stateLabel = getCareerStateLabel(iscScore);

  let profileKey = "explorateur";
  let secondDimension = null;

  if (iscScore < 50) {
    profileKey = "desengage_latent";
  } else if (topDiff <= 5) {
    const topPair = [strongestKey, secondKey].sort().join("|");
    if (topPair === "Growth|Meaning") profileKey = "stratege";
    else if (topPair === "Environment|Meaning") profileKey = "pilier";
    else if (topPair === "Growth|Recognition") profileKey = "challenger";
  }

  if (profileKey === "explorateur") {
    if (strongestKey === "Meaning") profileKey = "architecte";
    else if (strongestKey === "Environment") profileKey = "stabilisateur";
    else if (strongestKey === "Recognition") profileKey = "ambitieux_reconnu";
  }

  if (profileKey === "stratege" || profileKey === "pilier" || profileKey === "challenger") {
    secondDimension = dimensionLabelFr[secondKey];
  }

  const profileData = careerProfiles[profileKey];
  return {
    profileKey,
    profileName: profileData.profileName,
    icon: profileData.icon,
    stateLabel,
    description: profileData.description,
    strongestDimension: dimensionLabelFr[strongestKey],
    secondDimension,
    weakestDimension: dimensionLabelFr[weakestKey]
  };
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

function getCareerState(iscScore) {
  if (iscScore >= 80) return { label: "\uD83D\uDE80 Align\u00e9", key: "aligned", helper: "Votre situation professionnelle est bien align\u00e9e avec ce qui vous motive aujourd\u2019hui." };
  if (iscScore >= 65) return { label: "\uD83C\uDF31 En progression", key: "progress", helper: "Votre situation est globalement positive mais certains leviers peuvent encore \u00eatre renforc\u00e9s." };
  if (iscScore >= 50) return { label: "\u26A0\uFE0F D\u00e9salignement", key: "misaligned", helper: "Certains aspects de votre travail ne correspondent pas totalement \u00e0 vos attentes." };
  return { label: "\uD83D\uDD25 Risque de rupture", key: "risk", helper: "Votre situation actuelle pourrait conduire \u00e0 un d\u00e9sengagement si rien ne change." };
}

function movePriorityCard(card, direction) {
  if (!card || !direction) return;
  if (direction === "up") {
    const previous = card.previousElementSibling;
    if (previous?.classList.contains("priority-card")) previous.before(card);
  } else if (direction === "down") {
    const next = card.nextElementSibling;
    if (next?.classList.contains("priority-card")) next.after(card);
  }
  updateRankingBadges();
  customWeights = rankingToWeights(getRankingFromDOM());
}

function setupPriorityButtonReorder() {
  ui.priorityList.addEventListener("click", (event) => {
    const moveButton = event.target.closest(".priority-move-btn");
    if (!moveButton) return;
    const card = moveButton.closest(".priority-card");
    if (!card) return;
    const direction = moveButton.dataset.move === "up" ? "up" : "down";
    movePriorityCard(card, direction);
  });
}

function getSocialComparisonPercent(profileKey, isc) {
  const profileBias = {
    stratege: 0,
    architecte: 2,
    explorateur: -1,
    stabilisateur: 3,
    challenger: -2,
    ambitieux_reconnu: 1,
    pilier: 2,
    desengage_latent: 5
  };
  const bias = profileBias[profileKey] ?? 0;
  const raw = 58 - (isc * 0.6) + bias;
  return Math.max(8, Math.min(58, Math.round(raw)));
}

function getDimensionRanking(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

function getStrongestDimension(scores) {
  return getDimensionRanking(scores)[0][0];
}

function getWeakestDimension(scores) {
  const ranking = getDimensionRanking(scores);
  return ranking[ranking.length - 1][0];
}

function getSecondStrongestDimension(scores) {
  return getDimensionRanking(scores)[1][0];
}

function getTopPriority(weights) {
  return Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0];
}

function friendlyDimension(key) {
  return key === "Meaning" ? "Sens" : key === "Growth" ? "\u00c9volution" : key === "Recognition" ? "Reconnaissance" : "Environnement";
}

function buildPersonalizedAnalysis(data) {
  const strongest = friendlyDimension(data.strongestKey);
  const weakest = friendlyDimension(data.weakestKey);

  let stateLine = "Votre résultat montre un besoin de réalignement progressif.";
  if (data.state.key === "aligned") stateLine = "Votre resultat montre une situation actuellement bien alignee avec vos attentes.";
  else if (data.state.key === "progress") stateLine = "Votre resultat montre une base solide avec une marge de progression ciblee.";
  else if (data.state.key === "misaligned") stateLine = "Votre resultat montre un decalage entre vos attentes et votre experience actuelle.";

  const priorityLine = data.topPriorityValue < 60
    ? `Votre priorite principale est ${friendlyDimension(data.topPriorityKey)}, mais cet axe est aujourd'hui en retrait.`
    : `Votre moteur principal est ${strongest}, avec un point de vigilance sur ${weakest.toLowerCase()}.`;

  let actionLine = "Action immediate : formalisez une action visible et mesurable dans les 30 prochains jours.";
  if (data.profile.offerIntent === "leave_immediately" || data.profile.offerIntent === "consider_seriously") {
    actionLine = "Action immediate : comparez objectivement votre option interne et une option externe avant decision.";
  } else if (data.weakestKey === "Recognition") {
    actionLine = "Action immediate : alignez des criteres de reconnaissance ecrits avec votre manager.";
  } else if (data.weakestKey === "Growth") {
    actionLine = "Action immediate : obtenez une nouvelle responsabilite avec objectif clair et date de revue.";
  } else if (data.weakestKey === "Meaning") {
    actionLine = "Action immediate : reallouez du temps vers des missions plus utiles et plus visibles.";
  } else if (data.weakestKey === "Environment") {
    actionLine = "Action immediate : mettez en place un rituel hebdomadaire de priorisation avec votre manager.";
  }

  return `${stateLine} ${priorityLine} ${actionLine}`;
}
function buildRecommendations(data) {
  const items = [];
  const profileHint = data.careerProfile?.profileName ? `Coherent avec votre profil ${data.careerProfile.profileName}, ` : "";

  if (data.weakestKey === "Recognition") {
    items.push({ title: "Rendre vos contributions visibles", desc: "Planifiez un point mensuel avec preuves concretes de vos resultats et impacts." });
  } else if (data.weakestKey === "Growth") {
    items.push({ title: "Negocier une prochaine etape", desc: "Demandez une responsabilite additionnelle avec objectifs, perimetre et date de revue." });
  } else if (data.weakestKey === "Meaning") {
    items.push({ title: "Reconnecter votre role a l'impact", desc: "Reallouez du temps vers des missions utiles et visibles pour renforcer le sens au quotidien." });
  } else {
    items.push({ title: "Stabiliser votre environnement", desc: "Isolez un irritant majeur d'equipe et traitez-le via un rituel d'alignement hebdomadaire." });
  }

  if (data.topPriorityKey === "Growth") {
    items.push({ title: "Prioriser votre progression", desc: `${profileHint}formalisez un plan 90 jours oriente competences et mobilite interne.`.trim() });
  } else if (data.topPriorityKey === "Meaning") {
    items.push({ title: "Renforcer l'utilite de vos missions", desc: `${profileHint}negociez un ajustement de perimetre autour des sujets a plus fort impact.`.trim() });
  } else if (data.topPriorityKey === "Recognition") {
    items.push({ title: "Clarifier vos criteres de reconnaissance", desc: `${profileHint}alignez avec votre manager les attentes explicites de visibilite, contribution et progression.`.trim() });
  } else {
    items.push({ title: "Ameliorer vos conditions d'execution", desc: `${profileHint}clarifiez charge, priorites et mode de collaboration pour fiabiliser le cadre de travail.`.trim() });
  }

  if (data.profile.offerIntent === "leave_immediately" || data.profile.offerIntent === "consider_seriously") {
    items.push({ title: "Arbitrer votre option de mobilite", desc: "Comparez votre poste actuel a 2 options externes avec une grille factuelle." });
  } else if (["5_10y", "10_20y", "20plus"].includes(data.profile.tenureInput)) {
    items.push({ title: "Relancer votre trajectoire", desc: "Apres une anciennete longue, cadrez une etape de repositionnement sur 90 jours." });
  } else {
    const jobTip = jobActions[data.profile.job] || jobActions.autre_metier;
    const domainTip = domainActions[data.profile.domain] || domainActions.autre;
    items.push({ title: "Adapter l'action a votre contexte", desc: `${jobTip} ${domainTip}` });
  }

  return items.slice(0, 3);
}
function updateGauge(isc) {
  const angle = Math.round((isc / 100) * 360);
  if (ui.chiGauge) ui.chiGauge.style.setProperty("--gauge-angle", `${angle}deg`);
  if (ui.heroProgressFill) ui.heroProgressFill.style.width = `${isc}%`;
}

function activateZone(isc) {
  return isc;
}

function drawRadarChart(dimensions) {
  if (!ui.radarChart) return;
  const canvas = ui.radarChart;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const isMobileViewport = (window.matchMedia && window.matchMedia("(max-width: 768px)").matches)
    || window.innerWidth <= 768;
  const rect = canvas.getBoundingClientRect();
  const minCanvasSize = isMobileViewport ? 220 : 280;
  const fallbackSize = isMobileViewport ? 300 : 320;
  const size = Math.max(minCanvasSize, Math.min(420, Math.floor(rect.width || fallbackSize)));
  const dpr = window.devicePixelRatio || 1;
  const pixelSize = Math.floor(size * dpr);
  if (canvas.width !== pixelSize || canvas.height !== pixelSize) {
    canvas.width = pixelSize;
    canvas.height = pixelSize;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const center = size / 2;
  const keys = ["Meaning", "Growth", "Recognition", "Environment"];
  const labels = ["Sens", "Evolution", "Reconnaissance", "Environnement"];
  const values = keys.map((key) => Math.max(0, Math.min(100, Number(dimensions[key] || 0))));
  const angles = keys.map((_, i) => (-Math.PI / 2) + (i * 2 * Math.PI / keys.length));
  const overallScore = Number.isFinite(latestResult?.isc)
    ? latestResult.isc
    : Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);

  // Dedicated compact mobile mode:
  // polygon (inner) < bubbles (middle) < labels (outer), with guaranteed spacing.
  const isMobileRadar = size <= 360;
  const useMobileTuning = isMobileViewport;
  const labelFontSize = useMobileTuning ? 11 : (isMobileRadar ? 10 : 12);
  const bubbleFontSize = useMobileTuning ? 10 : (isMobileRadar ? 11 : 12);
  const chipHeight = useMobileTuning ? 22 : (isMobileRadar ? 24 : 28);
  const chipHorizontalPadding = useMobileTuning ? 4 : (isMobileRadar ? 5 : 6);

  ctx.font = `600 ${labelFontSize}px Manrope, sans-serif`;
  const labelBlocks = labels.map((label) => ({
    label,
    width: ctx.measureText(label).width,
    height: labelFontSize + 2
  }));
  const sideLabelHalfWidth = Math.max(labelBlocks[1].width, labelBlocks[3].width) / 2;
  const verticalLabelHalfHeight = Math.max(labelBlocks[0].height, labelBlocks[2].height) / 2;

  ctx.font = `700 ${bubbleFontSize}px Manrope, sans-serif`;
  const maxBubbleTextWidth = Math.max(...values.map((value) => ctx.measureText(String(value)).width));
  const maxBubbleWidth = Math.max(32, Math.ceil(maxBubbleTextWidth) + (chipHorizontalPadding * 2));
  const bubbleHalfX = maxBubbleWidth / 2;
  const bubbleHalfY = chipHeight / 2;

  const outerPadding = useMobileTuning ? 8 : (isMobileRadar ? 8 : 12);
  const labelToBubbleGap = useMobileTuning ? 14 : 12;
  const bubbleLabelGap = useMobileTuning ? 24 : (isMobileRadar ? 22 : 30);
  const polygonBubbleGap = useMobileTuning ? 10 : (isMobileRadar ? 14 : 18);
  const maxLabelRingBySide = center - outerPadding - sideLabelHalfWidth - 2;
  const maxLabelRingByVertical = center - outerPadding - verticalLabelHalfHeight - 2;
  const maxLabelRing = Math.max(useMobileTuning ? 90 : 80, Math.min(maxLabelRingBySide, maxLabelRingByVertical));

  let polygonRadius = useMobileTuning ? Math.min(Math.round(size * 0.31), center - 42) : (isMobileRadar ? 112 : Math.min(132, center - 60));
  let bubbleRingRadius = polygonRadius + polygonBubbleGap;
  let labelRingRadius = bubbleRingRadius + bubbleLabelGap;
  if (labelRingRadius > maxLabelRing) {
    const overflow = labelRingRadius - maxLabelRing;
    polygonRadius -= overflow;
    bubbleRingRadius -= overflow;
    labelRingRadius -= overflow;
  }
  const minPolygonRadius = useMobileTuning ? 56 : (isMobileRadar ? 76 : 86);
  if (polygonRadius < minPolygonRadius) {
    polygonRadius = minPolygonRadius;
    bubbleRingRadius = polygonRadius + polygonBubbleGap;
    labelRingRadius = Math.min(maxLabelRing, bubbleRingRadius + bubbleLabelGap);
    bubbleRingRadius = Math.min(bubbleRingRadius, labelRingRadius - bubbleLabelGap);
  }

  // Hard cap bubble ring by actual wrapper space so labels and bubbles cannot collide
  // on extreme score combinations (e.g. 100/100/100/100).
  const wrapper = canvas.closest(".radar-wrapper");
  if (wrapper) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const offsetX = canvasRect.left - wrapperRect.left;
    const offsetY = canvasRect.top - wrapperRect.top;
    const clampMargin = useMobileTuning ? 4 : 8;

    const maxBubbleLeft = offsetX + center - (clampMargin + labelBlocks[3].width + labelToBubbleGap + bubbleHalfX);
    const maxBubbleRight = wrapperRect.width - (offsetX + center) - (clampMargin + labelBlocks[1].width + labelToBubbleGap + bubbleHalfX);
    const maxBubbleTop = offsetY + center - (clampMargin + labelBlocks[0].height + labelToBubbleGap + bubbleHalfY);
    const maxBubbleBottom = wrapperRect.height - (offsetY + center) - (clampMargin + labelBlocks[2].height + labelToBubbleGap + bubbleHalfY);

    const maxBubbleRingByLabels = Math.max(26, Math.min(maxBubbleLeft, maxBubbleRight, maxBubbleTop, maxBubbleBottom));
    bubbleRingRadius = Math.min(bubbleRingRadius, maxBubbleRingByLabels);
    polygonRadius = Math.min(polygonRadius, Math.max(36, bubbleRingRadius - polygonBubbleGap));
    labelRingRadius = Math.max(bubbleRingRadius + bubbleLabelGap, labelRingRadius);
  }

  const pointOnRadius = (angle, radialDistance) => ({
    x: center + Math.cos(angle) * radialDistance,
    y: center + Math.sin(angle) * radialDistance
  });

  const drawRoundedRect = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  };

  for (let level = 1; level <= 4; level += 1) {
    const ratio = level / 4;
    ctx.beginPath();
    angles.forEach((angle, idx) => {
      const p = pointOnRadius(angle, polygonRadius * ratio);
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(203, 213, 225, 0.68)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  angles.forEach((angle) => {
    const p = pointOnRadius(angle, polygonRadius);
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = "rgba(148, 163, 184, 0.44)";
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  ctx.beginPath();
  angles.forEach((angle, idx) => {
    const p = pointOnRadius(angle, polygonRadius * (values[idx] / 100));
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(37, 99, 235, 0.25)";
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  const bubblePoints = [];
  angles.forEach((angle, idx) => {
    const p = pointOnRadius(angle, polygonRadius * (values[idx] / 100));
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#1e40af";
    ctx.fill();

    const pointRadius = polygonRadius * (values[idx] / 100);
    const minBubbleRadius = useMobileTuning ? 34 : 40;
    const bubbleRadius = useMobileTuning
      ? Math.min(bubbleRingRadius, Math.max(minBubbleRadius, pointRadius + 8))
      : Math.min(bubbleRingRadius, Math.max(minBubbleRadius, pointRadius + 14));
    const chipAnchor = pointOnRadius(angle, bubbleRadius);
    bubblePoints[idx] = chipAnchor;
    const chipText = String(values[idx]);
    ctx.font = `700 ${bubbleFontSize}px Manrope, sans-serif`;
    const chipWidth = Math.max(32, Math.ceil(ctx.measureText(chipText).width) + (chipHorizontalPadding * 2));
    const chipX = Math.max(8, Math.min(size - chipWidth - 8, chipAnchor.x - (chipWidth / 2)));
    const chipY = Math.max(8, Math.min(size - chipHeight - 8, chipAnchor.y - (chipHeight / 2)));

    drawRoundedRect(chipX, chipY, chipWidth, chipHeight, 9);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#93c5fd";
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.fillStyle = "#1e3a8a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(chipText, chipX + (chipWidth / 2), chipY + (chipHeight / 2) + 0.5);
  });

  const syncExternalRadarLabels = () => {
    const wrapper = canvas.closest(".radar-wrapper");
    if (!wrapper) return false;
    const topEl = wrapper.querySelector(".radar-label-top");
    const rightEl = wrapper.querySelector(".radar-label-right");
    const bottomEl = wrapper.querySelector(".radar-label-bottom");
    const leftEl = wrapper.querySelector(".radar-label-left");
    const labelElements = [topEl, rightEl, bottomEl, leftEl];
    if (labelElements.some((el) => !el)) return false;

    const showExternal = true;
    labelElements.forEach((el) => {
      el.style.display = showExternal ? "block" : "none";
    });
    if (!showExternal) return false;

    const wrapperRect = wrapper.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const offsetX = canvasRect.left - wrapperRect.left;
    const offsetY = canvasRect.top - wrapperRect.top;
    const gap = labelToBubbleGap + 4;
    const wrapperWidth = wrapperRect.width;
    const wrapperHeight = wrapperRect.height;
    const clampMargin = useMobileTuning ? 4 : 8;
    const labelFontPx = useMobileTuning ? 11 : 12;

    const placements = [
      { el: topEl, point: bubblePoints[0], mode: "top" },
      { el: rightEl, point: bubblePoints[1], mode: "right" },
      { el: bottomEl, point: bubblePoints[2], mode: "bottom" },
      { el: leftEl, point: bubblePoints[3], mode: "left" }
    ];

    placements.forEach(({ el, point, mode }, idx) => {
      el.textContent = labels[idx];
      if (!point) return;
      el.style.position = "absolute";
      el.style.whiteSpace = "nowrap";
      el.style.wordBreak = "normal";
      el.style.overflowWrap = "normal";
      el.style.textAlign = "center";
      el.style.fontSize = `${labelFontPx}px`;
      el.style.fontWeight = "600";
      el.style.lineHeight = "1.1";
      el.style.color = "#25354b";
      el.style.pointerEvents = "none";
      el.style.transform = "none";

      const px = offsetX + point.x;
      const py = offsetY + point.y;
      const labelRect = el.getBoundingClientRect();
      const labelW = labelRect.width || 0;
      const labelH = labelRect.height || 0;
      let left = px - (labelW / 2);
      let top = py - (labelH / 2);

      if (mode === "top") {
        left = px - (labelW / 2);
        top = py - bubbleHalfY - gap - labelH;
      } else if (mode === "right") {
        left = px + bubbleHalfX + gap;
        top = py - (labelH / 2);
      } else if (mode === "bottom") {
        left = px - (labelW / 2);
        top = py + bubbleHalfY + gap;
      } else {
        left = px - bubbleHalfX - gap - labelW;
        top = py - (labelH / 2);
      }

      left = Math.max(clampMargin, Math.min(wrapperWidth - labelW - clampMargin, left));
      top = Math.max(clampMargin, Math.min(wrapperHeight - labelH - clampMargin, top));
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
    });

    return true;
  };

  const externalLabelsRendered = syncExternalRadarLabels();

  if (!externalLabelsRendered) {
    const axisDirections = [
      { x: 0, y: -1 }, // top
      { x: 1, y: 0 }, // right
      { x: 0, y: 1 }, // bottom
      { x: -1, y: 0 } // left
    ];
    labels.forEach((label, idx) => {
      const anchor = pointOnRadius(angles[idx], labelRingRadius);
      ctx.font = `600 ${labelFontSize}px Manrope, sans-serif`;
      const block = labelBlocks[idx];
      const blockWidth = block.width;
      const blockHeight = block.height;
      const bubblePoint = bubblePoints[idx] || pointOnRadius(angles[idx], bubbleRingRadius);
      const labelHalfW = blockWidth / 2;
      const labelHalfH = blockHeight / 2;
      let x = anchor.x;
      let y = anchor.y;

      if (idx === 0) { // Top
        x = center;
        y = Math.min(anchor.y, bubblePoint.y - bubbleHalfY - labelToBubbleGap - labelHalfH);
      } else if (idx === 1) { // Right
        x = Math.max(anchor.x, bubblePoint.x + bubbleHalfX + labelToBubbleGap + labelHalfW);
        y = bubblePoint.y;
      } else if (idx === 2) { // Bottom
        x = center;
        y = Math.max(anchor.y, bubblePoint.y + bubbleHalfY + labelToBubbleGap + labelHalfH);
      } else { // Left
        x = Math.min(anchor.x, bubblePoint.x - bubbleHalfX - labelToBubbleGap - labelHalfW);
        y = bubblePoint.y;
      }

      const bubbleLeft = bubblePoint.x - bubbleHalfX - labelToBubbleGap;
      const bubbleRight = bubblePoint.x + bubbleHalfX + labelToBubbleGap;
      const bubbleTop = bubblePoint.y - bubbleHalfY - labelToBubbleGap;
      const bubbleBottom = bubblePoint.y + bubbleHalfY + labelToBubbleGap;
      const direction = axisDirections[idx];
      const pushStep = 4;
      for (let n = 0; n < 10; n += 1) {
        const labelLeft = x - labelHalfW;
        const labelRight = x + labelHalfW;
        const labelTop = y - labelHalfH;
        const labelBottom = y + labelHalfH;
        const intersects = !(labelRight < bubbleLeft || labelLeft > bubbleRight || labelBottom < bubbleTop || labelTop > bubbleBottom);
        if (!intersects) break;
        x += direction.x * pushStep;
        y += direction.y * pushStep;
      }

      x = Math.max(labelHalfW + outerPadding, Math.min(size - labelHalfW - outerPadding, x));
      y = Math.max(labelHalfH + outerPadding, Math.min(size - labelHalfH - outerPadding, y));

      ctx.fillStyle = "#25354b";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, x, y);
    });
  }

  ctx.beginPath();
  ctx.arc(center, center, 31, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.fill();
  ctx.strokeStyle = "#c7d2fe";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  ctx.fillStyle = "#475569";
  ctx.font = "700 9px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("ISC", center, center - 5);
  ctx.fillStyle = "#0f172a";
  ctx.font = "800 18px Manrope, sans-serif";
  ctx.textBaseline = "top";
  ctx.fillText(String(overallScore), center, center - 2);
}

function renderDimensionBars(dimensions) {
  if (ui.valMeaning) ui.valMeaning.textContent = `${dimensions.Meaning}`;
  if (ui.valGrowth) ui.valGrowth.textContent = `${dimensions.Growth}`;
  if (ui.valRecognition) ui.valRecognition.textContent = `${dimensions.Recognition}`;
  if (ui.valEnvironment) ui.valEnvironment.textContent = `${dimensions.Environment}`;
  if (ui.barMeaning) ui.barMeaning.style.width = `${dimensions.Meaning}%`;
  if (ui.barGrowth) ui.barGrowth.style.width = `${dimensions.Growth}%`;
  if (ui.barRecognition) ui.barRecognition.style.width = `${dimensions.Recognition}%`;
  if (ui.barEnvironment) ui.barEnvironment.style.width = `${dimensions.Environment}%`;
  drawRadarChart(dimensions);
}

function renderRecommendations(target, items) {
  target.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "action-step";
    li.innerHTML = `
      <p class="action-step-title">${index + 1}. ${item.title}</p>
      <p class="action-step-desc">${item.desc}</p>
    `;
    target.appendChild(li);
  });
}

function renderCareerProfile(careerProfile, isc) {
  if (ui.profileImage && ui.profileImageFallback) {
    const mappedImageFile = profileImageFileByKey[careerProfile.profileKey];
    const directImagePath = `assets/profiles/${careerProfile.profileKey}.png`;
    const fallbackImagePath = mappedImageFile ? `assets/profiles/${mappedImageFile}` : null;

    // Reset before loading so fallback remains visible until image is ready.
    ui.profileImage.hidden = true;
    ui.profileImageFallback.hidden = false;
    ui.profileImage.removeAttribute("src");
    ui.profileImage.alt = "Illustration indisponible";

    ui.profileImage.onerror = () => {
      if (ui.profileImage.dataset.fallbackTried !== "1" && fallbackImagePath) {
        ui.profileImage.dataset.fallbackTried = "1";
        ui.profileImage.src = fallbackImagePath;
        return;
      }
      ui.profileImage.hidden = true;
      ui.profileImageFallback.hidden = false;
      ui.profileImage.alt = "Illustration indisponible";
    };
    ui.profileImage.onload = () => {
      ui.profileImage.hidden = false;
      ui.profileImageFallback.hidden = true;
    };

    ui.profileImage.dataset.fallbackTried = "0";
    ui.profileImage.alt = `Illustration du profil ${careerProfile.profileName}`;
    ui.profileImage.src = directImagePath;
  }

  ui.careerProfileName.textContent = careerProfile.profileName;
  if (ui.careerStateLabel) ui.careerStateLabel.textContent = careerProfile.stateLabel;
  if (ui.careerISCScore) ui.careerISCScore.textContent = `ISC: ${isc} / 100`;
  ui.careerProfileDescription.textContent = careerProfile.description;
  ui.careerStrongestDimension.textContent = careerProfile.strongestDimension;
  ui.careerWeakestDimension.textContent = careerProfile.weakestDimension;

  if (careerProfile.secondDimension) {
    ui.careerSecondRow.hidden = false;
    ui.careerSecondDimension.textContent = careerProfile.secondDimension;
  } else {
    ui.careerSecondRow.hidden = true;
  }

  ui.careerShareLine.textContent = `Mon profil carrière : ${careerProfile.profileName}\nISC : ${isc}`;
}

function buildShareSummary(result) {
  if (!result) return "";
  const profileName = result.careerProfile?.profileName || "Profil carrière";
  const stateLabel = result.state?.label || "Résultat ISC";
  const lines = [
    `Mon profil carrière : ${profileName}`,
    `ISC : ${result.isc}/100`,
    `État : ${stateLabel}`
  ];

  if (result.dimensions) {
    lines.push(`Moteur principal : ${friendlyDimension(getStrongestDimension(result.dimensions))}`);
    lines.push(`Point de vigilance : ${friendlyDimension(getWeakestDimension(result.dimensions))}`);
  }

  return lines.join("\n");
}

function renderShareCard(result, strongestKey, weakestKey) {
  if (!ui.shareResultCard) return;
  const profileName = result.careerProfile?.profileName;
  const profileIcon = result.careerProfile?.icon || "";
  ui.shareCardProfileLine.textContent = profileName ? `${profileIcon} ${profileName}`.trim() : "Mon résultat carrière";
  ui.shareCardISCLine.textContent = `ISC : ${result.isc}`;
  ui.shareCardStateLine.textContent = result.state.label;
  ui.shareCardStrongLine.textContent = `Moteur : ${friendlyDimension(strongestKey)}`;
  ui.shareCardWeakLine.textContent = `Vigilance : ${friendlyDimension(weakestKey)}`;
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function exportShareCard() {
  if (!latestResult) return;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
  gradient.addColorStop(0, "#dbeafe");
  gradient.addColorStop(0.45, "#ffffff");
  gradient.addColorStop(1, "#ecfeff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);

  roundedRect(ctx, 70, 70, 940, 940, 42);
  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.fill();
  ctx.strokeStyle = "#bfdbfe";
  ctx.lineWidth = 4;
  ctx.stroke();

  const summary = buildShareSummary(latestResult);
  ctx.fillStyle = "#334155";
  ctx.font = "700 34px Inter, Arial, sans-serif";
  ctx.fillText("Mon profil carrière", 130, 165);

  ctx.fillStyle = "#0f172a";
  ctx.font = "800 62px Inter, Arial, sans-serif";
  const profileLine = ui.shareCardProfileLine?.textContent || "Mon résultat carrière";
  ctx.fillText(profileLine, 130, 265);

  ctx.font = "800 50px Inter, Arial, sans-serif";
  ctx.fillText(ui.shareCardISCLine?.textContent || `ISC : ${latestResult.isc}`, 130, 345);

  roundedRect(ctx, 130, 376, 460, 74, 37);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#bfdbfe";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#1e3a8a";
  ctx.font = "700 34px Inter, Arial, sans-serif";
  ctx.fillText(ui.shareCardStateLine?.textContent || latestResult.state.label, 156, 423);

  ctx.fillStyle = "#334155";
  ctx.font = "600 36px Inter, Arial, sans-serif";
  ctx.fillText(ui.shareCardStrongLine?.textContent || "", 130, 545);
  ctx.fillText(ui.shareCardWeakLine?.textContent || "", 130, 615);

  ctx.strokeStyle = "#93c5fd";
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(130, 680);
  ctx.lineTo(950, 680);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#64748b";
  ctx.font = "600 28px Inter, Arial, sans-serif";
  ctx.fillText(summary, 130, 760);
  ctx.fillStyle = "#475569";
  ctx.font = "700 30px Inter, Arial, sans-serif";
  ctx.fillText("JobPulse", 130, 900);

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `jobpulse-isc-${latestResult.isc}.png`;
  link.click();
}

function computeAndShowResults() {
  const dimensions = computeDimensions();
  const isc = computeISC(dimensions, customWeights);
  const state = getCareerState(isc);
  const dimensionRanking = getDimensionRanking(dimensions);
  const strongestKey = getStrongestDimension(dimensions);
  const secondStrongestKey = getSecondStrongestDimension(dimensions);
  const weakestKey = getWeakestDimension(dimensions);
  const strongestValue = dimensions[strongestKey];
  const weakestValue = dimensions[weakestKey];
  const secondStrongestValue = dimensions[secondStrongestKey];
  const topPriorityKey = getTopPriority(customWeights);
  const topPriorityValue = dimensions[topPriorityKey];
  const careerProfile = getCareerProfile({
    iscScore: isc,
    sensScore: dimensions.Meaning,
    evolutionScore: dimensions.Growth,
    reconnaissanceScore: dimensions.Recognition,
    environnementScore: dimensions.Environment
  });

  const contextData = {
    domainLabel: ui.domainSelect.options[ui.domainSelect.selectedIndex]?.text || "N/A",
    functionLabel: ui.functionSelect.options[ui.functionSelect.selectedIndex]?.text || "N/A",
    companySizeLabel: ui.companySizeSelect.options[ui.companySizeSelect.selectedIndex]?.text || "N/A",
    tenureLabel: ui.tenureSelect.options[ui.tenureSelect.selectedIndex]?.text || "N/A",
    hierarchyLabel: ui.hierarchySelect.options[ui.hierarchySelect.selectedIndex]?.text || "N/A",
    offerLabel: ui.offerSelect.value ? (ui.offerSelect.options[ui.offerSelect.selectedIndex]?.text || "") : ""
  };

  const analysis = buildPersonalizedAnalysis({
    state,
    strongestKey,
    strongestValue,
    weakestKey,
    weakestValue,
    topPriorityKey,
    topPriorityValue,
    profile,
    careerProfile
  });
  const recommendations = buildRecommendations({ weakestKey, topPriorityKey, profile, careerProfile });

  latestResult = {
    isc,
    dimensions,
    careerProfile,
    analysis,
    state,
    profile: { ...profile },
    contextData,
    weights: { ...customWeights },
    generatedAt: new Date().toISOString()
  };

  ui.chiScore.textContent = `${isc}`;
  ui.chiLabel.textContent = state.label;
  ui.chiLabel.classList.remove("state-risk", "state-misaligned", "state-progress", "state-aligned");
  if (state.key === "risk") ui.chiLabel.classList.add("state-risk");
  else if (state.key === "misaligned") ui.chiLabel.classList.add("state-misaligned");
  else if (state.key === "progress") ui.chiLabel.classList.add("state-progress");
  else ui.chiLabel.classList.add("state-aligned");
  ui.chiSummary.textContent = state.helper;
  ui.calcFormula.textContent = `ISC = Sens*${customWeights.Meaning.toFixed(2)} + Evolution*${customWeights.Growth.toFixed(2)} + Reconnaissance*${customWeights.Recognition.toFixed(2)} + Environnement*${customWeights.Environment.toFixed(2)}`;
  ui.resultDate.textContent = `Généré le ${new Date(latestResult.generatedAt).toLocaleString("fr-FR")}`;
  updateGauge(isc);
  renderDimensionBars(dimensions);
  renderCareerProfile(careerProfile, isc);
  if (ui.socialComparisonLine) {
    const percentile = getSocialComparisonPercent(careerProfile.profileKey, isc);
    ui.socialComparisonLine.textContent = `Vous faites partie des ${percentile}% de profils ${careerProfile.profileName}.`;
  }
  if (ui.quickStrongestDimension) ui.quickStrongestDimension.textContent = friendlyDimension(strongestKey);
  if (ui.quickWeakestDimension) ui.quickWeakestDimension.textContent = friendlyDimension(weakestKey);
  ui.dimensionSummary.textContent = "";
  if (ui.secondDimensionSummary) {
    ui.secondDimensionSummary.hidden = true;
    ui.secondDimensionSummary.textContent = "";
  }
  ui.analysisText.textContent = analysis;
  if (ui.recommendationContext) {
    ui.recommendationContext.textContent = `Contexte : ${contextData.domainLabel} | ${contextData.functionLabel} | ${contextData.companySizeLabel} | ${contextData.tenureLabel} | ${contextData.hierarchyLabel}${contextData.offerLabel ? ` | ${contextData.offerLabel}` : ""}`;
  }
  renderRecommendations(ui.actionsList, recommendations);
  renderShareCard(latestResult, strongestKey, weakestKey);
  ui.careerShareLine.textContent = buildShareSummary(latestResult);
  showScreen("results");
}

async function shareISC() {
  if (!latestResult) return;
  const text = buildShareSummary(latestResult);

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
      setTimeout(() => { ui.shareBtn.textContent = "Partager mon profil carrière"; }, 1200);
    } catch {
      ui.shareBtn.textContent = "Copie impossible";
      setTimeout(() => { ui.shareBtn.textContent = "Partager mon profil carrière"; }, 1200);
    }
  }
}

ui.startBtn.addEventListener("click", () => {
  resetWeights();
  showScreen("weights");
});

ui.weightsNextBtn.addEventListener("click", startQuestions);
ui.weightsResetBtn.addEventListener("click", resetWeights);
ui.presetBalancedBtn.addEventListener("click", () => applyRanking(rankingPresets.balanced));
ui.presetCareerBtn.addEventListener("click", () => applyRanking(rankingPresets.career));
ui.presetWellbeingBtn.addEventListener("click", () => applyRanking(rankingPresets.wellbeing));
ui.presetImpactBtn.addEventListener("click", () => applyRanking(rankingPresets.impact));

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
  profile.domainInput = ui.domainSelect.value;
  profile.functionInput = ui.functionSelect.value;
  profile.companySize = ui.companySizeSelect.value;
  profile.tenureInput = ui.tenureSelect.value;
  profile.hierarchy = ui.hierarchySelect.value;
  profile.offerIntent = ui.offerSelect.value;
  profile.domain = mapDomainToLegacy(profile.domainInput);
  profile.job = mapFunctionToLegacy(profile.functionInput);
  profile.tenure = mapTenureToLegacy(profile.tenureInput);
  computeAndShowResults();
});

ui.restartBtn.addEventListener("click", () => showScreen("landing"));
ui.shareBtn.addEventListener("click", shareISC);
if (ui.copySummaryBtn) {
  ui.copySummaryBtn.addEventListener("click", async () => {
    if (!latestResult || !navigator.clipboard?.writeText) return;
    const summary = buildShareSummary(latestResult);
    try {
      await navigator.clipboard.writeText(summary);
      ui.copySummaryBtn.textContent = "Résumé copié";
      setTimeout(() => { ui.copySummaryBtn.textContent = "Copier le résumé"; }, 1200);
    } catch {
      ui.copySummaryBtn.textContent = "Copie impossible";
      setTimeout(() => { ui.copySummaryBtn.textContent = "Copier le résumé"; }, 1200);
    }
  });
}
if (ui.downloadCardBtn) ui.downloadCardBtn.addEventListener("click", exportShareCard);
setupPriorityDragAndDrop();
setupPriorityTouchReorder();
setupPriorityButtonReorder();
resetWeights();

const scoreDetails = document.querySelector(".balance-card.details-card");
if (scoreDetails) {
  scoreDetails.addEventListener("toggle", () => {
    if (scoreDetails.open && latestResult?.dimensions) drawRadarChart(latestResult.dimensions);
  });
}
window.addEventListener("resize", () => {
  if (latestResult?.dimensions) drawRadarChart(latestResult.dimensions);
});

