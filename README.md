# Career Score App

## Statut
- `ARCHIVE`: projet ISC gele le 12 mars 2026.
- Ce depot est conserve pour historique uniquement.
- Archive locale de reference: `ISC-project-20260312-200127.zip`.

## Structure
- `index.html`: point d'entree de l'application
- `styles.css`: styles globaux UI
- `scripts/core.js`: constantes, mapping, moteur de calcul ISC
- `scripts/app.js`: flux UI, rendu, partage, evenements DOM
- `scripts/supabase-config.js`: configuration frontend Supabase (URL + anon key)
- `scripts/supabase-auth.js`: authentification, sauvegarde diagnostics, historique utilisateur
- `assets/`: images landing et profils
- `docs/`: documentation produit, QA et setup backend

## Regles d'evolution
- Conserver `scripts/core.js` pour la logique metier pure (sans manipulation DOM si possible).
- Conserver `scripts/app.js` pour le rendu et les interactions interface.
- Eviter d'ajouter de nouvelles constantes metier dans `app.js`.
