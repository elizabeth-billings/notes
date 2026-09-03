# Sources
- [Boot.dev DSA course](https://www.boot.dev/)

# Intro 
**Data Structures** are just ways of organizing and storing data so that it can be accessed, managed, and processed more efficiently. Examples include lists, dictionaries, and sets. **Algorithms** are finite step-by-step instructions or rules designed to solve a problem or perform a task efficiently. They should be defined, unambiguous, and implementable. 

Example:
```
Algorithm: Hunt for a high attack adamant Snorlax in XD: 
1. Load save
2. Fight Ardos and snag his Snorlax
3. Leave final area and go back to port 
4. Go to PC and check Snorlax's stats
5. If Snorlax doesn't have an attack of or above 118 and doesn't have an adamant nature, return to step 1
```

Data structures and algorithms don't need to be memorized, but you need to have enough familiarity with them to know when to use them. 

# Big O, Big Theta, and Big Omega

These notations describe how an algorithm's runtime or memory usage grows as the input size (`n`) increases. They help us analyze an algorithm's efficiency without worrying about hardware or exact execution times.

## Big O: O(f(n))

### What It Means
Big O describes the **upper bound** of an algorithm's growth rate. It tells us the maximum amount of work an algorithm may need to perform as the input size increases.

### Think Of It As
> "At worst, the algorithm won't be slower than this growth rate."

### Example
Linear search on a list of `n` elements may need to examine every element.

**Worst-case:** `O(n)`

### Common Uses
- Worst-case runtime analysis
- Comparing algorithm scalability
- Most commonly used complexity notation

## Big Theta: Θ(f(n))

### What It Means
Big Theta describes the **exact growth rate** of an algorithm. It provides both an upper and lower bound, meaning the algorithm grows at approximately this rate as `n` increases.

### Think Of It As
> "The algorithm grows at this rate."

### Example
An algorithm that always processes every element exactly once:

**Runtime:** `Θ(n)`

Whether there are 10 elements or 10 million, the amount of work grows proportionally with `n`.

### Common Uses
- Describing the true growth rate of an algorithm
- More precise analysis than Big O

## Big Omega: Ω(f(n))

### What It Means
Big Omega describes the **lower bound** of an algorithm's growth rate. It tells us the minimum amount of work an algorithm must perform.

### Think Of It As
> "The algorithm will do at least this much work."

### Example
In linear search, if the target is the first element:

**Best-case:** `Ω(1)`

The algorithm finds the value immediately.

### Common Uses
- Best-case runtime analysis
- Establishing theoretical performance limits

## Comparison

| Notation | Meaning | Common Interpretation |
|-----------|-----------|-----------|
| **O(f(n))** | Upper bound | Worst-case |
| **Θ(f(n))** | Tight bound | Exact growth rate |
| **Ω(f(n))** | Lower bound | Best-case |

## Example: Linear Search

Searching a list for a value:

| Case | Complexity |
|--------|--------|
| Best Case | Ω(1) |
| Average Case | Θ(n) |
| Worst Case | O(n) |

Why?

- If the value is first, only one comparison is needed.
- On average, about half the list is searched.
- In the worst case, every element is examined.

---

## Quick Memory Tricks

- **Big O (O)** → "At most"
- **Big Omega (Ω)** → "At least"
- **Big Theta (Θ)** → "Exactly"

Or:

```text
Ω ≤ Θ ≤ O

Lower Bound ≤ Exact Growth ≤ Upper Bound
```

## Growth Rate Comparison

| Big O | Example |
|--------|---------|
| O(1) | Accessing an array element |
| O(log n) | Binary Search |
| O(n) | Linear Search |
| O(n log n) | Merge Sort |
| O(n²) | Nested loops |
| O(n³) | Triple nested loops |
| O(2ⁿ) | Brute-force subsets |
| O(n!) | Generating all permutations |

**Fastest → Slowest Growth**

O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(n³) → O(2ⁿ) → O(n!)

# Sorting Algorithms

