# Setld — Project Context for Claude Code

## What This Is
Setld (getsetld.io) is a security deposit recovery tool for NYC renters. Tenants upload their lease + evidence, AI builds their case, and we chase the landlord with automated payment reminders until they pay. $249 flat fee charged only when the landlord pays.

## Tech Stack
- Next.js 15 (App Router, TypeScript) + Tailwind CSS
- Deployed on Vercel from this repo (auto-deploys on push to main)
- Domain: getsetld.io (DNS via Cloudflare)
- Future: Supabase (auth/db), Stripe Connect (payments), Postmark/Resend (email), Cloudflare Email Workers (inbound), Lob (certified mail), Claude API (AI extraction)

## Code Rules
- All pages use the App Router (app/ directory, not pages/)
- Use Tailwind for all styling — no separate CSS files unless absolutely necessary
- TypeScript strict mode
- Mobile-first responsive design (primary traffic is TikTok → phones)
- Keep components in src/components/ when extracted from pages
- No placeholder stock images or illustrations
- Dark mode by default (dark background, light text, bright accent color)

## Design System
- Brand color: bright electric green or teal accent on dark near-black background
- Fonts: bold modern Google Fonts (NOT Inter, Roboto, Arial, or system defaults)
- Tone: direct, confident, slightly aggressive. For 25-35 year old NYC renters who got screwed.
- CTA buttons: large, high contrast, impossible to miss

## Legal Guardrails (NEVER violate these in any copy or UI)
- Setld is a document preparation service, NOT a law firm
- Never say "we will represent you" or "on your behalf" in legal contexts
- Every demand letter must be editable by the tenant before sending
- Tenant must click "Send My Letter" (not just "Approve") for any legal correspondence
- Automated payment reminders must be purely transactional — no legal language, no statute citations
- Required disclosure footer on all generated documents: "This letter was prepared using Setld (getsetld.io), a document preparation service. Setld is not a law firm, does not provide legal advice, and does not represent the sender."

## Git Workflow
- Commit with clear messages describing what changed
- Push to main to deploy (Vercel auto-deploys)
- No branches needed at this stage

## What's Built
- Session 1: Project scaffolded, deployed, domain pointed. Default Next.js page live.

## What's Next
- Session 2: Landing page + lease upload flow
- Session 3: Supabase + auth + AI case assembly
- Session 4: Email infrastructure + send flow
- Session 5: Stripe Connect + payment infrastructure
- Session 6: Automated annoyance engine
