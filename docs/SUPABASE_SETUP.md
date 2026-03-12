# Setup Supabase (V1)

Ce guide configure:
- authentification `email + mot de passe`
- connexion sociale `Google`
- verification email
- reset password
- historique des diagnostics en base avec RLS

## 1) Creer le projet Supabase
1. Creer un nouveau projet dans Supabase.
2. Recuperer `Project URL` et `anon public key` dans `Project Settings > API`.

## 2) Initialiser la base
1. Ouvrir `SQL Editor`.
2. Executer le script [SUPABASE_SCHEMA.sql](/C:/Users/romai/career-score-app/docs/SUPABASE_SCHEMA.sql).

## 3) Configurer Auth
1. Aller dans `Authentication > Providers`.
2. Activer `Email`.
3. Activer `Confirm email` (verification obligatoire).
4. Activer `Google` et renseigner `Client ID` + `Client Secret`.
5. Verifier le redirect OAuth de Google:
   `https://<project-ref>.supabase.co/auth/v1/callback`

## 4) Configurer les URLs de redirection
Dans `Authentication > URL Configuration`:
1. `Site URL`: URL principale de ton frontend (ex: Vercel).
2. `Redirect URLs`:
   - URL Vercel (prod)
   - URL preview (si utilisee)
   - `http://localhost:3000`
   - `http://127.0.0.1:3000`

## 5) Configurer le frontend
Modifier [scripts/supabase-config.js](/C:/Users/romai/career-score-app/scripts/supabase-config.js):

```js
window.JOBPULSE_SUPABASE_CONFIG = {
  url: "https://<project-ref>.supabase.co",
  anonKey: "<your-anon-key>",
  redirectTo: `${window.location.origin}${window.location.pathname}`,
  tableName: "diagnostic_results"
};
```

## 6) Verification rapide
1. Lancer un diagnostic en anonyme.
2. Cliquer `Sauvegarder ce diagnostic`.
3. Se connecter via email ou Google.
4. Verifier que la sauvegarde apparait dans `Voir mon historique`.
5. Verifier dans Supabase que les lignes sont dans `diagnostic_results`.

## Notes securite V1
- `anonKey` est publique (normal pour Supabase frontend).
- La protection des donnees repose sur les policies RLS.
- Sans connexion, aucune lecture/ecriture en base utilisateur n'est possible.

