# LeetCode Tracker

LeetCode Tracker synchronizes accepted LeetCode submissions to the `Problem-Solving` GitHub repository.

Phase 0 is complete: the Node.js project scaffold, CLI validation, tests, security defaults, and GitHub Actions CI are in place.

## Development

```bash
npm ci
npm run ci
npm start -- --help
```

Never commit `.env`, LeetCode cookies, or tokens. GitHub Actions credentials will be configured as repository secrets in a later phase.
