# Content backlog

Post ideas for beacon, tracked separately from `.scratch/` (which is beacon's *engineering* issue tracker, see `docs/agents/issue-tracker.md`). An idea here isn't an engineering ticket.

## Convention

One file per idea: `content/backlog/<slug>.md`.

```md
Title: <working title of the concept>
Tags: <fields it touches, e.g. Software Engineering, CS, Math, Logic>
Status: todo
Why: <what you encountered that triggered this idea, one line>
```

- `Status` moves through `todo -> doing -> done` as you pick it up and finish it.
- Rendering mode (static vs. real SSR for the playable example) isn't decided here: that's an implementation-time call, not a capture-time one, so the inbox stays frictionless.
- "Done" is a gut call: does the published post satisfy the four-part template (use-case, concept explanation, playable example, further reading) described in `idea.md`? No separate checklist to consult.
- When a post is written, it lives at `src/content/docs/posts/<slug>.md` (or `.mdx`), flat, no per-field folders, tagged the same way as here.

See `_template.md` in this directory for a starting point.
