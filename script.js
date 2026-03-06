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
    description: "Vous \u00eates motiv\u00e9 par l'apprentissage, la progression et les nouvelles opportunit\u00e9s."
  },
  architecte: {
    profileName: "Architecte",
    icon: "\uD83C\uDFD7\uFE0F",
    description: "Vous \u00eates engag\u00e9 quand votre travail a du sens et une utilit\u00e9 concr\u00e8te."
  },
  stabilisateur: {
    profileName: "Stabilisateur",
    icon: "\uD83D\uDEE1\uFE0F",
    description: "Votre engagement d\u00e9pend fortement d'un environnement sain, d'une bonne \u00e9quipe et de stabilit\u00e9."
  },
  ambitieux_reconnu: {
    profileName: "Ambitieux reconnu",
    icon: "\uD83C\uDFC6",
    description: "Vous \u00eates motiv\u00e9 quand votre travail est visible, valoris\u00e9 et reconnu."
  },
  stratege: {
    profileName: "Strat\u00E8ge",
    icon: "\u265F\uFE0F",
    description: "Vous recherchez \u00e0 la fois impact et progression, avec une trajectoire coh\u00e9rente."
  },
  pilier: {
    profileName: "Pilier",
    icon: "\uD83E\uDDF1",
    description: "Vous vous \u00e9panouissez en contribuant \u00e0 quelque chose d'utile dans un cadre de confiance."
  },
  challenger: {
    profileName: "Challenger",
    icon: "\u26A1",
    description: "Vous \u00eates stimul\u00e9 par le challenge, le progr\u00e8s et la reconnaissance de vos r\u00e9sultats."
  },
  desengage_latent: {
    profileName: "D\u00E9sengag\u00E9 latent",
    icon: "\uD83D\uDD25",
    description: "Plusieurs aspects de votre situation professionnelle actuelle ne correspondent plus \u00e0 vos attentes."
  }
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
  heroProgressFill: document.getElementById("heroProgressFill"),
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
  careerProfileIcon: document.getElementById("careerProfileIcon"),
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
  [...ui.priorityList.querySelectorAll(".priority-card")].forEach((node, index) => {
    const badge = node.querySelector(".priority-rank");
    if (badge) badge.textContent = String(index + 1);
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
  if (iscScore >= 80) return { label: "\uD83D\uDE80 Align\u00e9", key: "aligned", helper: "Votre situation professionnelle semble globalement tr\u00e8s align\u00e9e avec vos attentes." };
  if (iscScore >= 65) return { label: "\uD83C\uDF31 En progression", key: "progress", helper: "Votre situation professionnelle est globalement positive, avec encore quelques points \u00e0 renforcer." };
  if (iscScore >= 50) return { label: "\u26A0\uFE0F D\u00e9salignement", key: "misaligned", helper: "Certains aspects de votre travail semblent en d\u00e9calage avec vos attentes." };
  return { label: "\uD83D\uDD25 Risque de rupture", key: "risk", helper: "Votre r\u00e9sultat sugg\u00e8re un risque de d\u00e9sengagement ou un besoin de r\u00e9ajustement professionnel." };
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
  return key === "Meaning" ? "Sens" : key === "Growth" ? "Evolution" : key === "Recognition" ? "Reconnaissance" : "Environnement";
}

function buildPersonalizedAnalysis(data) {
  const lines = [];
  if (data.state.key === "aligned") lines.push("Votre score indique une situation professionnelle actuellement bien alignée avec vos attentes.");
  else if (data.state.key === "progress") lines.push("Votre score montre une base globalement positive, avec des ajustements utiles pour consolider votre équilibre.");
  else if (data.state.key === "misaligned") lines.push("Votre score révèle un décalage partiel entre ce que vous attendez de votre travail et ce que vous vivez aujourd'hui.");
  else lines.push("Votre score signale un risque de désengagement qui mérite une action rapide et structurée.");

  if (data.strongestValue > 75) lines.push(`${friendlyDimension(data.strongestKey)} est un vrai moteur de motivation dans votre situation actuelle.`);
  if (data.weakestValue < 60) {
    if (data.weakestKey === "Recognition") lines.push("La reconnaissance semble aujourd'hui insuffisante et peut générer de la frustration.");
    else if (data.weakestKey === "Environment") lines.push("L'environnement de travail paraît être une source de tension ou d'usure.");
    else if (data.weakestKey === "Meaning") lines.push("Le sens perçu de votre travail paraît fragile, ce qui peut réduire l'engagement.");
    else lines.push("L'évolution semble freinée, ce qui peut alimenter un sentiment de stagnation.");
  }

  if (data.topPriorityValue < 60) lines.push(`Votre priorité principale est ${friendlyDimension(data.topPriorityKey)}, mais cette dimension apparaît moins satisfaite aujourd'hui.`);
  else if (data.topPriorityValue > 75) lines.push(`Votre priorité principale (${friendlyDimension(data.topPriorityKey)}) est bien alimentée actuellement.`);

  if (data.careerProfile.profileKey === "stratege") lines.push("Votre profil Stratège confirme un besoin d'impact et de progression cohérents dans la durée.");
  else if (data.careerProfile.profileKey === "explorateur") lines.push("Votre profil Explorateur se nourrit d'apprentissage et de mouvement.");
  else if (data.careerProfile.profileKey === "architecte") lines.push("Votre profil Architecte reste sensible au sens et à l'utilité concrète de vos missions.");
  else if (data.careerProfile.profileKey === "stabilisateur") lines.push("Votre profil Stabilisateur dépend fortement d'un cadre de travail fiable et sain.");
  else if (data.careerProfile.profileKey === "ambitieux_reconnu") lines.push("Votre profil Ambitieux reconnu nécessite de la visibilité et des signes clairs de valorisation.");
  else if (data.careerProfile.profileKey === "pilier") lines.push("Votre profil Pilier cherche un équilibre entre contribution utile et environnement de confiance.");
  else if (data.careerProfile.profileKey === "challenger") lines.push("Votre profil Challenger a besoin de challenge, de progression et de reconnaissance visible.");

  if (["5_10y", "10_20y", "20plus"].includes(data.profile.tenureInput)) {
    lines.push("Après plusieurs années dans la même entreprise, les besoins de progression et de reconnaissance deviennent souvent plus structurants.");
  } else if (["lt6", "6m_2y"].includes(data.profile.tenureInput)) {
    lines.push("Votre phase d'intégration peut encore influencer la perception globale de votre poste.");
  }

  if (["team_manager", "manager_of_managers", "executive"].includes(data.profile.hierarchy)) {
    lines.push("Les responsabilités de leadership peuvent amplifier la sensibilité à la charge, à la reconnaissance et au climat d'équipe.");
  }

  if (data.profile.offerIntent === "leave_immediately") lines.push("Votre ouverture immédiate à une opportunité externe suggère une urgence de réalignement.");
  else if (data.profile.offerIntent === "consider_seriously") lines.push("Vous semblez réellement ouvert à un changement, ce qui confirme un besoin d'arbitrage de trajectoire.");
  else if (data.profile.offerIntent === "likely_stay") lines.push("Vous semblez plutôt orienté vers une amélioration dans votre cadre actuel.");
  else if (data.profile.offerIntent === "would_not_leave") lines.push("Votre faible intention de départ suggère un socle d'attachement à préserver.");

  if (data.profile.companySize === "large_company" || data.profile.companySize === "global_group") lines.push("Dans les grandes structures, la progression peut nécessiter plus de visibilité et de sponsoring interne.");
  if (data.profile.companySize === "startup") lines.push("Le contexte startup peut accélérer l'apprentissage mais aussi renforcer l'intensité quotidienne.");
  if (data.profile.functionInput === "team_management" || data.profile.functionInput === "direction_leadership") lines.push("Dans un rôle d'encadrement, la qualité de l'environnement et la reconnaissance ont souvent un impact direct sur l'engagement.");
  if (data.profile.domainInput === "consulting_audit" || data.profile.domainInput === "tech_it") lines.push("Dans votre secteur, le rythme et les attentes de performance peuvent accentuer rapidement les écarts de perception.");
  if (data.careerProfile.profileKey === "desengage_latent") lines.push("Votre profil indique un affaiblissement global de l'alignement, ce qui justifie des décisions de réajustement à court terme.");

  return lines.slice(0, 4).join(" ");
}

function buildRecommendations(data) {
  const items = [];
  const profileHint = data.careerProfile?.profileName ? `Coh\u00e9rent avec votre profil ${data.careerProfile.profileName},` : "";

  if (data.weakestKey === "Recognition") {
    items.push({ title: "Rendre vos contributions visibles", desc: "Planifiez un point mensuel avec preuves concr\u00e8tes de vos r\u00e9sultats et impacts." });
  } else if (data.weakestKey === "Growth") {
    items.push({ title: "N\u00e9gocier une prochaine \u00e9tape", desc: "Demandez une responsabilit\u00e9 additionnelle avec objectifs, p\u00e9rim\u00e8tre et date de revue." });
  } else if (data.weakestKey === "Meaning") {
    items.push({ title: "Reconnecter votre r\u00f4le \u00e0 l'impact", desc: "R\u00e9allouez du temps vers des missions utiles et visibles pour renforcer le sens au quotidien." });
  } else {
    items.push({ title: "Stabiliser votre environnement", desc: "Isolez un irritant majeur d'\u00e9quipe et traitez-le via un rituel d'alignement hebdomadaire." });
  }

  if (data.topPriorityKey === "Growth") {
    items.push({ title: "Prioriser votre progression", desc: `${profileHint} formalisez un plan 90 jours orient\u00e9 comp\u00e9tences et mobilit\u00e9 interne.`.trim() });
  } else if (data.topPriorityKey === "Meaning") {
    items.push({ title: "Renforcer l'utilit\u00e9 de vos missions", desc: `${profileHint} n\u00e9gociez un ajustement de p\u00e9rim\u00e8tre autour des sujets \u00e0 plus fort impact.`.trim() });
  } else if (data.topPriorityKey === "Recognition") {
    items.push({ title: "Clarifier vos crit\u00e8res de reconnaissance", desc: `${profileHint} alignez avec votre manager les attentes explicites de visibilit\u00e9, contribution et progression.`.trim() });
  } else {
    items.push({ title: "Am\u00e9liorer vos conditions d'ex\u00e9cution", desc: `${profileHint} clarifiez charge, priorit\u00e9s et mode de collaboration pour fiabiliser le cadre de travail.`.trim() });
  }

  if (["5_10y", "10_20y", "20plus"].includes(data.profile.tenureInput)) {
    items.push({ title: "Relancer votre trajectoire", desc: "Apr\u00e8s une anciennet\u00e9 longue, cadrer une \u00e9tape de repositionnement est souvent d\u00e9cisif." });
  } else if (data.profile.offerIntent === "leave_immediately" || data.profile.offerIntent === "consider_seriously") {
    items.push({ title: "Arbitrer votre option de mobilit\u00e9", desc: "Comparez votre poste actuel \u00e0 2 opportunit\u00e9s externes avec une grille factuelle." });
  } else if (data.careerProfile.profileName === "Stabilisateur" || data.careerProfile.profileName === "Pilier") {
    items.push({ title: "Consolider la stabilit\u00e9 interne", desc: "Priorisez une am\u00e9lioration relationnelle ou organisationnelle durable dans l'\u00e9quipe actuelle." });
  } else {
    items.push({ title: "Ancrer une action visible rapide", desc: "D\u00e9ployez une action mesurable dans les 30 jours, coh\u00e9rente avec votre profil carri\u00e8re." });
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

function renderDimensionBars(dimensions) {
  ui.valMeaning.textContent = `${dimensions.Meaning}`;
  ui.valGrowth.textContent = `${dimensions.Growth}`;
  ui.valRecognition.textContent = `${dimensions.Recognition}`;
  ui.valEnvironment.textContent = `${dimensions.Environment}`;
  ui.barMeaning.style.width = `${dimensions.Meaning}%`;
  ui.barGrowth.style.width = `${dimensions.Growth}%`;
  ui.barRecognition.style.width = `${dimensions.Recognition}%`;
  ui.barEnvironment.style.width = `${dimensions.Environment}%`;
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
  ui.careerProfileIcon.textContent = careerProfile.icon;
  ui.careerProfileName.textContent = careerProfile.profileName;
  ui.careerStateLabel.textContent = careerProfile.stateLabel;
  ui.careerISCScore.textContent = `ISC: ${isc} / 100`;
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
  const profileName = result.careerProfile?.profileName;
  if (profileName) return `Mon profil carrière : ${profileName}\nISC : ${result.isc}`;
  return `Mon ISC : ${result.isc}\n${result.state?.label || "Résultat ISC"}`;
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
  ui.chiSummary.textContent = state.helper;
  ui.calcFormula.textContent = `ISC = Sens*${customWeights.Meaning.toFixed(2)} + Evolution*${customWeights.Growth.toFixed(2)} + Reconnaissance*${customWeights.Recognition.toFixed(2)} + Environnement*${customWeights.Environment.toFixed(2)}`;
  ui.resultDate.textContent = `Généré le ${new Date(latestResult.generatedAt).toLocaleString("fr-FR")}`;
  updateGauge(isc);
  renderDimensionBars(dimensions);
  renderCareerProfile(careerProfile, isc);
  ui.dimensionSummary.textContent = `Dimension forte : ${friendlyDimension(strongestKey)}\nPoint de vigilance : ${friendlyDimension(weakestKey)}`;
  if (ui.secondDimensionSummary) {
    if (Math.abs(strongestValue - secondStrongestValue) <= 8) {
      ui.secondDimensionSummary.hidden = false;
      ui.secondDimensionSummary.textContent = `Seconde dimension clé : ${friendlyDimension(secondStrongestKey)}`;
    } else {
      ui.secondDimensionSummary.hidden = true;
      ui.secondDimensionSummary.textContent = "";
    }
  }
  ui.analysisText.textContent = analysis;
  ui.recommendationContext.textContent = `Contexte : ${contextData.domainLabel} | ${contextData.functionLabel} | ${contextData.companySizeLabel} | ${contextData.tenureLabel} | ${contextData.hierarchyLabel}${contextData.offerLabel ? ` | ${contextData.offerLabel}` : ""}`;
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
resetWeights();

