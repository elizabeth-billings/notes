# Queues

## Overview

A **FIFO** (First In, First Out) data structure where the first item added is the first item removed.

## Real World Analogy

A line of people waiting to check out at a store. The first person in line is the first person to be helped and therefore the first person to leave the line.

## When To Use

Used when elements need to be processed in the **same order they were received or added**.

Common uses include:
- Task scheduling
- Request processing
- Breadth-first search (BFS)
- Level-order tree traversal
- Message / event processing
- Buffering and waiting systems

## Recognition Signals

- **FIFO** behavior
- Need to process items in the order they arrive
- Need to process the oldest item before newer items
- Need to explore something level by level
- Breadth-first search (BFS)
- Items are waiting to be processed

## Core Operations

### Push

Add an item to the end (tail) of the queue.

### Pop

Remove and return the item at the beginning (head) of the queue.

### Peek

Return the item at the beginning (head) of the queue without removing it.

### Size

Return the number of items in the queue.

## Complexity Analysis

For an efficient queue implementation, such as one backed by a deque or linked list:

| Operation | Time Complexity |
|---|---:|
| Push | O(1) |
| Pop | O(1) |
| Peek | O(1) |
| Size | O(1) |
| Search | O(n) |
| Space | O(n) |

> **Note:** The implementation below uses a Python `list`. `pop(0)` is O(n) because the remaining elements must be shifted. Using `collections.deque` allows removal from the front in O(1).

## Visual Representation

```text
Head               Tail
 ↓                   ↓
┌─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │
└─────┴─────┴─────┴─────┘
  ↑                       ↑
 Pop                    Push
```

```text
Push(5):

Head                     Tail
 ↓                         ↓
┌─────┬─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │  5  │
└─────┴─────┴─────┴─────┴─────┘
```

```text
Pop() → 1

Head               Tail
 ↓                   ↓
┌─────┬─────┬─────┬─────┐
│  2  │  3  │  4  │  5  │
└─────┴─────┴─────┴─────┘
```

## Implementation

```python
from typing import Any

class Queue:
    def __init__(self) -> None:
        self.items: list[Any] = []

    def push(self, item: Any) -> None:
        self.items.append(item)

    def pop(self) -> Any:
        if len(self.items) < 1: return None
        
        return self.items.pop(0)

    def peek(self) -> Any:
        if len(self.items) < 1: return None

        return self.items[0]

    def size(self) -> int:
        return len(self.items)
```

## Variants

### Deque

A **double-ended queue** that allows insertion and removal from both the front and back.

### Circular Queue

The end of the queue wraps around to the beginning, allowing allocated space to be reused efficiently.

Commonly used for:
- Fixed-size buffers
- Streaming data
- Scheduling

### Priority Queue

Elements are removed according to **priority** rather than strictly following FIFO order.

Often implemented using a **heap**.

### Monotonic Queue

Maintains elements in increasing or decreasing order.

Commonly used for:
- Sliding window maximum / minimum
- Maintaining the largest or smallest value within a changing window

## Common Interview Patterns

### Breadth-First Search (BFS)

Use a queue to explore nodes in the order they are discovered.

Common with:
- Graph traversal
- Tree traversal
- Shortest paths in unweighted graphs
- Grid traversal

### Level-Order Traversal

Process all nodes at one level before moving to the next level.

Common with:
- Binary trees
- N-ary trees

### Multi-Source BFS

Place multiple starting points into the queue initially and expand outward from all of them simultaneously.

Common with:
- Grid propagation problems
- Finding distance from the nearest source

### Processing / Simulation

Use a queue when objects arrive in one order and should be processed in that same order.

Common with:
- Task scheduling
- Request processing
- Waiting-line simulations

### Sliding Window with a Monotonic Queue

Maintain useful candidates in a deque while moving a window through an array.

Common with:
- Sliding window maximum
- Sliding window minimum

## Common Problems

- Breadth-first search
- Binary tree level-order traversal
- Shortest path in an unweighted graph
- Grid traversal
- Flood fill
- Multi-source BFS
- Rotting / spreading problems
- Implement a queue using stacks
- Implement a circular queue
- Sliding window maximum
- Moving averages from a stream

## Common Pitfalls

### Using a List Inefficiently

Removing the first element of a Python `list` with:

```text
pop(0)
```

requires the remaining elements to shift and therefore takes O(n) time.

For an efficient queue in Python, `collections.deque` supports adding to the back and removing from the front in O(1).

### Confusing Queue and Stack Behavior

Queues are **FIFO**:

```text
First In → First Out
```

Stacks are **LIFO**:

```text
Last In → First Out
```

### Removing From the Wrong End

For normal queue behavior:

```text
Push → Tail
Pop  → Head
```

Adding and removing from the same end produces stack-like behavior instead.

### Forgetting Empty Queue Checks

Attempting to access or remove the front item from an empty queue can cause an error depending on the implementation.

### Marking BFS Nodes Visited Too Late

In BFS problems, nodes should generally be marked as visited when they are **added to the queue**, not when they are removed.

Otherwise, the same node may be added to the queue multiple times.

### Losing Track of BFS Levels

For level-order problems, you often need to process exactly the number of nodes currently in the queue before moving to the next level.

## LC Problems

### Easy

- **225. Implement Stack using Queues**
- **933. Number of Recent Calls**

### Medium

- **102. Binary Tree Level Order Traversal**
- **200. Number of Islands**
- **207. Course Schedule**
- **542. 01 Matrix**
- **622. Design Circular Queue**
- **752. Open the Lock**
- **994. Rotting Oranges**

### Hard

- **239. Sliding Window Maximum**

## Related Data Structures

- **Stack** - LIFO instead of FIFO
- **Deque** - supports insertion and removal from both ends
- **Linked List** - can implement a queue with O(1) insertion and removal
- **Heap / Priority Queue** - removes items based on priority rather than strictly FIFO
- **Graph** - queues are commonly used to perform BFS on graphs
- **Tree** - queues are commonly used for level-order traversal

## Personal Notes

### Key Insights

### Mistakes I've Made

### Interview Takeaways
