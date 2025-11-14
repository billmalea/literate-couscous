# TypeScript DSA & LeetCode Mastery

A comprehensive TypeScript library for mastering Data Structures and Algorithms with detailed LeetCode problem solutions and explanations.

## 🚀 Quick Start

**New here?** Start with the [**Getting Started Guide**](./GETTING_STARTED.md) to learn:

- How to install and set up the project
- Recommended learning path (Beginner → Intermediate → Advanced)
- Common commands and workflows
- First steps to start coding

## 🎯 Overview

This repository contains:

- **Data Structures**: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables, Heaps, etc.
- **Algorithms**: Sorting, Searching, Dynamic Programming, Greedy, Backtracking, Graph Algorithms
- **LeetCode Solutions**: 100+ curated LeetCode problems with detailed explanations
- **Interview Patterns**: Common patterns and techniques for technical interviews
- **Test Coverage**: Comprehensive unit tests for all implementations

## 📁 Project Structure

```
typescript-dsa-leetcode-mastery/
├── src/
│   ├── data-structures/          # Core data structure implementations
│   │   ├── arrays/
│   │   ├── linked-lists/
│   │   ├── stacks/
│   │   ├── queues/
│   │   ├── trees/
│   │   ├── graphs/
│   │   ├── hash-tables/
│   │   └── heaps/
│   ├── algorithms/               # Algorithm implementations
│   │   ├── sorting/
│   │   ├── searching/
│   │   ├── dynamic-programming/
│   │   ├── greedy/
│   │   ├── backtracking/
│   │   └── graph-algorithms/
│   ├── leetcode/                 # LeetCode problem solutions
│   │   ├── easy/
│   │   ├── medium/
│   │   └── hard/
│   ├── patterns/                 # Common interview patterns
│   │   ├── sliding-window/
│   │   ├── two-pointers/
│   │   ├── fast-slow-pointers/
│   │   ├── binary-search/
│   │   └── merge-intervals/
│   ├── utils/                    # Helper utilities
│   └── index.ts                  # Main export file
├── __tests__/                    # Unit tests
│   ├── data-structures/
│   ├── algorithms/
│   ├── leetcode/
│   └── patterns/
├── docs/                         # Generated documentation
├── .github/                      # GitHub specific files
│   ├── workflows/                # CI/CD workflows
│   └── copilot-instructions.md  # Copilot customization
├── .gitignore
├── .eslintrc.json               # ESLint configuration
├── .prettierrc.json             # Prettier configuration
├── jest.config.json             # Jest testing configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file

```

## � Documentation & Guides

- **[Getting Started](./GETTING_STARTED.md)** — Setup, installation, learning path, and first steps
- **[Contributing](./CONTRIBUTING.md)** — How to add features, code standards, and PR process
- **[Documentation Index](./DOCUMENTATION.md)** — Complete guide to all documentation files

## Installation & Setup

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:

```bash
# Replace <repository-url> with the repository HTTP/SSH URL
git clone <repository-url>
# If you forked the project, clone your fork instead
cd typescript-dsa-leetcode-mastery
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

## 📚 Usage

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### Development

```bash
# Watch mode - auto-compile on file changes
npm run dev

# Build for production
npm run build

# Generate documentation
npm run docs
```

## 📖 Examples

### Using a Data Structure

```typescript
import { LinkedList } from './src/data-structures/linked-lists';

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);

console.log(list.toString()); // Output: 1 -> 2 -> 3
```

### Using an Algorithm

```typescript
import { quickSort } from './src/algorithms/sorting';

const arr = [64, 34, 25, 12, 22, 11, 90];
quickSort(arr);
console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]
```

### LeetCode Solutions

```typescript
import { twoSum } from './src/leetcode/easy/two-sum';

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
```

## 🎓 Learning Path

### Beginner

- Arrays and Strings
- Basic Sorting and Searching
- Stacks and Queues
- Linked Lists

### Intermediate

- Trees and Binary Search Trees
- Graphs and Graph Traversal
- Dynamic Programming Basics
- Common Patterns (Two Pointers, Sliding Window)

### Advanced

- Advanced Graph Algorithms (Dijkstra, BFS/DFS)
- Complex Dynamic Programming
- Greedy Algorithms
- Backtracking and Recursion

## 🧪 Testing

All implementations include comprehensive unit tests. Tests are located in the `__tests__` directory mirroring the source structure.

Example test file (`__tests__/data-structures/arrays/array-basics.test.ts`):

```typescript
describe('Array Basics', () => {
  it('should reverse an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reverseArray(arr)).toEqual([5, 4, 3, 2, 1]);
  });
});
```

## 📝 Contributing

1. Create a new branch for your feature/fix
2. Write tests for your changes
3. Ensure all tests pass: `npm test`
4. Lint your code: `npm run lint`
5. Format your code: `npm run format`
6. Submit a pull request

## 📖 Documentation

Full documentation is generated using TypeDoc. To generate and view docs:

```bash
npm run docs
```

Documentation will be available in the `docs/` directory.

## 🔗 Resources

- [LeetCode](https://leetcode.com)
- [InterviewBit](https://www.interviewbit.com)
- [GeeksforGeeks DSA](https://www.geeksforgeeks.org/data-structures)
- [Cracking the Coding Interview](https://www.crackingthecodinginterview.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## ⚡ Quick Commands Reference

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| `npm install`           | Install all dependencies         |
| `npm run build`         | Compile TypeScript to JavaScript |
| `npm run dev`           | Watch mode for development       |
| `npm test`              | Run all tests                    |
| `npm run test:coverage` | Generate coverage report         |
| `npm run lint`          | Check code quality               |
| `npm run lint:fix`      | Fix linting issues               |
| `npm run format`        | Format code with Prettier        |
| `npm run clean`         | Remove build artifacts           |
| `npm run docs`          | Generate documentation           |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Tips for Success

1. **Practice Regularly**: Solve at least one problem daily
2. **Understand Concepts**: Don't just memorize solutions; understand the logic
3. **Write Tests**: Test your implementations thoroughly
4. **Review Others' Code**: Learn from different approaches
5. **Time Complexity**: Always analyze and optimize time and space complexity
6. **Explain Your Solution**: Be able to articulate your approach clearly

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.

---

**Happy Coding! 🚀**
