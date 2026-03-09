# Plan De Tests QA Strict - JobPulse (MVP)

## 0. Reference Croisee DoD
- DoD actif: `docs/DOD_RECOMMANDATIONS_ROBUSTE.md`
- Ce plan QA est la reference d'execution pour valider les criteres bloquants du DoD.

## 1. Objectif
Valider de manière stricte que le parcours JobPulse est fonctionnel, lisible, déterministe et exploitable en mobile-first, sans régression desktop.

## 2. Périmètre
- Inclus :
  - parcours complet Accueil -> Résultats,
  - calcul et rendu des résultats (sans modifier la logique),
  - Hero résultat,
  - radar et labels,
  - partage,
  - export carte si activé,
  - responsive mobile et desktop.
- Exclu :
  - backend/API externe,
  - authentification,
  - historique utilisateur.

## 3. Environnements De Test
- Mobile :
  - iOS Safari récent (viewport 390x844),
  - Android Chrome récent (viewport 360x800).
- Desktop :
  - Chrome récent (>= 1280px),
  - Safari/Edge récent (>= 1280px).

## 4. Pré-conditions
- Application lancée localement sans erreur bloquante console.
- Fichiers d'assets profils accessibles dans `assets/profiles/`.
- Réinitialiser l'état local avant chaque run (nouvelle session ou hard refresh).

## 5. Règles De Validation
- Toute anomalie bloquante sur le parcours ou le résultat = KO release.
- Toute collision visuelle critique sur l'écran résultats = KO release.
- Toute incohérence entre score, état, diagnostic et recommandations = KO release.

## 6. Cas De Test (Given / When / Then)

### 6.1 Accueil
- `TC-ACC-01`
  - Given l'utilisateur ouvre l'app
  - When l'écran d'accueil est affiché
  - Then le CTA `Commencer` est visible sans scroll sur mobile.
- `TC-ACC-02`
  - Given l'utilisateur est sur l'accueil
  - When il clique `Commencer`
  - Then l'étape Priorités s'affiche.

### 6.2 Priorités
- `TC-PRI-01`
  - Given l'étape Priorités
  - When aucun preset n'est appliqué
  - Then les 4 dimensions sont présentes une seule fois.
- `TC-PRI-02`
  - Given l'étape Priorités
  - When l'utilisateur utilise les flèches haut/bas
  - Then l'ordre change sans sortir de bornes.
- `TC-PRI-03`
  - Given l'étape Priorités
  - When l'utilisateur applique chaque preset (`Équilibré`, `Carrière`, `Bien-être`, `Impact`)
  - Then l'ordre affiché se met à jour immédiatement.
- `TC-PRI-04`
  - Given l'étape Priorités
  - When l'utilisateur réinitialise l'ordre
  - Then l'ordre par défaut est restauré.
- `TC-PRI-05`
  - Given un ordre valide
  - When l'utilisateur passe à l'étape suivante
  - Then la navigation vers Questionnaire fonctionne.

### 6.3 Questionnaire
- `TC-QUE-01`
  - Given l'étape Questionnaire
  - When l'utilisateur répond à une question
  - Then le compteur de progression s'incrémente.
- `TC-QUE-02`
  - Given au moins une question non répondue
  - When l'utilisateur tente de continuer
  - Then la validation bloque la progression.
- `TC-QUE-03`
  - Given le slider
  - When l'utilisateur manipule la valeur au doigt (mobile)
  - Then le contrôle est facilement manipulable, sans saut visuel critique.

### 6.4 Contexte Professionnel
- `TC-CTX-01`
  - Given l'étape Contexte
  - When un champ requis est vide
  - Then un message d'erreur est affiché sous le champ.
- `TC-CTX-02`
  - Given des erreurs de validation
  - When l'utilisateur corrige les champs
  - Then les erreurs disparaissent et la soumission est autorisée.
- `TC-CTX-03`
  - Given l'étape Contexte validée
  - When l'utilisateur continue
  - Then l'écran Résultats s'affiche.

### 6.5 Résultats - Hero
- `TC-RES-HERO-01`
  - Given l'écran Résultats
  - When le Hero est affiché
  - Then `Votre profil carrière est :`, le nom de profil, `ISC XX` et l'état sont visibles.
