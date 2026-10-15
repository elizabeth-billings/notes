# Stacks

## Overview

A **LIFO** (Last In, First Out) data structure where the last item added is the first item removed.

## Real World Analogy

A stack of bowls where it's easy to get the top bowl and easy to add bowls to the top, but difficult to access bowls in the middle or at the bottom of the stack.

## When To Use

Used when elements need to be processed in **reverse order of insertion**.

Common uses include:
- Function call management
- Undo / redo functionality
- Expression evaluation
- Browser history
- Backtracking
- Parsing and syntax validation

## Recognition Signals

- **LIFO** behavior
- Need to process items in reverse order
- Only need access to the most recently added item
- No need to access items in the middle or beginning
- Matching nested structures such as parentheses or brackets
- Backtracking to a previous state

## Core Operations

### Push - O(1)

Add an item to the "top" (end) of the stack.

### Pop - O(1)

Remove and return the "top" / last item of the stack.

### Peek - O(1)

Return the "top" / last item of the stack without removing it.

### Size - O(1)

Return the number of items in the stack.

## Complexity Analysis

| Operation | Time Complexity |
|---|---:|
| Push | O(1) amortized |
| Pop | O(1) |
| Peek | O(1) |
| Size | O(1) |
| Search | O(n) |
| Space | O(n) |

> With a Python `list`, `append()` is O(1) **amortized** because the underlying dynamic array occasionally needs to resize.

## Visual Representation

```text
        Top
         ↓
     ┌───────┐
     │   4   │  ← Most recently pushed
     ├───────┤
     │   3   │
     ├───────┤
     │   2   │
     ├───────┤
     │   1   │  ← Bottom
     └───────┘

Push(5):

        Top
         ↓
     ┌───────┐
     │   5   │
     ├───────┤
     │   4   │
     ├───────┤
     │   3   │
     ├───────┤
     │   2   │
     ├───────┤
     │   1   │
     └───────┘

Pop() → 5
```

## Implementation

```python
from typing import Any

class Stack:
    def __init__(self) -> None:
        self.items: list[Any] = []

    def push(self, item: Any) -> None:
        self.items.append(item)

    def size(self) -> int:
        return len(self.items)

    def peek(self) -> Any:
        if (self.size() > 0): 
            return self.items[-1]
        else:
            return None

    def pop(self) -> Any:
        if (self.size() > 0): 
            return self.items.pop()
        else: 
            return None 
```

## Variants

### Array / Dynamic Array Stack

Uses an array or dynamic array as the underlying storage.

- Push and pop occur at the end of the array.
- Simple and efficient.
- Python `list` is commonly used this way.

### Linked List Stack

Uses a linked list as the underlying storage.

- The head acts as the top of the stack.
- Push inserts at the head.
- Pop removes from the head.
- Push and pop are O(1).

### Monotonic Stack

A stack that maintains elements in increasing or decreasing order.

Commonly used for problems involving:
- Next greater element
- Next smaller element
- Previous greater / smaller element
- Stock span
- Histogram problems

## Common Interview Patterns

### Matching / Balancing

Push opening symbols onto the stack and pop them when the corresponding closing symbol is encountered.

Examples:
- Valid parentheses
- Balanced brackets
- Nested expressions

### Monotonic Stack

Maintain elements in increasing or decreasing order to efficiently find the next or previous greater / smaller element.

Examples:
- Next Greater Element
- Daily Temperatures
- Largest Rectangle in Histogram

### Expression Evaluation

Use stacks to process operators, operands, or nested expressions.

Examples:
- Reverse Polish Notation
- Infix / postfix expressions
- Basic calculator problems

### Backtracking / State Tracking

Push states as you move forward and pop them when you need to return to a previous state.

Examples:
- Path traversal
- Undo operations
- Iterative DFS

### Simulating Another Process

Use a stack to model behavior that naturally follows LIFO ordering.

Examples:
- Browser history
- Function calls
- Nested structures

## Common Problems

- Valid / balanced parentheses
- Next greater element
- Next smaller element
- Daily temperatures
- Evaluate postfix / Reverse Polish Notation
- Simplify a file path
- Remove adjacent duplicates
- Decode nested strings
- Largest rectangle in a histogram
- Implement a queue using stacks
- Implement a min stack
- Iterative depth-first search

## Common Pitfalls

### Stack Underflow

Calling `pop()` or `peek()` when the stack is empty.

### Confusing Stack and Queue Behavior

Stacks are **LIFO** while queues are **FIFO**.

### Using the Wrong End of a Python List

When using a Python `list` as a stack, use the **end of the list** for push and pop.

- `append()` → push
- `pop()` → pop
- `[-1]` → peek

Removing from the beginning of a list requires shifting the remaining elements and is O(n).

### Forgetting Remaining Items

In matching problems such as valid parentheses, it is not enough to detect invalid closing symbols. The stack must also be empty when processing is complete.

### Storing More Than Necessary

Some problems only require storing indices rather than entire values or objects.

For example, storing indices can be useful when the problem asks for distances or positions.

## LC Problems

### Easy

- **20. Valid Parentheses**
- **225. Implement Stack using Queues**
- **496. Next Greater Element I**
- **682. Baseball Game**
- **844. Backspace String Compare**
- **1047. Remove All Adjacent Duplicates In String**

### Medium

- **71. Simplify Path**
- **150. Evaluate Reverse Polish Notation**
- **155. Min Stack**
- **394. Decode String**
- **503. Next Greater Element II**
- **735. Asteroid Collision**
- **739. Daily Temperatures**
- **901. Online Stock Span**

### Hard

- **42. Trapping Rain Water**
- **84. Largest Rectangle in Histogram**
- **224. Basic Calculator**

## Related Data Structures

- **Queue** - FIFO instead of LIFO
- **Deque** - supports insertion and removal from both ends
- **Linked List** - can be used to implement a stack
- **Dynamic Array** - commonly used as the backing structure for a stack
- **Heap** - removes elements according to priority rather than insertion order

## Personal Notes

### Key Insights

### Mistakes I've Made

### Interview Takeaways
