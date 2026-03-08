# Spécificités Fonctionnelles - Career Score App (JobPulse) - V2

## 1. Objectif produit
JobPulse fournit un diagnostic carrière court, déterministe et actionnable à partir de :
- un score global ISC (Indice de Santé de Carrière),
- 4 dimensions clés de l'expérience professionnelle,
- les priorités déclarées par l'utilisateur,
- le contexte professionnel saisi en fin de parcours.

Le produit est orienté MVP :
- parcours rapide,
- compréhension immédiate du résultat,
- recommandations concrètes,
- partage simple du résultat.

Critères de succès MVP (produit) :
- l'utilisateur atteint l'écran résultat en moins de 3 minutes dans un parcours nominal,
- l'utilisateur comprend en moins de 5 secondes son profil, son ISC et son état carrière,
- l'écran résultat est partageable sans friction (partage natif ou fallback copie),
- aucune étape ne dépend d'une API externe.

## 2. Parcours utilisateur
1. **Accueil**
- landing en 4 blocs dans `#screen-landing` :
  - Hero (promesse + visuel),
  - bloc `Un diagnostic simple, mais utile` (3 cartes),
  - bloc `Votre score repose sur 4 dimensions essentielles` (4 cartes),
  - bloc final CTA.
- 2 CTAs de démarrage (`data-start-diagnosis`) :
  - CTA hero : `Commencer le diagnostic`,
  - CTA final : `Lancer le test`.

Critères d'acceptation :
- le CTA hero est visible sans scroll sur mobile standard,
- les 2 CTAs de démarrage déclenchent la même action (reset priorités + ouverture étape Priorités),
- les visuels de landing sont servis uniquement par des assets locaux.

Assets utilisés en production pour la landing :
- `assets/lp-hero.png`,
- `assets/lp-step-profile.png`,
- `assets/lp-step-score.png`,
- `assets/lp-step-action.png`,
- `assets/lp-dim-meaning.png`,
- `assets/lp-dim-evolution.png`,
- `assets/lp-dim-recognition.png`,
- `assets/lp-dim-environment.png`.

2. **Priorités (Étape 1/3)**
- classement des 4 dimensions :
  - Sens (`Meaning`)
  - Évolution (`Growth`)
  - Reconnaissance (`Recognition`)
  - Environnement (`Environment`)
- interactions disponibles :
  - drag-and-drop,
  - flèches haut/bas (mobile friendly),
  - presets (`Équilibré`, `Carrière`, `Bien-être`, `Impact`),
  - reset de l'ordre.

Critères d'acceptation :
- les 4 dimensions sont toujours présentes et ordonnées de 1 à 4 sans doublon,
- les contrôles haut/bas ne sortent jamais une carte de la liste,
- le preset met à jour immédiatement l'ordre affiché,
- l'ordre initial est valide par défaut,
- un clic sur `Continuer` ouvre directement l'étape Questionnaire.

3. **Questionnaire (Étape 2/3)**
- 10 questions,
- réponse par slider (1 à 5),
- compteur de progression.

Critères d'acceptation :
- si l'utilisateur ne touche pas le slider, la valeur par défaut `3` est retenue au clic sur `Suivant`,
- le compteur affiche exactement `Question N/10`,
- la progression visuelle augmente à chaque passage à la question suivante.

4. **Contexte professionnel (Étape 3/3)**
- sections :
  - rôle/secteur,
  - entreprise/ancienneté,
  - niveau hiérarchique/intention de mobilité.

Critères d'acceptation :
- tous les champs ont une valeur par défaut exploitable au premier affichage,
- le champ intention de mobilité est facultatif,
- un clic sur `Voir mes résultats` normalise les valeurs et lance immédiatement le calcul.

5. **Résultats**
- carte identité carrière,
- diagnostic rapide,
- 3 actions prioritaires,
- détails repliables (équilibre pro + compréhension du diagnostic),
- action finale `Refaire le diagnostic`.

Critères d'acceptation :
- les éléments critiques (profil, ISC, état) sont visibles en premier écran sur mobile standard,
- les sections secondaires sont accessibles sans casser la lecture principale,
- `Refaire le diagnostic` relance le parcours depuis l'accueil.

## 3. Données métier exploitées
### 3.1 Scores
- `isc` (0-100),
- `dimensions.Meaning`,
- `dimensions.Growth`,
- `dimensions.Recognition`,
- `dimensions.Environment`.

Règles :
- toutes les valeurs sont bornées entre 0 et 100,
- les valeurs affichées sont des entiers.

