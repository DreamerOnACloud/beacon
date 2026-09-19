# beacon

A personal website of short, tool-agnostic explanations of software-engineering concepts, and the CS, math, and logic underneath them, each paired with a playable interactive example.

## Purpose & audience

- Public-facing, but the primary reader is the author. Writing each post is how the concept actually gets understood; publishing it is a side effect, not the goal. No optimizing for growth, SEO, or discovery for now.
- Scope isn't limited to software-engineering packaging of an idea: it deliberately reaches down into the underlying CS/math/logic when that's the real concept being explained (e.g. hashing reaching into modular arithmetic).

## Post format

Every post has four parts, built in this order:

1. **The use-case**: the author writes why they actually ran into this concept, what they were trying to achieve, and how the concept emerged out of that real need. Claude Code then briefly interviews the author on this section to sharpen it before moving on.
2. **Conceptual explanation**: drafted by Claude Code, grounded in researched sources, brief and clear, agnostic to any specific tool/language/framework wherever the concept itself doesn't require one. Not done until the author has reviewed and edited it.
3. **Playable interactive example**: implemented by Claude Code. Decided per post whether it needs to be agnostic or "real":
   - Structural/algorithmic concepts (e.g. data structures) stay language-agnostic in the *narrative*, even though the widget itself is necessarily implemented in real code (since it has to run in a browser).
   - Mechanism-type concepts (e.g. server-side rendering) get a demo that exercises the *real* mechanism rather than an approximation, no faking what the concept is actually about.
4. **Further reading**: 1-3 links to authoritative external sources, curated by Claude Code. This project isn't trying to replace existing material, only to give the higher-level intuition first.

Authorship workflow: the author always starts (the use-case), Claude Code always drafts the explanation and implements the demo, and whoever didn't produce a given part reviews and edits it before it's considered done.

Every interactive example is wrapped in one shared `<Playground>`-style base component for consistent chrome across the site, with bespoke interaction logic per concept inside it.

"Done" is a gut call, not a checklist: satisfying the four-part template already is the bar.

## Content organization

- Flat list of posts, tagged by field (Software Engineering / CS / Math / Logic), no per-field folders, since concepts often straddle fields (e.g. hashing is CS *and* math) and forcing one folder per post creates awkward classification calls.

## Content pipeline

- A backlog at `content/backlog/<slug>.md`, one file per idea, separate from `.scratch/` (which is beacon's engineering issue tracker, not an editorial one).
- Each backlog file: `Title`, `Tags` (fields it touches), `Status: todo | doing | done`, and a one-line "why" (what triggered the idea).
- Rendering mode (static vs. real SSR) is decided at implementation time, not capture time, to keep the inbox frictionless.

## Tech & hosting

- Astro + the Starlight theme (<https://starlight.astro.build/>), deployed on Netlify.
- Hybrid rendering: static by default; individual posts opt into real server-rendering when their concept demands it. Netlify supports this without standing up or maintaining a separate server.
- Widgets are built Astro-idiomatic: vanilla components/scripts, no UI framework (React/Svelte/etc.) pulled in, one consistent pattern reused across every post.
- Site name: **beacon**, final.