- `TC-RES-HERO-02`
  - Given un `profileKey` valide
  - When l'image est chargée
  - Then l'illustration correspondante s'affiche.
- `TC-RES-HERO-03`
  - Given image indisponible
  - When le chargement échoue
  - Then le fallback visuel s'affiche sans casser la mise en page.
- `TC-RES-HERO-04`
  - Given le CTA partage
  - When affiché sur mobile
  - Then il est lisible, centré et facilement cliquable (>= 44px de hauteur utile).
- `TC-RES-HERO-05`
  - Given export activé
  - When affiché
  - Then le CTA `Télécharger ma carte` apparaît avec alignement correct.
- `TC-RES-HERO-06`
  - Given export désactivé
  - When affiché
  - Then aucun trou visuel n'apparaît dans le groupe CTA.

### 6.6 Résultats - État ISC
- `TC-RES-STATE-01`
  - Given `isc = 80`
  - When l'état est calculé
  - Then l'étiquette est `🚀 Aligné`.
- `TC-RES-STATE-02`
  - Given `isc = 65`
  - When l'état est calculé
  - Then l'étiquette est `🌱 En progression`.
- `TC-RES-STATE-03`
  - Given `isc = 50`
  - When l'état est calculé
  - Then l'étiquette est `⚠️ Désalignement`.
- `TC-RES-STATE-04`
  - Given `isc = 49`
  - When l'état est calculé
  - Then l'étiquette est `🔥 Risque de rupture`.

### 6.7 Résultats - Diagnostic Et Recommandations
- `TC-RES-DIAG-01`
  - Given des dimensions calculées
  - When le diagnostic rapide est rendu
  - Then `Ce qui vous motive` et `Ce qui peut vous freiner` affichent deux dimensions distinctes.
- `TC-RES-DIAG-02`
  - Given un état ISC
  - When la phrase d'interprétation est affichée
  - Then elle est cohérente avec l'état.
- `TC-RES-REC-01`
  - Given l'écran résultats
  - When la section recommandations est rendue
  - Then exactement 3 actions sont affichées.

### 6.8 Résultats - Radar (Cas Critiques)
- `TC-RAD-01`
  - Given la section radar ouverte
  - When le graphique est affiché
  - Then labels, bulles, polygone, axes et score central ISC sont visibles.
- `TC-RAD-02`
  - Given n'importe quelle combinaison de scores
  - When le radar se dessine
  - Then aucun label n'est sur deux lignes.
- `TC-RAD-03`
  - Given n'importe quelle combinaison de scores
  - When le radar se dessine
  - Then aucune collision label/bulle n'est visible.
- `TC-RAD-04`
  - Given `Meaning=Growth=Recognition=Environment=100`
  - When le radar se dessine
  - Then le rendu reste lisible (pas de superposition critique).
- `TC-RAD-05`
  - Given `Meaning=Growth=Recognition=Environment=0` (ou plancher minimal affichable)
  - When le radar se dessine
  - Then le score central ISC reste lisible.
- `TC-RAD-06`
  - Given une combinaison asymétrique (ex: 100/20/95/35)
  - When le radar se dessine
  - Then le layout reste stable et équilibré.
- `TC-RAD-07`
  - Given l'écran résultats
  - When la fenêtre est redimensionnée (mobile <-> desktop)
  - Then le repositionnement des labels se recalcule correctement.

### 6.9 Partage Et Export
- `TC-SHARE-01`
  - Given `navigator.share` disponible
  - When l'utilisateur clique partager
  - Then la feuille de partage native s'ouvre.
- `TC-SHARE-02`
  - Given `navigator.share` indisponible ou en erreur
  - When l'utilisateur clique partager
  - Then le fallback clipboard est exécuté avec feedback utilisateur.
- `TC-EXPORT-01`
  - Given export activé
  - When l'utilisateur clique télécharger
  - Then un PNG est généré avec nom `jobpulse-isc-XX.png`.

### 6.10 Refaire Le Diagnostic
- `TC-RESTART-01`
  - Given l'écran résultats
  - When l'utilisateur clique `Refaire le diagnostic`
  - Then le parcours redémarre depuis l'accueil.

