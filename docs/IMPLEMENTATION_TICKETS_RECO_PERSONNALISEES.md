# Plan d'Implementation - Recommandations Personnalisees

Date de reference: 2026-03-09
Reference DoD: `docs/DOD_RECOMMANDATIONS_ROBUSTE.md`
Reference QA: `docs/PLAN_TESTS_QA_STRICT.md`

## TKT-01 (P0) - Refactor moteur recommandations
- Objectif: garder ISC inchange, refondre uniquement `buildRecommendations`.
- Scope:
  - introduire une selection par regles deterministes,
  - garantir exactement 3 actions,
  - eviter les doublons de titres.
- Critere d'acceptation:
  - 3 actions toujours presentes,
  - meme input = meme output.

## TKT-02 (P0) - Personnalisation role/secteur
- Objectif: rendre les recommandations concretement liees au role et au secteur.
- Scope:
  - ajouter des librairies de phrases courtes role/secteur,
  - prioriser les combinaisons role+secteur quand les donnees sont connues,
  - fallback robuste si role/secteur absents.
- Critere d'acceptation:
  - role+secteur connus => au moins 2 actions contextualisees.

## TKT-03 (P1) - Qualite editoriale de l'analyse
- Objectif: rendre `buildPersonalizedAnalysis` plus explicite et utile.
- Scope:
  - structure fixe en 4 messages: constat, focus, risque, action immediate,
  - mention du contexte role/secteur si disponible.
- Critere d'acceptation:
  - pas de contradiction avec etat/score,
  - texte court et comprehensible.

## TKT-04 (P1) - Robustesse et garde-fous
- Objectif: prevenir les sorties faibles ou incoherentes.
- Scope:
  - normaliser labels role/secteur,
  - fallback sur contenus generiques robustes,
  - anti-doublon et anti-vide.
- Critere d'acceptation:
  - aucune recommandation vide,
  - aucun crash en cas de donnees partielles.

## TKT-05 (P1) - Verification technique immediate
- Objectif: valider que les modifications ne cassent pas l'app.
- Scope:
  - verification syntaxique JS,
  - verification rapide des references de fonctions.
- Critere d'acceptation:
  - `node --check scripts/app.js` passe.

## TKT-06 (P2) - Campagne QA DoD complete (post-implementation)
- Objectif: executer la matrice QA ciblee.
- Scope:
  - `TC-RES-REC-PER-*`,
  - `TC-RES-EDIT-*`,
  - responsive + console + partage.
- Critere d'acceptation:
  - checklist Pass/Fail completee,
  - Go/No-Go explicite.

## Ordre d'execution
1. TKT-01
2. TKT-02
3. TKT-03
4. TKT-04
5. TKT-05
6. TKT-06 (validation finale)
