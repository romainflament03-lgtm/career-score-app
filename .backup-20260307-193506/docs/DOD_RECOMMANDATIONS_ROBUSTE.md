# Definition of Done - Recommandations Robustes

Date de reference: 2026-03-09

## 1) Perimetre immuable
1. La logique de scoring ISC ne change pas (`computeTestResult`, ponderations, etats ISC).
2. Le chantier porte sur la personnalisation et la qualite des recommandations/analyse.

## 2) Fonctionnel (Recommandations)
1. L'ecran resultats affiche toujours exactement 3 actions prioritaires.
2. Les 3 actions sont deterministes pour un meme input utilisateur.
3. Les actions sont coherentes avec `state`, `weakestDimension`, `topPriority`, `role`, `sector`, `tenure`, `offerIntent`.
4. Aucune contradiction logique n'est autorisee entre score, etat, diagnostic et actions.

## 3) Personnalisation role/secteur
1. Si `role` et `sector` sont connus, au moins 2/3 actions sont explicitement contextualisees.
2. Si `role` est connu, au moins 1 action mentionne un levier metier concret du role.
3. Si `sector` est connu, au moins 1 action mentionne une contrainte ou opportunite sectorielle.
4. Si `role`/`sector` sont absents ou inconnus, fallback non bloquant avec actions actionnables.

## 4) Qualite editoriale
1. Chaque action commence par un verbe d'action.
2. Les 3 actions ne sont pas des reformulations d'un meme conseil.
3. Le texte est court, clair, comprehensible grand public.
4. "Comprendre le diagnostic" explique clairement pourquoi ce resultat et pourquoi ces actions.

## 5) Robustesse des donnees
1. Aucun crash si cles profil manquantes ou inattendues.
2. Valeurs invalides normalisees ou remplacees par fallback neutre.
3. Aucun libelle affiche vide, `undefined` ou `null`.

## 6) UX responsive/mobile
1. Aucun debordement horizontal a 360px.
2. Hero resultats mobile: profil + ISC + etat visibles sans scroll initial.
3. Cibles tactiles critiques (`share`, `restart`, controles) >= 44px.
4. Radar lisible en mobile portrait, sans collision critique.
5. Aucune regression desktop (>= 1280px).

## 7) Accessibilite
1. Contraste AA sur contenus principaux.
2. Focus visible sur tous les elements interactifs.
3. Ordre de tabulation coherent.
4. Libelles explicites sur boutons et sections interactives.

## 8) Technique
1. Parcours complet sans erreur JS bloquante.
2. `navigator.share` si disponible; fallback clipboard si indisponible/en erreur.
3. Verification syntaxique JS OK (`node --check`).
4. Separation logique metier / rendu UI preservee.

## 9) QA minimale (matrice)
1. Viewports: 360x800, 390x844, 768x1024, 1280x800+.
2. Navigateurs: Chrome desktop recent, Safari iOS recent, Chrome Android recent.
3. Cas metier: au moins un cas par etat ISC (`<50`, `50-64`, `65-79`, `>=80`).
4. Cas personnalisation: au moins un cas par couple role/secteur majeur + cas fallback inconnu.
5. Tous les cas critiques du plan QA existant restent passants.

## 10) Performance et stabilite
1. Affichage resultats fluide sans freeze perceptible.
2. Pas de saut de layout majeur au rendu hero/radar.
3. Comportement stable apres resize et changement orientation.

## 11) Go / No-Go
1. Go si 100% des criteres bloquants passent.
2. No-Go si un seul critere bloquant echoue.
3. Les ecarts mineurs restants sont documentes avec plan de correction date.

## 12) Preuves attendues avant cloture
1. Checklist Pass/Fail par critere DoD.
2. Resume des tests executes (device/viewport/browser).
3. Liste des risques residuels explicitement acceptes.

## 13) Lien avec le plan QA strict
1. Reference d'execution: `docs/PLAN_TESTS_QA_STRICT.md`.
2. Mapping des criteres DoD vers les tests QA: section `10. Mapping DoD -> QA` du plan QA strict.
3. Regle de decision release: section `11. Regle Go/No-Go Alignee DoD` du plan QA strict.
