const INTERNAL_DIMENSION_KEYS = ["meaning", "growth", "recognition", "environment"];
const INTERNAL_DIMENSION_LABEL_FR = {
  meaning: "Sens",
  growth: "Évolution",
  recognition: "Reconnaissance",
  environment: "Environnement"
};
const LEGACY_TO_INTERNAL_DIMENSION_KEY = {
  Meaning: "meaning",
  Growth: "growth",
  Recognition: "recognition",
  Environment: "environment"
};
const INTERNAL_TO_LEGACY_DIMENSION_KEY = {
  meaning: "Meaning",
  growth: "Growth",
  recognition: "Recognition",
  environment: "Environment"
};
const DEFAULT_INTERNAL_WEIGHTS = {
  meaning: 0.25,
  growth: 0.25,
  recognition: 0.25,
  environment: 0.25
};
const QUESTION_BANK = [
  { id: "q1", dimension: "meaning", text: "Je suis satisfait(e) de mon travail au quotidien." },
  { id: "q2", dimension: "recognition", text: "Mon salaire me semble juste par rapport à la valeur que j'apporte." },
  { id: "q3", dimension: "growth", text: "Je vois des opportunités claires d'évolution de carrière." },
  { id: "q4", dimension: "growth", text: "Mon manager soutient ma progression." },
  { id: "q5", dimension: "environment", text: "L'ambiance dans mon équipe est bonne." },
  { id: "q6", dimension: "growth", text: "J'apprends des compétences utiles pour l'avenir." },
  { id: "q7", dimension: "environment", text: "Mon équilibre vie pro / vie perso est acceptable." },
  { id: "q8", dimension: "recognition", text: "Je me sens reconnu(e) pour mes contributions." },
  { id: "q9", dimension: "meaning", text: "Je suis fier(e) de l'entreprise pour laquelle je travaille." },
  { id: "q10", dimension: "meaning", text: "Je peux m'imaginer encore ici dans 2 ans." }
];
const questions = QUESTION_BANK.map((question) => question.text);

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
  startButtons: [...document.querySelectorAll("[data-start-diagnosis]")],
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
  questionCardProgress: document.getElementById("question-card-progress"),
  firstQuestionScale: document.getElementById("first-question-scale"),
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
let isQuestionTransitioning = false;
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
const DEBUG_TEST_ENGINE = (() => {
  try {
    return window.localStorage.getItem("jobpulse_debug_engine") === "1";
  } catch {
    return false;
  }
})();

function debugEngineLog(label, payload) {
  if (!DEBUG_TEST_ENGINE) return;
  console.log(`[JobPulse][Engine] ${label}`, payload);
}

function toInternalDimensionKey(key) {
  if (!key) return null;
  if (INTERNAL_DIMENSION_KEYS.includes(key)) return key;
  if (LEGACY_TO_INTERNAL_DIMENSION_KEY[key]) return LEGACY_TO_INTERNAL_DIMENSION_KEY[key];
  return null;
}

function toLegacyDimensionKey(key) {
  return INTERNAL_TO_LEGACY_DIMENSION_KEY[key] || key;
}

function getDimensionLabelFr(key) {
  const internalKey = toInternalDimensionKey(key);
  if (!internalKey) return "Environnement";
  return INTERNAL_DIMENSION_LABEL_FR[internalKey];
}

function clampScore(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function getScoreFromAny(scores, internalKey) {
  if (!scores || !internalKey) return 0;
  if (Number.isFinite(scores[internalKey])) return clampScore(Number(scores[internalKey]));
  const legacyKey = toLegacyDimensionKey(internalKey);
  if (Number.isFinite(scores[legacyKey])) return clampScore(Number(scores[legacyKey]));
  return 0;
}

function normalizeDimensionScores(scores) {
  const normalized = {};
  INTERNAL_DIMENSION_KEYS.forEach((key) => {
    normalized[key] = getScoreFromAny(scores, key);
  });
  return normalized;
}

function toLegacyDimensionScores(scores) {
  const normalized = normalizeDimensionScores(scores);
  return {
    Meaning: normalized.meaning,
    Growth: normalized.growth,
    Recognition: normalized.recognition,
    Environment: normalized.environment
  };
}

function normalizeWeightsForScoring(rawWeights) {
  const weights = { ...DEFAULT_INTERNAL_WEIGHTS };
  if (rawWeights && typeof rawWeights === "object") {
    INTERNAL_DIMENSION_KEYS.forEach((key) => {
      weights[key] = 0;
    });
    Object.entries(rawWeights).forEach(([key, value]) => {
      const internalKey = toInternalDimensionKey(key);
      if (!internalKey) return;
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue) || numericValue < 0) return;
      weights[internalKey] += numericValue;
    });
    const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
    if (total > 0) {
      INTERNAL_DIMENSION_KEYS.forEach((key) => {
        weights[key] = weights[key] / total;
      });
      return weights;
    }
  }
  return { ...DEFAULT_INTERNAL_WEIGHTS };
}

