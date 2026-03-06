# Spécificités Fonctionnelles - Career Score App (JobPulse)

## 1. Objectif
L'application évalue la santé de carrière d'un utilisateur via :
- un questionnaire court,
- un calcul d'ISC (Indice de Santé de Carrière),
- une lecture par dimensions,
- un profil de carrière,
- des recommandations contextualisées.

## 2. Parcours utilisateur
Flux principal (SPA) :
1. Accueil
2. Étape 1 : classement des priorités (drag-and-drop)
3. Questionnaire (10 questions)
4. Étape contexte : "Votre situation professionnelle"
5. Résultats (ISC + profil + recommandations)

## 3. Étape 1 - Priorités (refactor)
L'utilisateur classe 4 dimensions de la plus importante à la moins importante :
- Sens du travail
- Évolution
- Reconnaissance
- Environnement

### 3.1 Mapping rang -> poids
- Rang 1 -> 0.40
- Rang 2 -> 0.30
- Rang 3 -> 0.20
- Rang 4 -> 0.10

### 3.2 Presets
- Profil équilibré
- Priorité carrière
- Priorité bien-être
- Priorité impact

Ces presets appliquent un ordre prédéfini puis recalculent les poids.

## 4. Questionnaire
- 10 items, réponse sur échelle 1 à 5.
- Les réponses alimentent 4 dimensions : Meaning, Growth, Recognition, Environment.

## 5. Étape "Votre situation professionnelle" (refactor)
Titre : "Votre situation professionnelle"
Sous-titre : "Ces informations permettent de contextualiser votre score et d'affiner les recommandations."

### 5.1 Champs collectés
1. Domaine d'activité (dropdown)
- Technologie / IT
- Finance / Banque / Assurance
- Industrie / Ingénierie
- Santé / Pharmaceutique
- Conseil / Audit
- Marketing / Communication
- Commerce / Distribution
- Éducation / Recherche
- Administration / Secteur public
- Construction / Immobilier
- Transport / Logistique
- Energie / Environnement
- Médias / Création
- Hôtellerie / Tourisme
- Autre

2. Fonction (dropdown)
- Direction / Leadership
- Management d'équipe
- Ingénierie / Technique
- IT / Data / Produit
- Finance / Comptabilité
- Marketing / Communication
- Commercial / Business Development
- Opérations / Production
- Support / Administration
- Ressources Humaines
- Recherche / Expertise
- Autre

3. Taille de l'entreprise (dropdown)
- Freelance / Indépendant
- Startup (<50)
- PME (50-250)
- ETI (250-1000)
- Grande entreprise (1000+)
- Groupe international

4. Ancienneté dans l'entreprise (dropdown)
- < 6 mois
- 6 mois - 2 ans
- 2 - 5 ans
- 5 - 10 ans
- 10 - 20 ans
- 20+ ans

5. Niveau hiérarchique (dropdown)
- Contributeur individuel
- Manager d'équipe
- Manager de managers
- Direction / exécutif

6. Mobilité perçue (optionnel)
Question : "Si vous recevez une offre intéressante demain"
- Je partirais immédiatement
- Je réfléchirais sérieusement
- Je resterais probablement
- Je ne partirais pas

## 6. Compatibilité moteur recommandations
Le moteur historique est conservé.
Les nouveaux champs sont mappés vers les clés legacy existantes :
- domaine -> clé domaine legacy (`tech`, `finance`, etc.)
- fonction -> clé métier legacy (`data`, `production`, etc.)
- ancienneté entreprise -> clé ancienneté legacy (`lt6`, `6to24`, `gt24`)

Ainsi, `computeISC()` et `buildRecommendations()` restent compatibles.

## 7. Calculs
### 7.1 Dimensions
Chaque dimension est calculée sur 100 à partir des réponses associées.

### 7.2 ISC
ISC = somme pondérée des 4 dimensions avec les poids issus du ranking.

### 7.3 Interprétation ISC
Bandes : Fragile, Stagnation, Sain, Excellent.

## 8. Profil de carrière
Le profil est déterminé par ISC + scores dimensions :
- cas critique ISC < 50 : Désengagé latent,
- sinon profil dominant ou hybride selon top dimensions et écart.

Sortie :
- nom du profil,
- icône,
- état global,
- description,
- dimension forte,
- seconde dimension (si hybride),
- dimension faible.

## 9. Restitution résultats
L'écran résultats contient :
- carte ISC,
- carte Profil de Carrière,
- répartition des dimensions,
- recommandations contextualisées.

Le contexte affiché dans les recommandations inclut désormais :
- domaine,
- fonction,
- taille d'entreprise,
- ancienneté,
- niveau hiérarchique,
- mobilité (si renseignée).

## 10. Partage
Message de partage : ISC + nom du profil carrière.

## 11. Fichiers principaux
- `index.html` : structure des écrans et formulaires
- `script.js` : logique métier, mapping, calculs, rendu
- `styles.css` : styles, responsive, interactions visuelles
