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

# Patterns / Paradigms 
## Divide-and-Conquer
Divide a problem into smaller parts using recursion then combine the results of the smaller problems to solve the larger one

### Examples
- Merge Sort 

# Sorting Algorithms

## Bubble Sort - O(n²)
Repeatedly compare adjacent elements and swap them when they're out of order, causing larger elements to "bubble" toward the end of the list until the list is sorted.

### Pseudocode 
1. Create a ```swapping``` var initially set to true
2. Create an ```end``` var set to the length of the input list
3. While ```swapping``` is true
   1. Set ```swapping``` to false
   2. Loop ```i``` from the second element to ```end```:
       1. If the ```(i - 1)```th element is greater than the ```i```th element:
            1. Swap ```(i - 1)``` element with the ```i```the element
            2. Set ```swapping``` to true
   3. Subtract 1 from ```end```
4. Return the sorted list

### Implementation 
```python
def bubble_sort(nums: list[int]) -> list[int]:
    swapping = True
    end = len(nums) 

    while swapping is True: 
        swapping = False
        for i in range(1, end): 
            if nums[i - 1] > nums[i]:
                nums[i - 1], nums[i] = nums[i], nums[i - 1]
                swapping = True
        end -= 1 

    return nums 
```

### Complexity

#### Time
- **Best Case**: Already sorted - O(n)
- **Average Case**: O(n²)
- **Worst Case**: Reverse sorted - O(n²)

#### Space
O(1) 

### Characteristics
- Stable: Yes
- In-place: Yes
- Adaptive: Yes 

### When to Use
Never! It's here mostly to compare to better sorting algos. 

## Merge Sort - O(n log n) 
Uses divide and conquer to split an array into two halves, recursively sort each half, and then merge the sorted halves back together.

### Pseudocode 
```merge_sort()```: 
1. If the unsorted list's length is less than 2 return it
2. Split unsorted list into two halves down the middle
3. Call ```merge_sort()``` for both halves of the unsorted list to create ```sorted_left_half``` and ```sorted_right_half```
4. Return the result of ```merge(sorted_left_half, sorted_right_half)``` 

```merge()```: 
1. Create a ```final``` list
2. Create ```i``` and ```j``` and set both to 0
3. While ```i``` and ```j``` are still within the first and second input lists lengths:
  1. Compare the current value for each list
  2. Append the smaller value to ```final```
  3. Increment the list that smaller value was taken from by 1
4. If there are left over items in either input list, add those extra elements to ```final```
5. Return ```final``` 

### Implementation 
```python
def merge_sort(nums: list[int]) -> list[int]:
    if len(nums) < 2: return nums

    return merge(
        merge_sort(nums[:len(nums) // 2]), 
        merge_sort(nums[len(nums) // 2:]) 
    )


def merge(first: list[int], second: list[int]) -> list[int]:
    final = []
    i, j = 0, 0
    
    while i < len(first) and j < len(second): 
        if first[i] <= second[j]: 
            final.append(first[i])
            i += 1
        else:
            final.append(second[j])
            j += 1
    if i < len(first): final.extend(first[i:])
    if j < len(second): final.extend(second[j:])
    return final
```

### Complexity

#### Time
- **Best Case**: O(n log n) 
- **Average Case**: O(n log n) 
- **Worst Case**: O(n log n) 

#### Space
O(n) 

### Characteristics
- Stable: Yes 
- In-place: No
- Adaptive: No

### When to Use
If you need a stable (a sort where the relative order of elements with equal keys is maintained, like keeping "Maxwell" before "Laser" when sorting by second value in ```[("Maxwell", 1), ("Laser", 1)]``` or fast sort and the high memory usage isn't an issue 

## Insertion Sort - O(n²)
Repeatedly takes one element at a time and moves it left until it reaches its correct position in the already-sorted portion of the list.

### Pseudocode 
1. Loop through each element in the input list starting with the second one:
  1. Create ```j``` and set it to current index ```i```
  2. Loop while ```j``` is greater than 0 and the element at ```j - 1``` is greater than the element at ```j```
    1. Swap the elements at ```j``` and ```j - 1```
    2. Decrement ```j``` by 1
2. Return the list 

### Implementation 
```python
def insertion_sort(nums: list[int]) -> list[int]:
    for i in range(1, len(nums)): 
        j = i
        while j > 0 and nums[j - 1] > nums[j]:
            nums[j - 1], nums[j] = nums[j], nums[j - 1]
            j -= 1
    return nums
```

### Complexity

#### Time
- **Best Case**: Already sorted - O(n)
- **Average Case**: O(n²)
- **Worst Case**: Reverse sorted - O(n²)

#### Space
O(1)

### Characteristics
- Stable: Yes
- In-place: Yes
- Adaptive: Yes

### When to Use
Good for very small inputs (typically less than 50 elements), when you need something that is stable, in-place, and adaptive, or when you need to sort a list as you receive it

## Quick Sort - Complexity
Uses divide and conquer by choosing a pivot, partitioning the remaining elements into values smaller and larger than the pivot, then recursively sorting the two partitions

### Pseudocode 
1. Select a pivot (you can pick one arbitrarily like the last element of the list, one at random, or one using the "median of three" approach where you find the median of three elements)
2. Loop through and move everything onto the "greater than" or "less than" side of the pivot
3. Move the pivot between the two sections where it belongs 
4. Repeat the operation on both sides of the pivot 

### Implementation 
```python

```

### Complexity

#### Time
- **Best Case**: 
- **Average Case**: 
- **Worst Case**: 

#### Space

### Characteristics
- Stable: 
- In-place: 
- Adaptive: 

### When to Use