### 3.2 Profil carrière
- `profileKey`,
- `profileName`,
- `icon`,
- `description`,
- `stateLabel`.

Règles :
- `profileKey` doit toujours mapper une illustration disponible,
- fallback image si asset absent ou non chargeable.

### 3.3 Priorités utilisateur
- `weights.Meaning`,
- `weights.Growth`,
- `weights.Recognition`,
- `weights.Environment`.

Règles :
- somme des poids cohérente avec le rang utilisateur,
- aucune dimension ne peut avoir un poids négatif.

### 3.4 Contexte professionnel
- domaine,
- fonction,
- taille d'entreprise,
- ancienneté,
- niveau hiérarchique,
- intention de mobilité.

Règles :
- les valeurs sont normalisées avant génération des recommandations,
- en cas de donnée absente, les fonctions de rendu utilisent un fallback textuel neutre.

## 4. Structure écran résultats (état actuel)
Ordre d'affichage :
1. **Hero identité**
2. **Diagnostic rapide**
3. **Vos 3 actions prioritaires**
4. **Détail repliable : Votre équilibre professionnel (radar)**
5. **Détail repliable : Comprendre le diagnostic**
6. **Footer sticky : Refaire le diagnostic**

Règles de hiérarchie :
- au-dessus de la ligne de flottaison mobile : Hero prioritaire,
- diagnostic rapide juste après Hero (lecture immédiate),
- détails techniques dans les sections repliables uniquement.

## 5. Hero identité carrière
Contenu principal :
- microcopy : `Votre profil carrière est :`,
- nom de profil (élément typographique dominant),
- illustration de profil (`assets/profiles/{profileKey}.png` avec fallback),
- signature du profil (1 phrase),
- score ISC affiché dans le panneau hero (`ISC XX`),
- barre de progression ISC,
- état carrière,
- ligne de comparaison sociale,
- CTAs :
  - `Partager mon profil carrière` (principal, obligatoire),
  - `Télécharger ma carte` (secondaire, optionnel).

Critères d'acceptation :
- le nom de profil est l'élément le plus visible du Hero,
- le score ISC est lisible sans ambiguïté (`ISC` + valeur),
- l'état carrière est visible sans interaction,
- le CTA principal est utilisable au pouce sur mobile (tap target >= 44px),
- si le CTA secondaire est activé, il respecte les mêmes contraintes d'accessibilité et de contraste.

### 5.1 États ISC (`getCareerState`)
- `isc >= 80` : 🚀 Aligné
- `65 <= isc < 80` : 🌱 En progression
- `50 <= isc < 65` : ⚠️ Désalignement
- `isc < 50` : 🔥 Risque de rupture

Règles :
- une seule étiquette d'état peut être active,
- l'état affiché est strictement dérivé du score ISC.

## 6. Diagnostic rapide
Bloc compact en 2 cartes :
- `🔥 Ce qui vous motive` = dimension la plus forte,
- `⚠ Ce qui peut vous freiner` = dimension la plus faible.

Phrase d'interprétation sous le bloc :
- générée selon l'état ISC.

Critères d'acceptation :
- la dimension forte et la dimension faible ne peuvent pas être identiques,
- en cas d'égalité, le tie-break suit l'ordre retourné par `getDimensionRanking(scores)`,
- la phrase d'interprétation est cohérente avec l'état ISC.

## 7. Recommandations
Section `Vos 3 actions prioritaires` :
- exactement 3 actions,
- format court,
- construites via `buildRecommendations(data)`,
- basées sur dimensions, priorités et contexte.