function rankDimensionsDeterministic(scores) {
  const normalized = normalizeDimensionScores(scores);
  return INTERNAL_DIMENSION_KEYS
    .map((key) => [key, normalized[key]])
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return INTERNAL_DIMENSION_KEYS.indexOf(a[0]) - INTERNAL_DIMENSION_KEYS.indexOf(b[0]);
    });
}

function normalizeAnswerValue(value) {
  if (value === null || value === undefined) return null;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return null;
  const rounded = Math.round(numeric);
  if (rounded < 1 || rounded > 5) return null;
  return rounded;
}

function computeDimensionScoresFromAnswers(answerValues) {
  const normalizedAnswers = answerValues.map((value) => normalizeAnswerValue(value));
  const buckets = {
    meaning: [],
    growth: [],
    recognition: [],
    environment: []
  };

  QUESTION_BANK.forEach((question, index) => {
    const answer = normalizedAnswers[index];
    if (answer === null) return;
    buckets[question.dimension].push(answer);
  });

  const scores = {};
  INTERNAL_DIMENSION_KEYS.forEach((key) => {
    const bucket = buckets[key];
    if (!bucket.length) {
      scores[key] = 0;
      return;
    }
    const average = bucket.reduce((sum, value) => sum + value, 0) / bucket.length;
    scores[key] = clampScore(Math.round((average / 5) * 100));
  });
  return scores;
}

function computeIscFromScores(scores, weights) {
  const normalizedScores = normalizeDimensionScores(scores);
  const normalizedWeights = normalizeWeightsForScoring(weights);
  const weightedScore = INTERNAL_DIMENSION_KEYS.reduce((sum, key) => {
    return sum + (normalizedScores[key] * normalizedWeights[key]);
  }, 0);
  return clampScore(Math.round(weightedScore));
}

function determineCareerState(iscScore) {
  if (iscScore >= 80) return { label: "🚀 Aligné", key: "aligned", helper: "Votre situation professionnelle est bien alignée avec ce qui vous motive aujourd’hui." };
  if (iscScore >= 65) return { label: "🌱 En progression", key: "progress", helper: "Votre situation est globalement positive mais certains leviers peuvent encore être renforcés." };
  if (iscScore >= 50) return { label: "⚠️ Désalignement", key: "misaligned", helper: "Certains aspects de votre travail ne correspondent pas totalement à vos attentes." };
  return { label: "🔥 Risque de rupture", key: "risk", helper: "Votre situation actuelle pourrait conduire à un désengagement si rien ne change." };
}

// Deterministic profile mapping based on ranked dimensions and final ISC.
function determineCareerProfile(scores, context = {}) {
  const ranking = rankDimensionsDeterministic(scores);
  const strongestKey = ranking[0][0];
  const secondKey = ranking[1][0];
  const weakestKey = ranking[ranking.length - 1][0];
  const topDiff = ranking[0][1] - ranking[1][1];
  const iscScore = Number.isFinite(context.iscScore) ? context.iscScore : 0;

  let profileKey = "explorateur";
  let secondDimension = null;

  if (iscScore < 50) {
    profileKey = "desengage_latent";
  } else if (topDiff <= 5) {
    const topPair = [strongestKey, secondKey].sort().join("|");
    if (topPair === "growth|meaning") profileKey = "stratege";
    else if (topPair === "environment|meaning") profileKey = "pilier";
    else if (topPair === "growth|recognition") profileKey = "challenger";
  }

  if (profileKey === "explorateur") {
    if (strongestKey === "meaning") profileKey = "architecte";
    else if (strongestKey === "environment") profileKey = "stabilisateur";
    else if (strongestKey === "recognition") profileKey = "ambitieux_reconnu";
  }

  if (profileKey === "stratege" || profileKey === "pilier" || profileKey === "challenger") {
    secondDimension = getDimensionLabelFr(secondKey);
  }

  const safeProfileKey = careerProfiles[profileKey] ? profileKey : "explorateur";
  const profileData = careerProfiles[safeProfileKey];
  const stateLabel = determineCareerState(iscScore).label;

  return {
    profileKey: safeProfileKey,
    profileName: profileData.profileName,
    icon: profileData.icon,
    stateLabel,
    description: profileData.description,
    strongestDimension: getDimensionLabelFr(strongestKey),
    secondDimension,
    weakestDimension: getDimensionLabelFr(weakestKey)
  };
}

