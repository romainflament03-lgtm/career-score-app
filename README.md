# Career Score App

## Structure
- `index.html`: point d'entrée de l'application
- `styles.css`: styles globaux UI
- `scripts/core.js`: constantes, mapping, moteur de calcul ISC
- `scripts/app.js`: flux UI, rendu, partage, événements DOM
- `assets/`: images landing et profils
- `docs/`: documentation produit et QA

## Règles d'évolution
- Conserver `scripts/core.js` pour la logique métier pure (sans manipulation DOM si possible).
- Conserver `scripts/app.js` pour le rendu et les interactions interface.
- Éviter d'ajouter de nouvelles constantes métier dans `app.js`.