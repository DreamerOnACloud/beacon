# beacon

A personal website of short, tool-agnostic explanations of software-engineering concepts — and the CS, math, and logic underneath them — each paired with a playable interactive example.

## Purpose & audience

- Public-facing, but the primary reader is the author. Writing each post is how the concept actually gets understood; publishing it is a side effect, not the goal. No optimizing for growth, SEO, or discovery for now.
- Scope isn't limited to software-engineering packaging of an idea — it deliberately reaches down into the underlying CS/math/logic when that's the real concept being explained (e.g. hashing reaching into modular arithmetic).

## Post format

Every post has three parts:

1. **Conceptual explanation** — brief, clear, agnostic to any specific tool/language/framework wherever the concept itself doesn't require one.
2. **Playable interactive example** — decided per post whether it needs to be agnostic or "real":
   - Structural/algorithmic concepts (e.g. data structures) stay language-agnostic in the *narrative*, even though the widget itself is necessarily implemented in real code (since it has to run in a browser).
   - Mechanism-type concepts (e.g. server-side rendering) get a demo that exercises the *real* mechanism rather than an approximation — no faking what the concept is actually about.
3. **Further reading** — 1–3 links to authoritative external sources. This project isn't trying to replace existing material, only to give the higher-level intuition first.

Authorship split: **the author writes the explanation prose** — that's the mechanism by which this project sharpens the author's skills, so it isn't outsourced. Claude Code's role is implementing the interactive widget and the Astro/content plumbing, and it can act as a clarity-critic on request, not a ghostwriter.

Every interactive example is wrapped in one shared `<Playground>`-style base component for consistent chrome across the site, with bespoke interaction logic per concept inside it.

"Done" is a gut call, not a checklist — satisfying the three-part template already is the bar.

## Content organization

- Flat list of posts, tagged by field (Software Engineering / CS / Math / Logic) — no per-field folders, since concepts often straddle fields (e.g. hashing is CS *and* math) and forcing one folder per post creates awkward classification calls.

## Content pipeline

- A backlog at `content/backlog/<slug>.md`, one file per idea, separate from `.scratch/` (which is beacon's engineering issue tracker, not an editorial one).
- Each backlog file: `Title`, `Tags` (fields it touches), `Status: todo | doing | done`, and a one-line "why" (what triggered the idea).
- Rendering mode (static vs. real SSR) is decided at implementation time, not capture time — keep the inbox frictionless.

## Tech & hosting

- Astro + the Starlight theme (<https://starlight.astro.build/>), deployed on Netlify.
- Hybrid rendering: static by default; individual posts opt into real server-rendering when their concept demands it. Netlify supports this without standing up or maintaining a separate server.
- Widgets are built Astro-idiomatic: vanilla components/scripts, no UI framework (React/Svelte/etc.) pulled in — one consistent pattern reused across every post.
- Site name: **beacon**, final.
