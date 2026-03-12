// Configure Supabase here before deploying.
// The anon key is public and safe to expose in frontend code.
window.JOBPULSE_SUPABASE_CONFIG = {
  url: "",
  anonKey: "",
  redirectTo: `${window.location.origin}${window.location.pathname}`,
  tableName: "diagnostic_results"
};

