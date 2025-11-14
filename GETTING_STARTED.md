# Getting Started with TypeScript DSA & LeetCode Mastery

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Comes with Node.js
- **Git**: For version control

## Installation & Setup

### 1. Clone the Repository
```bash
# Replace <repository-url> with the repository HTTP/SSH URL
git clone <repository-url>
# If you fork the project, clone your fork instead
cd typescript-dsa-leetcode-mastery
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Project
```bash
npm run build
```

## Project Structure Quick Reference

```
src/
├── data-structures/    # Core DSA implementations
├── algorithms/         # Algorithm implementations
├── leetcode/          # LeetCode solutions organized by difficulty
├── patterns/          # Common interview patterns
├── utils/             # Helper utilities
└── index.ts           # Main exports

__tests__/             # Unit tests mirroring src/ structure
```

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run dev` | Watch mode (auto-compile on changes) |
| `npm test` | Run all unit tests |
| `npm test:watch` | Run tests in watch mode |
| `npm test:coverage` | Generate coverage report |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run clean` | Remove build artifacts |
| `npm run docs` | Generate TypeDoc documentation |

## First Steps

### 1. Explore the Examples
```bash
# Look at the source code structure
ls -la src/data-structures/
ls -la src/algorithms/
```

### 2. Run the Tests
```bash
npm test
```

### 3. Build and Check Output
```bash
npm run build
# Check the generated dist/ folder
ls -la dist/
```

### 4. Try TypeScript Compilation with Watch Mode
```bash
npm run dev
# This will automatically recompile when you save files
```

## Learning Path

### Week 1-2: Fundamentals
- Arrays and Strings basics
- Understand Time and Space Complexity
- Basic Sorting (QuickSort, MergeSort)
- Stacks and Queues

### Week 3-4: Data Structures
- Linked Lists (single, double)
- Trees (BST, AVL)
- Graphs (adjacency list/matrix)
- Hash Tables

### Week 5-6: Algorithms
- Searching (Binary Search, DFS, BFS)
- More Sorting algorithms
- Dynamic Programming intro
- Greedy algorithms

### Week 7-8: Advanced Topics
- Complex graph algorithms (Dijkstra, Bellman-Ford)
- Advanced DP patterns
- Backtracking
- NP-Hard problems

## Code Examples

### Using a Stack
```typescript
import { Stack } from './src/data-structures/stacks/stack';

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
```

### Solving a LeetCode Problem
```typescript
import { twoSum } from './src/leetcode/easy/two-sum';

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target); // [0, 1]
```

### Running Sorting Algorithm
```typescript
import { quickSort } from './src/algorithms/sorting/quick-sort';

const arr = [64, 34, 25, 12, 22, 11, 90];
const sorted = quickSort(arr); // [11, 12, 22, 25, 34, 64, 90]
```

## Development Workflow

1. **Create a new feature branch**
   ```bash
   git checkout -b feature/new-algorithm
   ```

2. **Write your implementation**
   - Add code to appropriate `src/` directory
   - Write JSDoc comments with complexity analysis

3. **Write tests**
   - Create corresponding test in `__tests__/`

4. **Validate code quality**
   ```bash
   npm run format
   npm run lint:fix
   npm test
   ```

5. **Build and verify**
   ```bash
   npm run build
   ```

6. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add new algorithm"
   git push origin feature/new-algorithm
   ```

## Debugging Tips

### Debug a specific test file
```bash
npm test -- src/leetcode/easy/two-sum.test.ts
```

### Check TypeScript types
```bash
npx tsc --noEmit
```

### See what's exported
```bash
# Look at dist/index.d.ts for exported types
cat dist/index.d.ts
```

## Resources

- [Big O Notation Cheat Sheet](https://www.bigocheatsheet.com/)
- [LeetCode](https://leetcode.com)
- [GeeksforGeeks DSA](https://www.geeksforgeeks.org/data-structures/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## Troubleshooting

### Compilation errors
```bash
# Check TypeScript configuration
npm run build
# Look for errors in src/ files
```

### Test failures
```bash
# Run tests in verbose mode
npm test -- --verbose
```

### Node version issues
```bash
# Check your Node version
node --version
# Should be 18.0.0 or higher
```

## Need Help?

- Check existing issues: [GitHub Issues](https://github.com/yourusername/typescript-dsa-leetcode-mastery/issues)
- Read CONTRIBUTING.md for contribution guidelines
- See README.md for full documentation

Happy learning! 🚀
