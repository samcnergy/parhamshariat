-- Run this once in the Supabase SQL editor for project wthgmbwsqlgugefwxfhk.
-- Creates the contact form submissions table with RLS locked down to insert-only
-- from the public anon key (no read/update/delete from the client).

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  reason text not null default 'general',
  message text not null
);

alter table public.contact_submissions enable row level security;

create policy "Allow anonymous inserts"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- No select/update/delete policy is created for `anon`, so submissions
-- can only be read from the Supabase dashboard or a service-role key.
