## Comments 
```python
# Single line comment

"""
Multi
line
comment
""" 
```
## Print to Console
```python
print("Hello, world!")
```

## Whitespace
Python uses whitespace instead of brackets. The standard is **4 spaces** or **1 tab stroke**. 

# Variables 

## Variable Decleration 
Variables are dynamically typed, so you don't need to specify type on decleration and the type can change. It's best practice to avoid changing variable types, though, so avoid it. 

```python
my_cat = "Maxwell"
```
Variable names should be written using **snake_case** (all lowercase with underscores separating words).

### Multiple Variable Decleration 
Multiple variables can be declared on the same line, but only do this when they're related and it makes sense to. 

```python
my_cat, cat_color, cat_weight, number_of_tails = "Maxwell", "Orange", 17, 0
```

## Data Types

### NoneType
```python
temp = None
```

NoneType has one possible value, **None**, which represents the deliberate abscence of a value, like null or nil. 

### Strings
```python
my_cat = "Maxwell"
```

Strings can be written with double or single quotes, though **double quotes** are preferred. 

#### Formatted Strings (f-strings)
```python
print(f"Hello, {my_cat}!") # Hello, Maxwell!
```
#### Concatentation
```python
con = "con"
cat = "cat"
concat = con + cat # "concat" 
```
### Numbers
```python
cat_count = 2 # Integer
cat_spirit_score = -0.235 # Float
```
Floats should have leading 0 for readability (0.5 instead of just .5). 

#### Infinity
```python
positive_infinity = float("inf") # Every value will be less than
negative_infinity = float("-inf") # Every value will be greater than
```

### Booleans 
```python
is_maxwell_orange = True
is_maxwell_purple = False
```

# Functions 
```python
def area_of_rectangle(width, height):
    return width * height

print(area_of_rectangle(2, 5)) # 10
```

Functions without explicit return statements and functions that just have "return" without anything following it return None. 

```python
def function_one():
    print ("I return None!")

def function_too():
    print ("I return None, too!")
    return 
```

## Multiple Returns 
```python
def get_cats():
    return "Maxwell", "Laser"

cat_one, cat_two = get_cats()
print (f"I love {cat_one} and {cat_two}!") # I love Maxwell and Laser!
```

## Default Values
```python
def get_title(name, profession = "Unknown"):
    return f"{name} the {profession}"

print(get_title("Maxwell", "Mouser")) # Maxwell the Mouser
print(get_title("Laser")) # Laser the Unknown
```

Optional parameters must come after all the required parameters. 

# Computing

## Floor Division
```python
print(11 // 2) # 5
```

## Exponents
```python
print(2 ** 3) # 8
```

## Modulo
```python
print(8 % 3) # 2
```

## In-Place Operators
```python
num = 10
num += 1 # 11

num = 10
num -= 1 # 9

num = 10
num *= 2 # 20

num = 10
num /= 2 # 5.0
```

## Scientific Notation
```python
print(2.35e5) # 235000.0

print(2.35e-3) # 0.00235
```

## Delimeter (for Readability) 
```python
one_million = 1_000_000 # 1,000,000
```

## Logical Operators 
```python
is_by = False
is_large = True

print(f"Is by and large: {is_by and is_large}") # Is by and large: False
print(f"Is by or large: {is_by or is_large}") # Is by or large: True
printf"Is not by: {not is_by}") # True
```

### Nesting
```python
is_by = False
is_large = True
is_mostly = True

print((is_by and is_large) or is_mostly) # True
```

## Binary
```python
binary_twelve = 0b1100 # Same as 12 in base 10 
```

## Bitwise Operators
Bitwise operators apply boolean logic to each "column" of a binary value. 

### &
```python
print(0b0101 & 0b0111) # 5 (0b0101) 
```

### |
```python
print(0b0101 | 0b0111) # 7 (0b0111) 
```

# Comparisons 

## Comparison Operators
```python
print(2 < 3)  # True
print(2 > 3)  # False
print(2 <= 3) # True
print(2 >= 3) # False
print(2 == 3) # False
print(2 != 3) # True
```

