-- JobPulse - Supabase schema V1
-- Run this script in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.diagnostic_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  diagnostic_date timestamptz not null default now(),
  created_at timestamptz not null default now(),
  career_profile text not null,
  isc_score int not null check (isc_score >= 0 and isc_score <= 100),
  dimension_scores jsonb not null,
  context_summary text,
  strongest_dimension text,
  weakest_dimension text,
  top_priority_dimension text
);

create index if not exists diagnostic_results_user_id_idx
  on public.diagnostic_results(user_id);

create index if not exists diagnostic_results_date_idx
  on public.diagnostic_results(user_id, diagnostic_date desc);

alter table public.diagnostic_results enable row level security;

drop policy if exists "Users can read their own diagnostics" on public.diagnostic_results;
create policy "Users can read their own diagnostics"
  on public.diagnostic_results
  for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own diagnostics" on public.diagnostic_results;
create policy "Users can insert their own diagnostics"
  on public.diagnostic_results
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own diagnostics" on public.diagnostic_results;
create policy "Users can update their own diagnostics"
  on public.diagnostic_results
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete their own diagnostics" on public.diagnostic_results;
create policy "Users can delete their own diagnostics"
  on public.diagnostic_results
  for delete
  using (auth.uid() = user_id);

