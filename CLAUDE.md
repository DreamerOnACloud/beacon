# beacon

## Development

Astro + Starlight. When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Git

Every commit in this repo is authored and committed solely as Claude, never under a human git identity and never with a `Co-Authored-By` trailer alongside one. Set both author and committer via environment variables on the `git commit` invocation itself, never via `git config` (local or global):

```bash
GIT_AUTHOR_NAME="Claude Sonnet 5" GIT_AUTHOR_EMAIL="noreply@anthropic.com" \
GIT_COMMITTER_NAME="Claude Sonnet 5" GIT_COMMITTER_EMAIL="noreply@anthropic.com" \
git commit -m "..."
```

When amending, add `--reset-author` (`git commit --amend` otherwise keeps the original author regardless of these env vars).

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/): not used in this project; widgets are vanilla Astro/JS by design, see `idea.md`
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)

## Agent skills

### Issue tracker

Issues/specs live as markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
