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

## Quick Sort - O(n log n)
Uses divide and conquer by choosing a pivot, partitioning the remaining elements into values smaller and larger than the pivot, then recursively sorting the two partitions

### Pseudocode 
1. Select a pivot (you can pick one arbitrarily like the last element of the list, one at random, or one using the "median of three" approach where you find the median of three elements)
2. Partition the array so all values less than the pivot are placed before it and all values greater than the pivot are placed after it
3. Move the pivot between the two sections where it belongs 
4. Repeat the operation on both sides of the pivot 

### Implementation 
```python
def quick_sort(nums: list[int], low: int, high: int) -> None:
    if low < high:
        middle = partition(nums, low, high)
        quick_sort(nums, low, middle - 1)
        quick_sort(nums, middle + 1, high)


def partition(nums: list[int], low: int, high: int) -> int:
    pivot = median_of_three(nums, low, high)
    nums[pivot], nums[high] = nums[high], nums[pivot]
    
    pivot = nums[high]
    i = low - 1

    for j in range(low, high): 
        if nums[j] < pivot:
            i += 1
            nums[i], nums[j] = nums[j], nums[i]

    nums[i + 1], nums[high] = nums[high], nums[i + 1]

    return i + 1

def median_of_three(nums: list[int], low: int, high: int) -> int: 
    mid = (low + high) // 2

    if nums[low] <= nums[mid] <= nums[high] or nums[high] <= nums[mid] <= nums[low]: 
        return mid
    elif nums[mid] <= nums[low] <= nums[high] or nums[high] <= nums[low] <= nums[mid]:
        return low
    else:
        return high

```

### Complexity

#### Time
- **Best Case**: The pivot is the middle element of each partition - O(log n) 
- **Average Case**: O(n log n)
- **Worst Case**: The list is already sorted (this is very unlikely when you're using random pivots or the median-of-three approach) - O(n²)

#### Space
O(n) (but usually O(log n) unless the partitions are highly unbalanced)

### Characteristics
- Stable: (Usually) No 
- In-place: Yes
- Adaptive: No

### When to Use
You want a very fast sorting algorithm that sorts in place and don't mind it being unstable. 

## Selection Sort - O(n²)
Repeatedly finds the smallest element in the unsorted portion of a list and swaps it into its correct position. Unlike Bubble Sort, it performs at most one swap per pass.

### Pseudocode 
1. For every index:
  1. Set ```smallest_index``` to ```i```
  2. For every index from ```i + 1``` to end of list:
    1. If the element at ```j``` is less than the element at ```smallest_index```, set ```smallest_index``` to ```j```
  3. If ```smallest_index``` isn't equal to ```i```, swap the element at ```i``` with the element at ```smallest_index```
2. Return the sorted list 

### Implementation 
```python
def selection_sort(nums: list[int]) -> list[int]:
    for i in range(0, len(nums)):
        smallest_index = i
        for j in range(i + 1, len(nums)): 
            if nums[j] < nums[smallest_index]: smallest_index = j
        if smallest_index != i:
            nums[i], nums[smallest_index] = nums[smallest_index], nums[i]
    return nums
```

### Complexity

#### Time
- **Best Case**: O(n²)
- **Average Case**: O(n²)
- **Worst Case**: O(n²)

#### Space
O(1) 

### Characteristics
- Stable: No 
- In-place: Yes
- Adaptive: No

### When to Use
Has niche advantage over other sorts when writes are expensive (because it performs at most n - 1 swaps) and the dataset is small
