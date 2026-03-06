# Spécificités Fonctionnelles - Career Score App (JobPulse)

## 1. Objectif produit
L'application fournit un diagnostic carrière court, personnalisé et actionnable à partir de :
- l'ISC (Indice de Santé de Carrière),
- 4 dimensions psychologiques,
- les priorités utilisateur,
- le contexte professionnel.

## 2. Parcours utilisateur
1. Accueil
2. Classement des priorités (drag-and-drop)
3. Questionnaire (10 questions)
4. Situation professionnelle (contexte)
5. Résultats diagnostiques

## 3. Données exploitées
### 3.1 Scores
- `iscScore`
- `sensScore` (`Meaning`)
- `evolutionScore` (`Growth`)
- `reconnaissanceScore` (`Recognition`)
- `environnementScore` (`Environment`)

### 3.2 Profil carrière
- `profileKey`
- `profileName`
- `icon`
- `description`
- `stateLabel`

### 3.3 Priorités (Step 1)
- `weights.Meaning`
- `weights.Growth`
- `weights.Recognition`
- `weights.Environment`

### 3.4 Contexte professionnel
- secteur (domain input)
- fonction
- taille entreprise
- ancienneté entreprise
- niveau hiérarchique
- intention de mobilité (offre)

## 4. Page résultats - nouvelle structure
La page est organisée en 6 sections card-based :
1. Hero score
2. Profil carrière
3. Équilibre professionnel (4 dimensions)
4. Analyse personnalisée
5. Recommandations
6. Partage

## 5. Hero score
Titre : **Votre Indice de Santé de Carrière**

Affichage :
- score ISC visible (0-100)
- état global carrière
- phrase d'aide contextualisée
- barre de progression horizontale 0-100
- score ISC comme élément visuel principal

Règles d'état (`getCareerState`) :
- `>=80` : 🚀 Aligné
- `65-79` : 🌱 En progression
- `50-64` : ⚠️ Désalignement
- `<50` : 🔥 Risque de rupture

## 6. Profil carrière
Titre : **Votre profil carrière**

Affichage :
- icône
- nom de profil
- état global
- description
- moteur principal
- seconde dimension clé (si pertinent)
- point de vigilance

## 7. Équilibre professionnel
Titre : **Votre équilibre professionnel**

Affichage visuel des 4 dimensions :
- Sens
- Évolution
- Reconnaissance
- Environnement

Chaque dimension contient :
- valeur
- barre de progression

Résumé bas de section :
- dimension forte
- point de vigilance
- seconde dimension clé (si l'écart avec la dimension forte est faible)

## 8. Analyse personnalisée
Titre : **Analyse personnalisée**

L'analyse est déterministe, courte (2 à 4 phrases), en français.

Fonction : `buildPersonalizedAnalysis(data)`

Entrées utilisées :
- état ISC
- dimension forte/faible
- priorité top + niveau de satisfaction associé
- profil carrière
- secteur + fonction
- ancienneté
- niveau hiérarchique
- intention de mobilité
- taille d'entreprise

Principes :
- expliquer le niveau global
- expliciter les moteurs / frictions
- signaler les écarts priorité vs vécu
- contextualiser sans stéréotypes excessifs
- garder cohérence avec le profil carrière

## 9. Recommandations
Titre : **Recommandations**

Fonction : `buildRecommendations(data)`

Contraintes :
- exactement 3 recommandations
- format court : titre + une phrase explicative
- basées sur :
  - dimension faible
  - priorité principale
  - ancienneté
  - intention de mobilité
  - profil carrière
  - contexte

## 10. Partage
Titre : **Partager votre résultat**

Affichage :
- carte visuelle partageable (quasi carrée)
- résumé compact (profil + ISC)
- moteur principal + point de vigilance

Actions :
- bouton de copie du résumé
- bouton **Télécharger l'image** (export PNG)
- bouton de partage global existant (footer)

Format résumé :
`Mon profil carrière : [profileName]`
`ISC : [iscScore]`

Fallback sans profil :
`Mon ISC : [iscScore]`
`[stateLabel]`

## 11. Fonctions utilitaires clés
- `getCareerState(iscScore)`
- `getDimensionRanking(scores)`
- `getStrongestDimension(scores)`
- `getWeakestDimension(scores)`
- `getSecondStrongestDimension(scores)`
- `getTopPriority(weights)`
- `buildPersonalizedAnalysis(data)`
- `buildRecommendations(data)`
- `buildShareSummary(result)`
- `exportShareCard()`

## 12. Contraintes UX/UI
- structure claire et séquentielle
- hiérarchie visuelle forte sur le hero score
- rendu mobile-first et responsive
- sections courtes, lisibles, premium
- labels en français
- logique 100% déterministe (pas de random)
