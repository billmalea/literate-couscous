# CI/CD Setup and Status Checks

This repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically runs build, lint, test, and type-check on every push and pull request.

## Workflow Details

The CI workflow runs on:
- **Triggers**: Push to `main` or `develop` branches; all pull requests to `main` or `develop`.
- **Matrix**: Node.js versions 18.x and 20.x (tests run in parallel for each version).
- **Jobs**:
  1. **Lint** — checks code style with ESLint.
  2. **Build** — compiles TypeScript.
  3. **Tests** — runs Jest unit tests.
  4. **Type check** — validates TypeScript types.

## Status Checks for Branch Protection

Once the workflow is running (first PR or push will trigger it), GitHub will automatically register the following status checks:

- `build / Build & Test (18.x)` — Build and test on Node.js 18.x
- `build / Build & Test (20.x)` — Build and test on Node.js 20.x

To require these checks before merging:

1. Go to GitHub repo **Settings** → **Branches**.
2. Click **Edit** on the branch protection rule for `main`.
3. Under "Require status checks to pass before merging", search for and select:
   - `build / Build & Test (18.x)`
   - `build / Build & Test (20.x)` (optional; select at least one)
4. Check "Require branches to be up to date before merging" (requires status checks enabled).
5. Save.

Or use the REST API (see `.github/BRANCH_PROTECTION.md` for API examples).

## Running CI Locally

To verify your changes before pushing, run:

```bash
npm run lint
npm run build
npm test
npx tsc --noEmit
```

Or run all at once:

```bash
npm run format && npm run lint:fix && npm run build && npm test
```

## Troubleshooting

- **Workflow not triggered**: Ensure you pushed to `main` or `develop` (or opened a PR to one of those branches).
- **Tests fail in CI but pass locally**: Check Node.js version differences. The workflow tests both 18.x and 20.x; verify your local Node.js version matches one of them.
- **Lint errors in CI**: Run `npm run lint:fix` locally and push again.

## Customizing the Workflow

To modify the workflow:
1. Edit `.github/workflows/ci.yml`.
2. Change node versions, add new steps, or adjust triggers as needed.
3. Push the changes; the updated workflow will run on the next push/PR.

For more info, see the [GitHub Actions documentation](https://docs.github.com/en/actions).