# If... Else 
```python
score = 7
msg = None 

if (score >= 8):
    msg = "Good job!"
elif (score >= 6):
    msg = "Keep trying!"
else:
    msg = "Give up."

print(msg) # Keep trying! 
```

# Loops

## For 
```python
count = 0
for i in range(0, 10):
    count += 1

print(count)
```
range(x, y) is inclusive of x but exclusive of y. So above is the same as something like **for(i = 0; i < 10; i++)**

### Range Step
```python
countdown = "" 
for i in range(5, 0, -1): 
    countdown += f"{i}... "

print(countdown) # 5... 4... 3... 2... 1... 
```

```python
even_nums = "" 
for i in range(2, 11, 2): 
    even_nums += f"{i} "

print(even_nums) # 2 4 6 8 10 
```

## While
```python
countdown = 5
msg = ""

while (countdown > 0): 
    msg += f"{countdown}... "
    countdown -= 1

print(msg) # 5... 4... 3... 2... 1... 
```

## Continue 
```python
even_nums = "" 
is_odd = False

for i in range(2, 11):
    if is_odd: 
        is_odd = False
        continue
    even_nums += f"{i} " 
    is_odd = True

print(even_nums) # 2 4 6 8 10 
```

## Break
```python
pre_lucky_nums = ""
lucky_num = 7

for i in range(0, 10):
    if i == lucky_num:
        break
    pre_lucky_nums += f"{i} "

print(pre_lucky_nums) # 0 1 2 3 4 5 6 
```

# Lists
Python arrays are called lists. 

## Initialization 
```python
fish_nums = ["one fish", "two fish"] 
fish_colors = [
    "red fish",
    "blue fish"
]

print(fish_nums) # ['one fish', 'two fish']
print(fish_colors) # ['red fish', 'blue fish']
```

## Accessing Elements
```python
fish_nums = ["one fish", "two fish"] 

print(fish_nums[0]) # one fish

fish_nums[0] = "three fish" 

print(fish_nums[0]) # three fish
```

## List Length 
```python
cats = ["maxwell", "laser"]

print(len(cats)) # 2
print(len(cats[0])) # 7
```
## Push
```python
fish_nums = ["one fish", "two fish"] 

fish_nums.append("three fish" )

print(fish_nums) # ['one fish', 'two fish', 'three fish']
```

## Pop
```python
fish_nums = ["one fish", "two fish"] 
last_num = fish_nums.pop()

print(fish_nums) # ['one fish']
print(last_num) # two fish
```

## Iterate Directly Over List (No Index / For Each)
```python
cats = ["Maxwell", "Laser"]

for cat in cats:
    print(f"Hello, {cat}!")

# Prints:
# Hello, Maxwell!
# Hello, Laser! 
```

This is more readable than iterating with range, so use it whenever possible (when index isn't needed). 

## Slice
```python
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
start = 2
stop = 9
step = 2

print(nums[ start : stop : step ]) # [2, 4, 6, 8]

print(nums[start:]) # [2, 3, 4, 5, 6, 7, 8, 9, 10]
print(nums[:stop]) # [0, 1, 2, 3, 4, 5, 6, 7, 8]
print(nums[::step]) # [0, 2, 4, 6, 8, 10]

print(nums[-start:]) # [9, 10]
```

## List Concatenation
```python
cats = ['Maxwell'] + ['Laser']
print(cats) # ['Maxwell', 'Laser']
```

## Contains
```python
cats = ['Maxwell', 'Laser']
print("Maxwell" in cats) # True
print("Garfield" not in cats) # True
```

## Deleting Elements 
```python
colors = ["Red", "Orange", "Green", "Blue", "Indigo", "Violet"]

del colors[0]
print(colors) # ['Orange', 'Green', 'Blue', 'Indigo', 'Violet']

del colors[1:3]
print(colors) # ['Orange', 'Indigo', 'Violet']

del colors[:]
print(colors) # []
```
