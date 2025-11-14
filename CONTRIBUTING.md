# Contribution Guidelines

Thank you for your interest in contributing to TypeScript DSA & LeetCode Mastery! We welcome contributions from everyone. Here are some guidelines to help you get started.

## How to Contribute

### 1. Fork the Repository

- Click the "Fork" button at the top right of the repository

### 2. Clone the repository (or your fork)

```bash
# If you forked the repository on GitHub, clone your fork's URL; otherwise clone the main repository URL.
git clone <repository-url-or-your-fork-url>
cd typescript-dsa-leetcode-mastery
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

#### Adding a New Data Structure

- Create file in appropriate directory under `src/data-structures/`
- Include JSDoc comments with complexity analysis
- Write comprehensive tests in `__tests__/data-structures/`
- Update `src/index.ts` exports

#### Adding a New Algorithm

- Create file in appropriate directory under `src/algorithms/`
- Include JSDoc comments with complexity analysis and explanation
- Write comprehensive tests in `__tests__/algorithms/`
- Update `src/index.ts` exports

#### Adding a LeetCode Solution

- Create file in appropriate difficulty folder under `src/leetcode/`
- Include problem description and constraints
- Provide multiple solutions when possible (naive + optimized)
- Include time and space complexity analysis
- Write tests in `__tests__/leetcode/`
- Update `src/index.ts` exports

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `test:` for test additions
- `refactor:` for code refactoring

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

- Go to the original repository
- Click "New Pull Request"
- Select your branch and provide a clear description

## Code Standards

### TypeScript

- Use strict mode (`strict: true` in tsconfig.json)
- Use explicit type annotations
- No `any` types without justification
- Use `const` and `let`, not `var`

### Documentation

- Include JSDoc comments for all public functions/classes
- Provide examples in comments
- Document time and space complexity

### Testing

- Write tests for all new code
- Aim for >80% code coverage
- Tests should be clear and descriptive

### Code Quality

```bash
# Format code
npm run format

# Lint code
npm run lint

# Run tests
npm test
```

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:

```
feat(algorithms): add merge sort implementation

- Implements merge sort with clear partition logic
- Includes O(n log n) time complexity analysis
- Adds comprehensive test cases for edge cases

Closes #123
```

## Pull Request Process

1. Update README.md if needed
2. Ensure all tests pass: `npm test`
3. Ensure code is formatted: `npm run format`
4. Ensure linting passes: `npm run lint`
5. Update any affected documentation
6. Request review from maintainers

## Reporting Issues

- Check existing issues first
- Provide clear, descriptive title
- Include code examples if applicable
- Specify your environment (Node version, OS, etc.)

## Code of Conduct

Please be respectful and constructive in all interactions. We're all here to learn!

## Questions?

Feel free to open an issue or start a discussion. Happy contributing! 🚀
