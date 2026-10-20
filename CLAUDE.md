# beacon

Static learning content produced by the `/teach` skill. All of it lives in `learning/`; there is no build step or dev server. Open the HTML files directly in a browser.

## Git

Every commit in this repo is authored and committed solely as Claude, never under a human git identity and never with a `Co-Authored-By` trailer alongside one. Set both author and committer via environment variables on the `git commit` invocation itself, never via `git config` (local or global):

```bash
GIT_AUTHOR_NAME="Claude Sonnet 5" GIT_AUTHOR_EMAIL="noreply@anthropic.com" \
GIT_COMMITTER_NAME="Claude Sonnet 5" GIT_COMMITTER_EMAIL="noreply@anthropic.com" \
git commit -m "..."
```

When amending, add `--reset-author` (`git commit --amend` otherwise keeps the original author regardless of these env vars).

## Agent skills

### Issue tracker

Issues/specs live as markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `GLOSSARY.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