### 6.11 Resultats - Personnalisation Recommandations
- `TC-RES-REC-PER-01`
  - Given un role connu et un secteur connu
  - When les recommandations sont generees
  - Then au moins 2 actions sur 3 sont explicitement contextualisees (role et/ou secteur).
- `TC-RES-REC-PER-02`
  - Given role connu et secteur inconnu
  - When les recommandations sont generees
  - Then au moins 1 action est specifique au role et les 3 actions restent valides.
- `TC-RES-REC-PER-03`
  - Given role inconnu et secteur connu
  - When les recommandations sont generees
  - Then au moins 1 action est specifique au secteur et les 3 actions restent valides.
- `TC-RES-REC-PER-04`
  - Given role/secteur absents ou invalides
  - When les recommandations sont generees
  - Then le fallback est applique sans crash, avec 3 actions actionnables et non vides.
- `TC-RES-REC-PER-05`
  - Given un meme input utilisateur
  - When le calcul est relance plusieurs fois
  - Then les recommandations retournees sont strictement identiques (determinisme).
- `TC-RES-REC-PER-06`
  - Given l'ecran resultats
  - When les 3 actions sont affichees
  - Then les 3 titres sont distincts (pas de doublon direct).

### 6.12 Resultats - Qualite Editoriale
- `TC-RES-EDIT-01`
  - Given la section `Vos 3 actions prioritaires`
  - When les textes sont affiches
  - Then chaque action commence par un verbe d'action.
- `TC-RES-EDIT-02`
  - Given la section `Comprendre le diagnostic`
  - When le texte est rendu
  - Then il explique clairement le resultat et les actions proposees.
- `TC-RES-EDIT-03`
  - Given les recommandations et le diagnostic
  - When l'utilisateur lit les contenus
  - Then aucune contradiction evidente n'apparait avec le score/etat.

## 7. Matrice Responsive (Vérifications Minimales)
- `RESP-01` : aucun débordement horizontal à 360px.
- `RESP-02` : Hero lisible sans zoom à 360px.
- `RESP-03` : radar lisible en portrait mobile.
- `RESP-04` : aucune régression de layout à 1280px+.

## 8. Contrôle Console Et Erreurs JS
- `JS-01` : aucun `Uncaught Error` ou `TypeError` bloquant pendant le parcours.
- `JS-02` : interactions partage/export sans erreur console bloquante.

## 9. Critères De Sortie QA
Go release si :
- 100% des cas critiques (ACC, PRI, QUE, CTX, HERO, RAD, SHARE, RESTART) sont passants,
- 0 bug bloquant,
- 0 collision visuelle critique sur résultats,
- 0 erreur JS bloquante en parcours nominal.

No-go release si :
- au moins 1 cas critique en échec,
- ou régression responsive majeure mobile,
- ou incohérence score/état/diagnostic.

## 10. Mapping DoD -> QA
- DoD `2) Fonctionnel`: `TC-RES-DIAG-01`, `TC-RES-DIAG-02`, `TC-RES-REC-01`, `TC-RES-STATE-01..04`.
- DoD `3) Personnalisation role/secteur`: `TC-RES-REC-PER-01..06`.
- DoD `4) Qualite editoriale`: `TC-RES-EDIT-01..03`.
- DoD `5) Robustesse donnees`: `TC-RES-REC-PER-04` + `JS-01`.
- DoD `6) UX responsive/mobile`: `RESP-01..04`, `TC-RES-HERO-01`, `TC-RES-HERO-04`, `TC-RAD-01..07`.
- DoD `7) Accessibilite`: validation manuelle focus/contraste/ordre tab sur tous les ecrans interactifs.
- DoD `8) Technique`: `JS-01`, `JS-02`, `TC-SHARE-01`, `TC-SHARE-02`, `TC-RESTART-01`.
- DoD `9) QA minimale`: sections `3`, `6`, `7`, `8` de ce document.
- DoD `10) Performance et stabilite`: verification manuelle absence de freeze et saut visuel au rendu resultats.

## 11. Regle Go/No-Go Alignee DoD
- Toute non-conformite sur un critere DoD bloquant reference dans la section 10 entraine un No-Go release.
- Les ecarts mineurs non bloquants doivent etre journalises avec owner, impact et date de correction cible.