Critères d'acceptation :
- toujours 3 items, jamais 2 ni 4,
- formulation actionnable (verbe d'action en début de phrase),
- pas de contradiction avec le diagnostic rapide.

## 8. Équilibre professionnel (radar)
### 8.1 Objectif
Fournir une lecture visuelle simple des 4 dimensions sans changer la logique de calcul.

### 8.2 Ce qui est rendu dans le canvas
- grille radar,
- axes,
- polygone (remplissage + contour),
- marqueurs de points,
- bulles de score par axe,
- cercle central ISC.

### 8.3 Labels d'axes (responsive global)
Labels fonctionnels :
- Sens
- Evolution
- Reconnaissance
- Environnement

Comportement attendu :
- labels **sur une seule ligne** (`white-space: nowrap`),
- labels **positionnés dynamiquement** à partir de la géométrie courante,
- labels visibles sur tous les breakpoints,
- pas de collision visuelle labels/bulles,
- support des cas extrêmes (dont radar = 100 partout) via bornes min/max de rayons,
- repositionnement à chaque rendu + `resize`.

Règles de layout robustes :
- séparation stricte des couches :
  - rayon polygone < rayon bulles < rayon labels,
- distances minimales garanties :
  - gap point->bulle,
  - gap bulle->label,
- clamp des positions labels dans une zone sûre du conteneur.

Implémentation :
- wrapper radar dédié,
- labels HTML `.radar-label-*`,
- synchronisation de position à chaque `drawRadarChart(...)`,
- recalcul au resize.

Critères d'acceptation :
- aucune collision label/bulle sur scénarios : faible, mixte, élevé, 100 partout,
- aucun label coupé par le bord du conteneur,
- rendu lisible en mobile portrait.

## 9. Analyse personnalisée
Fonction : `buildPersonalizedAnalysis(data)`

Contraintes :
- texte court (2 à 4 phrases),
- cohérence avec état ISC, dimensions, priorités et contexte,
- ton explicatif, non aléatoire.

Critères d'acceptation :
- texte compréhensible niveau grand public,
- absence de formulation contradictoire avec score/état,
- contenu déterministe pour un même input.

## 10. Partage et export
### 10.1 Résumé partageable
Fonction : `buildShareSummary(result)`

Contenu :
- profil carrière,
- ISC,
- état carrière,
- moteur principal,
- point de vigilance.

Critères d'acceptation :
- le résumé tient dans un message court lisible,
- les 5 éléments sont toujours présents.

### 10.2 Partage
- API `navigator.share` si disponible,
- fallback clipboard sinon.

Critères d'acceptation :
- si `navigator.share` échoue, fallback clipboard exécuté,
- message de confirmation utilisateur après partage ou copie.

### 10.3 Export carte
Fonction : `exportShareCard()`
- export PNG local (`jobpulse-isc-XX.png`).
- statut produit : optionnel (feature secondaire activable/désactivable).

Critères d'acceptation :
- si la fonctionnalité est activée, le nom de fichier inclut la valeur ISC,
- si la fonctionnalité est activée, l'export est non bloquant pour l'UI,
- si la fonctionnalité est désactivée, aucun espace vide ou rupture d'alignement n'est visible dans le Hero.

## 11. Fonctions clés du code
- `getCareerState(iscScore)`
- `getDimensionRanking(scores)`
- `getStrongestDimension(scores)`
- `getWeakestDimension(scores)`
- `getSecondStrongestDimension(scores)`
- `getTopPriority(weights)`
- `buildPersonalizedAnalysis(data)`
- `buildRecommendations(data)`
- `drawRadarChart(dimensions)`
- `buildShareSummary(result)`
- `exportShareCard()`

Contrats attendus :
- fonctions pures pour les calculs métier,
- séparation calcul / rendu UI,
- aucune mutation imprévisible des données d'entrée.

## 12. Contraintes UX/UI
- structure claire et séquentielle,
- compréhension du résultat en quelques secondes,
- rendu responsive (mobile-first),
- labels et microcopy en français,
- logique 100% déterministe (pas d'aléatoire),
- pas de modification de logique de scoring dans les itérations UI.

Contraintes responsive :
- breakpoints cibles :
  - mobile : `<= 768px`,
  - desktop : `> 768px`,
- largeur utile max de contenu mobile : ~420px,
- CTA principaux lisibles et atteignables au pouce.

Contraintes accessibilité minimales :
- contraste texte/fond conforme WCAG AA sur contenus principaux,
- focus visible sur éléments interactifs,
- ordre de tabulation cohérent,
- libellés explicites pour boutons de partage/export.

Événements analytics minimum (MVP) :
- `start_clicked`,
- `priorities_completed`,
- `questions_completed`,
- `context_completed`,
- `result_viewed`,
- `share_clicked`,
- `export_clicked` (optionnel, uniquement si export activé),
- `restart_clicked`.

Définition de Done (QA fonctionnelle) :
- tous les scénarios du plan QA strict référencé dans `PLAN_TESTS_QA_STRICT.md` passent,
- tous les critères d'acceptation des sections 2 à 10 passent en test manuel,
- aucun bug bloquant sur mobile portrait récent (iOS Safari / Android Chrome),
- aucun chevauchement visuel critique sur écran résultat,
- parcours complet réalisable sans console error bloquante.

## 13. Hors périmètre MVP
- compte utilisateur,
- historique multi-diagnostics,
- backend/API externe,
- benchmark temps réel par population réelle.

Risques assumés MVP :
- comparaison sociale basée sur valeur statique/interne,
- personnalisation limitée aux variables locales disponibles.
