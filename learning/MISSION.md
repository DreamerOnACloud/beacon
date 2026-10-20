# Mission: Why test on a test environment, not just locally

## Why
I am a frontend dev who just wrote a util that swaps `{|color|}`-style placeholders in incoming JSON strings with matching URL query params. It works locally. I want to be able to justify, to my team and lead, why the extra step of testing on a test environment is worth the time, and when it is not.

## Success looks like
- Explain in two sentences what a test environment catches that local testing cannot.
- Given a feature, list the specific assumptions local testing leaves unchecked (API shape, gateways, caching, auth, data).
- Say which checks belong locally and which need the test env, and defend the split.
- Apply all of this to the placeholder-replacement util before calling it done.

## Constraints
- Currently FE only; backend and infra knowledge is light.
- Short lessons, practical over theoretical.

## Out of scope
- Designing CI/CD pipelines or building staging infrastructure.
- Load and performance testing.