function isCompleteTestResult(result) {
  if (!result || typeof result !== "object") return false;
  if (!Number.isFinite(result.isc)) return false;
  if (!result.careerProfile?.profileKey) return false;
  if (!result.strongestDimension || !result.weakestDimension) return false;
  if (!result.topPriorityDimension || !result.secondStrongestDimension) return false;
  if (!result.state?.label || !result.state?.key) return false;
  if (typeof result.analysis !== "string" || !Array.isArray(result.recommendations)) return false;
  const scores = result.scores;
  if (!scores || typeof scores !== "object") return false;
  return INTERNAL_DIMENSION_KEYS.every((key) => Number.isFinite(scores[key]));
}

// Single source of truth for final scoring, ranking, profile and result payload.
function computeTestResult(answerValues, context = {}) {
  if (!Array.isArray(answerValues) || answerValues.length !== QUESTION_BANK.length) {
    console.error("[JobPulse][Engine] Invalid answer payload shape", answerValues);
    return null;
  }

  const normalizedAnswers = answerValues.map((value) => normalizeAnswerValue(value));
  const missingAnswerIndexes = normalizedAnswers
    .map((value, index) => (value === null ? index : -1))
    .filter((index) => index >= 0);

  if (missingAnswerIndexes.length > 0) {
    console.error("[JobPulse][Engine] Missing answers, result generation aborted", missingAnswerIndexes);
    return null;
  }

  const profileContext = context.profile ? { ...context.profile } : {};
  const weights = normalizeWeightsForScoring(context.weights);
  const scores = computeDimensionScoresFromAnswers(normalizedAnswers);
  const isc = computeIscFromScores(scores, weights);
  const state = determineCareerState(isc);
  const dimensionRanking = rankDimensionsDeterministic(scores);
  const strongestDimension = dimensionRanking[0][0];
  const secondStrongestDimension = dimensionRanking[1][0];
  const weakestDimension = dimensionRanking[dimensionRanking.length - 1][0];
  const topPriorityDimension = rankDimensionsDeterministic(weights)[0][0];
  const topPriorityValue = scores[topPriorityDimension];
  const careerProfile = determineCareerProfile(scores, { iscScore: isc, profile: profileContext });

  const analysis = buildPersonalizedAnalysis({
    isc,
    state,
    strongestKey: strongestDimension,
    strongestValue: scores[strongestDimension],
    weakestKey: weakestDimension,
    weakestValue: scores[weakestDimension],
    topPriorityKey: topPriorityDimension,
    topPriorityValue,
    profile: profileContext,
    careerProfile
  });
  const recommendations = buildRecommendations({
    weakestKey: weakestDimension,
    weakestValue: scores[weakestDimension],
    topPriorityKey: topPriorityDimension,
    topPriorityValue,
    isc,
    state,
    profile: profileContext,
    careerProfile
  });

  const result = {
    answers: normalizedAnswers,
    scores,
    dimensions: toLegacyDimensionScores(scores),
    isc,
    strongestDimension,
    secondStrongestDimension,
    weakestDimension,
    topPriorityDimension,
    state,
    stateLabel: state.label,
    careerProfile,
    analysis,
    recommendations,
    profile: profileContext,
    contextData: context.contextData || {},
    weights,
    generatedAt: new Date().toISOString()
  };

  debugEngineLog("answers", normalizedAnswers);
  debugEngineLog("scores", scores);
  debugEngineLog("isc", isc);
  debugEngineLog("profile", careerProfile.profileKey);
  debugEngineLog("strongest/weakest", { strongestDimension, weakestDimension });

  if (!isCompleteTestResult(result)) {
    console.error("[JobPulse][Engine] Incomplete result payload", result);
    return null;
  }

  return result;
}

function runEngineValidationScenarios() {
  if (!DEBUG_TEST_ENGINE) return;
  const scenarios = [
    { name: "all_5", answers: new Array(QUESTION_BANK.length).fill(5) },
    { name: "all_3", answers: new Array(QUESTION_BANK.length).fill(3) },
    { name: "growth_high_environment_low", answers: [3, 3, 5, 5, 1, 5, 1, 3, 3, 3] },
    { name: "recognition_dominant", answers: [3, 5, 3, 3, 3, 3, 3, 5, 3, 3] },
    { name: "environment_dominant", answers: [3, 3, 3, 3, 5, 3, 5, 3, 3, 3] }
  ];

  scenarios.forEach((scenario) => {
    const result = computeTestResult(scenario.answers, {
      weights: customWeights,
      profile: { ...profile }
    });
    debugEngineLog(`scenario:${scenario.name}`, result);
  });
}

