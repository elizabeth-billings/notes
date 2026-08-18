# Sources
- [Boot.dev](https://www.boot.dev)

# "The Zen of Python" by Tim Peters   
> Beautiful is better than ugly.   
> Explicit is better than implicit.  
> Simple is better than complex.  
> Complex is better than complicated.  
> Flat is better than nested.  
> Sparse is better than dense.  
> Readability counts.  
> Special cases aren't special enough to break the rules.  
> Although practicality beats purity.  
> Errors should never pass silently.  
> Unless explicitly silenced.  
> In the face of ambiguity, refuse the temptation to guess.  
> There should be one-- and preferably only one --obvious way to do it.  
> Although that way may not be obvious at first unless you're Dutch.  
> Now is better than never.  
> Although never is often better than *right* now.  
> If the implementation is hard to explain, it's a bad idea.  
> If the implementation is easy to explain, it may be a good idea.  
> Namespaces are one honking great idea -- let's do more of those!  

# Basics 

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

## Type Of Variable
```python
print(type("Hello, world!")) # <class 'str'>
```

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

Strings are iterable, so you don't need to convert them to character arrays to use in for loops or to get character at certain indexes. 

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

#### To Lower
```python
print("MaXwElL".lower()) #maxwell
```

#### Is Alpha
Returns true if all characters in a string are alphabetic 

```python
print("Maxwell".isalpha()) # True
```

#### Replace
```python

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
To check if a list is empty, check that the length is 0. 

```python
cats = ["maxwell", "laser"]

print(len(cats)) # 2
print(len(cats[0])) # 7
```

## Append (Push) 
```python
fish_nums = ["one fish", "two fish"] 

fish_nums.append("three fish" )

print(fish_nums) # ['one fish', 'two fish', 'three fish']
```

## Extend (Append another list) 
```python
cats = ["Maxwell"]
cats.extend(["Laser", "Frederick"])
print(cats) # ['Maxwell', 'Laser', 'Frederick']
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

## Min and Max 
This works for any type of iterable.

```python
cats = ["Maxwell", "Laser", "Garfield"]
ages = [11, 8, 48]

print(min(cats)) # Garfield
print(max(cats)) # Laser

print(min(ages)) # 8
print(max(ages)) # 48
```

### Min and Max with Multiple Arguments
```python
nums = [235, 1999, 2000]

print(min(nums, 100)) # 100
print(max(nums, 100)) # 2000 
```

## Tuples
**Tuples** are lists with a fixed size. Since they have a fixed size, it's considered okay to store different types of data in the same tuple. 

```python
my_tuple = ("I'm a tuple", 235, True) 
print(my_tuple) # ("I'm a tuple", 235, True)
print(my_tuple[1]) # 235

single_item_tuple = ("I only have one item but I still need the comma after the one item",)

cats = [
    ("Maxwell", "orange", 11),
    ("Laser", "black", 8)
]

print(cats[1][0]) # Laser
```

### Tuple Unpacking
When a function returns multiple values, it's actually returning a single tuple that is then unpacked. 

```python
cat = ("Maxwell", "orange", 11)

cat_name, cat_color, cat_age = cat
print(f"{cat_name} is a {cat_age}-year-old {cat_color} cat.") # Maxwell is a 11-year-old orange cat.
```

## Split String
```python
msg = "I love cats!"
print(msg.split()) # ['I', 'love', 'cats!']

cats = "Maxwell,Laser,Garfield"
print(cats.split(",")) # ['Maxwell', 'Laser', 'Garfield']

cats = "Maxwell,Laser,Frederick"
first_cat, other_cats = cats.split(",", maxsplit = 1)
print(first_cat) # Maxwell
print(other_cats) # Laser,Frederick
```

## Join List to String
```python
my_list = ["I", "love", "cats!"]
print(" ".join(my_list)) # I love cats!

cats = ["Maxwell", "Laser", "Garfield"]
print(",".join(cats)) # Maxwell,Laser,Garfield
```

## Sort
```python
cats = ["Maxwell", "Laser", "Frederick"]
sorted_cats = sorted(cats)

print(sorted_cats) #  ["Frederick", "Laser", "Maxwell"]
```

### Reverse Sort
```python
cats = ["Maxwell", "Laser", "Frederick"]
sorted_cats = sorted(cats, reverse=True)

print(sorted_cats) #  ["Maxwell", "Laser", "Frederick"]
```

### Sort Tuples
```python
def sort_on(some_tuple: tuple[str, int]) -> int:
    return some_tuple[1]

cat_scores = [("Maxwell", 5), ("Laser", 2), ("Frederick", 9)]
sorted_cat_scores = sorted(cat_scores, key=sort_on)
print(sorted_cat_scores) # [("Laser", 2), ("Maxwell", 5), ("Frederick", 9)]
```

# Dictionaries 
```python
cat = {
    "name": "Maxwell",
    "color": "orange",
    "age": 11,
    "is_mine": True
}

print(cat["name"]) # Maxwell

# Add key / value pair
cat["breed"] = "tabby"

# Delete key / value pair
del cat["breed"] 
```

## Adding a key / value pair 
```python
cat["breed"] = "tabby"
```

## Adding a key / value pair 
```python
del cat["breed"] 
```

## Check if Dictionary Contains Key
```python
cat = {
    "name": "Maxwell",
    "color": "orange",
    "age": 11,
    "is_mine": True
}

print("breed" in cat) # False 
```

## Iterating over a Dictionary
```python
for key in cat:
    print(f"{key} is {cat[key]}")

"""
prints: 
name is Maxwell
color is orange
age is 11
is_mine is True
"""
```

## Order
Before Python 3.7, dictionaries were unordered. As of Python 3.7 and later, they are now **ordered**, so you can be sure that the key / value pairs will always stay in the same order every time. 

# Sets
```python
cats = {"Maxwell", "Laser", "Garfield"}

cats.add("Frederick") 
print(cats) # {'Laser', 'Frederick', 'Garfield', 'Maxwell'}
```

## Add to Set
```python
cats = {"Maxwell", "Laser", "Garfield"}
cats.add("Frederick")

print(cats) # {'Garfield', 'Maxwell', 'Laser', 'Frederick'}
```

## Remove from Set 
```python
cats = {"Maxwell", "Laser", "Garfield"}
cats.remove("Garfield")

print(cats) # {'Maxwell', 'Laser'}
```

## Initialize an Empty Set
```python
cats = set()
cats.add("Maxwell")
print(cats) # {'Maxwell'}
```

## Iterate Over a Set
Sets are unordered, so the order of iteration isn't always going to be the same. 

```python
cats = {"Maxwell", "Laser", "Garfield"}

for cat in cats: 
    print(f"Hello, {cat}")
```

## Set <-> List Conversion
```python
cats = {"Maxwell", "Laser", "Garfield"}
cats_list = list(cats) 

print(cats_list) # ['Laser', 'Garfield', 'Maxwell']
print(set(cats_list)) # {'Laser', 'Garfield', 'Maxwell'}
```

## Set Subtraction 
```python
cats_in_apartment = {"Maxwell", "Laser"} 
my_cats = {"Maxwell"} 

not_my_cats = cats_in_apartment - my_cats
print(not_my_cats) # {'Laser'}
```

# Exceptions
```python
try: 
    1 / 0
except Exception: 
    print("Can't divide by 0")

try: 
    1 / 0
except Exception as e: 
    print(f"Exception: {e}") # Exception: division by zero
```

## Raising Exceptions
Don't raise and catch your own exception in the same code block. Instead, wrap the line / block that's calling the function you raise exception in in a try / except block. Always catch the most specific exceptions first, followed by more general ones. [Built-in exceptions can be found here.
](https://docs.python.org/3/library/exceptions.html)

```python
def get_cat_color(cat):
    if cat == "Maxwell":
        return "orange"
    if cat == "Laser":
        return "black"
    raise Exception("invalid cat") 

try:
    get_cat_color("Frederick")
except Exception as e:
    print(e) 

# Prints "invalid cat"
```

# Type Hints
Type hints tell human readers and the computer what types variables or arguments should be, but they don't actually stop Python from being dynamically typed or stop Python from compiling code when the wrong argument type is passed.

```python
def cat_greeting(cat_name: str, cat_age: int, is_birthday: bool):
    if is_birthday:
        return f"Happy Birthday, {cat_name}! I can't believe you're turning {cat_age}!"
    else: 
        return f"Hello, {cat_name}!"

print(cat_greeting("Maxwell", 12, True)) # Happy Birthday, Maxwell! I can't believe you're turning 12!
print(cat_greeting(True, "orange", "Maxwell")) # Happy Birthday, True! I can't believe you're turning orange!
```

## Return Types
```python
def is_alive(health: int) -> bool:
    return health > 0

print(is_alive(5)) # True
print(is_alive(0)) # False 
```

## Containers
When setting type hints for containers (list, set, dict, and tuple), also set what type of value it contains.

```python
def unique_cats(cats: list[str]) -> list[str]:
    return list(set(cats))

print(unique_cats(["Maxwell", "Maxwell", "Laser"])) # ['Maxwell', 'Laser']

cat_ages: dict[str, int] = {
    "Maxwell": 11,
    "Laser": 8
}

cat: tuple[str, str, int, bool] = ("Maxwell", "orange", 11, True)

def process_documents(documents: tuple[str, ...]): # Means that the tuple contains any number of strings 
...
```

## Optional Typing (| Operator) 

```python
def get_cat_owner(cat: str) -> str | None: 
    if (cat == "Laser"): 
        return "Kat"
    if (cat == "Maxwell"):
        return "Liz"

print(get_cat_owner("Laser")) # Kat
print(get_cat_owner("Garfield")) # None 
```

## Functions 
Callable is the type hint for functions. ```Callable[..., object]``` is the most general type hint for a function, meaning that it's a function that takes any arguments and returns anything. 

```python
def hi_maxwell(num: int) -> str:
    return f"Hi, Maxwell time {num}"

greeting: Callable[int] = hi_maxwell 
```

# Input / Output

## Read from a file 
A "with" block automatically closes file when the block is finished. 

```python
with open("docs/cat.txt") as f:
    cats = f.read()
```

# Importing
In Python **modules** are individual python files. 

```python
from cat_finder import find_cat, cats_found 
```

# sys
```python
import sys
```

## argv (Command Line Arguments)
Returns a list where the first item passed in is the script's name and the rest are arguments 

```bash
python3 my_file.py arg1 arg2
```

```python
print(sys.argv) # ['my_file.py', 'arg1', 'arg2']
```

## exit
Exit program with given code 

```python
sys.exit(1) 
```

# Classes
Objects are instances of a class. Class names should be capitalized while instances of the class should still be snake_case. 

```python
class Rectangle:
    width: float = 4.0 # 
    height: float = 4.0

    def get_area(self) -> float:
        return self.width * self.height

rect = Rectangle()
print(rect.width) # 4.0
print(rect.get_area()) # 16.0  
```

## Self
The first parameter of every method (basically a function inside of a class that has access to the properties inside of the class) is always "self", the instance of the class the method is being called on. Self is automatically passed to methods as the instance that it is being called on (the object before the dot operator (.) when a method is called). 

## Constructors 
```python
class Rectangle:
    def __init__(self, height: float, width: float) -> None: 
        self.height = height
        self.width = width 
        self.is_square = height == width 

rect = Rectangle(4, 4)
print(rect.is_square) # True 
```

## Class vs. Instance Variables
Generally, use instance variables instead of class variables. 

```python
class Rectangle:
    sides = 4 # Class variable 

    def __init__(self, height: float, width: float) -> None: 
        self.height = height # Instance variable
        self.width = width # Instance variable 
        self.is_square = height == width # Instance varaible 

rect = Rectangle(4, 4)
print(rect.is_square) # True 
```

## Private 
By default, all methods and properties in a class are public. Private data members allow you to encapsulate logic and data (hiding the complexity of them so that when using the class you don't have to think about what's happening within the class.) Methods and underscores beginning with two underscores are "private", but really in name only. Outside is still technically possible, just a lot less straightforward.

```python
class Cat:
    def __init__(self, name: str, age: int) -> None:
        self.__name = name
        self.age = age

    def get_name(self) -> str:
        return self.__name

maxwell = Cat("Maxwell", 11)
# print(maxwell.__name) # Throws error
print(maxwell.age) # 11
print(maxwell.get_name()) # Maxwell
```

### Encapsulation

#### Encapsulation vs. Security 
The idea of "public" and "private" data in classes is about encapsulation, ***not*** security. Encapsulation is about organization and ease of use. Like how electric wiring is hidden and organized in walls with easy to use outlets for you to use the electricity with. You can technically ignore the outlets and access all those wires yourself but, just like with encapsulated methods and properties, it's usually a bad idea to do it like that.  

#### Enforcement 
Since Python is so dynamic, it's hard for a compiler to enforce things like encapsulation like they can in other languages like C# or Go. Encapsulation is thus mostly achieved through convention, not force. 

#### Encapsulation vs. Abstraction
Abstraction is for creating a simple interface for complex behavior and focuses on what's actually exposed (the wall outlet in the electricity analogy) while encapsulation is about hiding internal state and "tucking away" the implementation details (the electric wires being hidden and organized within the wall.) While there is a distinction between the two concepts, most of the time you're actually doing both at once. 

# Inheritance
```python
class Pet: 
    def __init__(self, name: str) -> None: 
        self.__name = name 

    def get_name(self) -> str: 
        return self.__name

class Cat(Pet):
    def __init__(self, name: str, whisker_count: int) -> None:
        super().__init__(name)
        self.whisker_count = whisker_count

class Bunny(Pet): 
    def __init__(self, name: str, has_floppy_ears: bool) -> None: 
        super().__init__(name) 
        self.has_floppy_ears = has_floppy_ears
```

# Operator Overloading 

## Dunder Methods
Double underscores ("dunder") around a method name (like __init__) let you customize how built in functions work. 

```python
class Cat: 
    def __init__(self, name: str) -> None: 
        self.name = name 

    def __add__(self, other: "Cat") -> str:
        return f"Super {self.name} {other.name}"

maxwell = Cat("Maxwell") 
laser = Cat("Laser") 
print(maxwell + laser) # Super Maxwell Laser
```

### Operator Method Names
- \_\_add__ +
- \_\_sub__ -
- \_\_mul__ *
- \_\_truediv__ /
- \_\_floordiv__ //
- \_\_pow__ **
- \_\_mod__ %
- \_\_lshift__ <<
- \_\_rshift__ >>
- \_\_and__ &
- \_\_or__ |
- \_\_xor__ ^
- \_\_invert__ ~
- \_\_eq__ ==
- \_\_ne__ !=
- \_\_lt__ <
- \_\_le__ <=
- \_\_gt__ >
- \_\_ge__ >=
- \_\_str__ print()
- \_\_repr__ repr() 

## Method Overloading 
```python
class Cat: 
    def __init__(self, name: str, color: str) -> None: 
        self.name = name 
        self.color = color 

    def __str__(self) -> str: 
        return f"{self.name} the {self.color} cat"

maxwell = Cat("Maxwell", "orange") 
print(maxwell) # Maxwell the orange cat
```

# venv (Virtual Environments) 
Each Python project should have its own virtual environment to keep dependencies separate. 

## uv and venv  
1. Create a uv project 
```bash
$ uv init --no-package --python <python_version> <project_name> 
$ cd <project_name>
```
2. Create a virtual environment at top level of new directory
```bash
$ uv venv
```
3. Activate the virtual environment
```bash
$ source .venv/bin/activate
```
4. Add dependencies
```bash
$ uv add <dependency>==<dependency_version> 
```

# Functional Programming
Functional programming is a programming paradigm (style) where you create functions without changing data in place. It's focused on immutable data and being able to pass around and combine functions as data themselves. Python isn't a great choice for functional programming usually (languages like Haskell, OCaml, and Elixir are better suited for it), but it is possible. 

## Declarative
Functional programming should be declarative when possible, meaning that we want to tell the computer what to do not how to do it, rather than imperative, which is telling computer what to do one step after another. Think CSS instead of Javascript. 

## Expressions over Statements
Expressions are a subset of statements that return a value. They are reuseable and declarative, which means they are preferred in functional programming. 

```python
# Expressions
print(sum([2, 4, 6, 8])) 

# Statements
total = 0
for n in [2, 4, 6, 8]:
    total += n
print(total) 
```

## Ternary 
```python
value_a if condition else value_b

# Non ternary
if (pet == "Maxwell"):
    print ("cat")
else:
    print("other")

# Ternary
print("cat" if pet == "Maxwell" else "other") 
```

## Functions as Values 
In Python functions are values and can be treated like any other value. This means you can use = to assign them to variables and you can use them as arguments and returns for other functions. **First-class** functions are functions that are treated like any other value. **Higher-order** functions are functions that accepts another function as an argument or returns a function. 

```python
def get_cat_title(name: str, color: str) -> str: 
    return f"{name} the {color} cat" 


def get_greeting(get_title, name: str, color: str) -> str: 
    return f"Hello {get_title(name, color)}"

print(get_greeting(get_cat_title, "Maxwell", "orange")) # Hello Maxwell the orange cat
```

### Lambda (Anonymous) Functions
```python
get_cat_color = lambda cat : {
    "Maxwell": "orange",
    "Laser": "black",
}.get(cat, "unknown") 
print(get_cat_color("Maxwell")) # orange
print(get_cat_color("Garfield")) # unknown
```

### Map 
Applies a function to each item in an iterable and returns the resulting transformed values 

```python
cats = ["Maxwell", "Laser"]

print("\n".join(list(map(lambda cat : f"Hello {cat}", cats))))

# Hello Maxwell
# Hello Laser
```

### Filter
Selects and returns only the items in an iterable that satisfy a given condition

```python
cats = [("Maxwell", "orange"), ("Laser", "black"), ("Garfield", "orange")]

print(list(filter(lambda cat : cat[1] == "orange", cats))) # [('Maxwell', 'orange'), ('Garfield', 'orange')]
```

### Reduce
Combines all items in an iterable into a single accumulated result by repeatedly applying a function

```python
import functools

cats = [("Maxwell", 11), ("Laser", 8), ("Garfield", 48)]

def total_age(total: int, curr: tuple[str, int]) -> int:
    return total + curr[1]

print(functools.reduce(total_age, cats, 0)) #67
```

### Zip
Groups corresponding elements from two or more iterables together into tuples, stopping when the shortest iterable is exhausted

```python
cats = ["Maxwell", "Laser"]
colors = ["orange", "black"]

cat_colors = list(zip(cats, colors))

print(cat_colors) # [("Maxwell", "orange"), ("Laser", "black")]
```

#### Unzip

```python
cat_colors = [("Maxwell", "orange"), ("Laser", "black")]

cats, colors = zip(*cat_colors)

print(cats) # ["Maxwell", "Laser"]
print(colors) # ["orange", "black"]
```

## Pure Functions
**Pure functions** are functions that always return the same output for the same inputs and have no side effects. Side effects are any observable effect a function has outside of returning a value. This includes printing to the console, writing to a file, modifying a global variable, changing an object passed into the function, making a network request, updating a database, etc. 

It would be impossible to never write impure functions, but **whenever possible you should try to use pure functions instead of impure functions**. Try to contain impure functions, like i/o, to clear places in your code. 

### No-op (aka NOP or NOOP) 
A **no-op** is a function that does nothing. All functions are pure, impure, or no-ops. 

## Reference vs. Value 
Lists, dictionaries, and sets are passed as references (pointers), while integers, floats, strings, booleans, and **tuples** are passed by value. This means that you need to use copy() to make clean copies of lists, dictionaries, and sets, but can just assign the rest to a new variable to make copies. 

```python
def cat_info(name, info): 
    new_name = name 
    new_name = new_name.upper() 
    
    new_info = info
    new_info.append("angelic")

cat = "Maxwell"
info = ["orange", "tabby", "fat"] 
cat_info(cat, info) 
print(cat) # Maxwell 
print(info) # ['orange', 'tabby', 'fat', 'angelic']
```

### Deep copy nested collections
```python
import copy

cat_groups = [["Maxwell", "Laser"], "Garfield", ["Frederick",  "Walden"]]

cat_groups_shallow = cat_groups.copy()
cat_groups_deep = copy.deepcopy(cat_groups) 

cat_groups_shallow[0].append("Shallow")
cat_groups_deep[0].append("Deep")

print(cat_groups) # [['Maxwell', 'Laser', 'Shallow'], 'Garfield', ['Frederick', 'Walden']]
```

## Memoization 
**Memoization** means caching the results of a computation so that it doesn't need to be computed again in the future. It's used for optimization, but it's a tradeoff between memory and speed, so you should only use it if your function is slow. 

```python
memos = dict() 

def get_name_length(name, memos): 
    new_memos = memos.copy()
    if name in new_memos: 
        print("Memo'ed!")
        return new_memos[name], new_memos
    new_memos[name] = len(name)
    return new_memos[name], new_memos


maxwell = "Maxwell"
laser = "Laser" 
length = 0

length, memos = get_name_length(maxwell, memos) 
print(length) # 7 
length, memos = get_name_length(laser, memos) 
print(length) # 5 
length, memos = get_name_length(maxwell, memos) 
print(length) 
# Memo'ed!
# 7
print(memos) # {'Maxwell': 7, 'Laser': 5}
```

### Referential Transparency
**Referential transparency** means that a function can always be replaced with its resulting value without changing the program's behavior. Since pure functions always return the same output for the same input, they are always referentially pure. Only referentially transparent functions can be safely memoized. 

## Recursion 
Recursion is important in functional programming because it allows you to iterate over lists or other collections without using stateful loops. It's also very useful for looping over trees, since you don't always know how deeply they're nested. Because Python doesn't support tail call optimization, though, it's usually more performant to just use a for loop for regular iterables. 

```python
def total_age(cats: list[tuple[str, int]]) -> int: 
    if len(cats) == 0:
        return 0
    return cats[0][1] + total_age(cats[1:])

cats = [("Maxwell", 11), ("Laser", 8), ("Garfield", 48)]
print(total_age(cats)) # 67
```

## Function Transformations
**Function transformations** are higher-order functions that take one or more function as input and return one or more *new* function. Creating variations of the same functionality dynamically with function transformations can make it a lot easier to share common functionality. 

```python
from collections.abc import Callable

def greeting(name: str) -> str: 
    return f"Hello, {name}"

def cat_title(name, color) -> str: 
    return f"{name} the {color} cat!"

def crow_title(name, size) -> str: 
    return f"{name} the {size} crow!"

def greet_with_title(greeting: Callable[[str], str], title: Callable[[str, str], str]) -> Callable[[str, str], str]: 
    def combine(name: str, adjective: str) -> str: 
        return title(greeting(name), adjective) 

    return combine

cat_greeting = greet_with_title(greeting, cat_title)
crow_greeting = greet_with_title(greeting, crow_title) 

print(cat_greeting("Maxwell", "orange")) # Hello, Maxwell the orange cat!
print(crow_greeting("Horace", "large")) # Hello, Horace the large crow!
```

### Closures 
A **closure** is a function that references variables from outside its own body. The function body and its environment are bundled together into a single entity. Closures basically allow you to save the state of a function at a particular point in time so that you can use and update that state later. 

```python
from collections.abc import Callable

def unique_counter() -> Callable[[str], int]: 
    known_names = set()
    count = 0 

    def checker(name: str) -> int:
        if name not in known_names:
            known_names.add(name)
            nonlocal count
            count += 1
        return count

    return checker

unique_cat_counter: Callable[[str], int] = unique_counter()
print(unique_cat_counter("Maxwell")) # 1
print(unique_cat_counter("Laser"))  # 2 
print(unique_cat_counter("Maxwell")) # 2 
print(unique_cat_counter("Frederick")) # 3 
print(unique_cat_counter("Frederick"))  # 3 
```

#### nonlocal
The `nonlocal` keyword is needed to rebind a variable from an enclosing scope, but when you mutate it. 

```python
def main_function():
    nums = [1, 2, 3]
    name = "1 to 3"

    def helper():
        nums.append(4)
        nonlocal name
        name = "1 to 4" 
```

### Currying
**Function currying** is a kind of function transformation where a single function that accepts multiple arguments is translated into multiple functions that each accept a single argument. Currying is useful when you need a function's signature to conform to a specific "shape" or when you have a general function with several arguments but you repeatedly use it with some of those arguments fixed. 

```python
def multiply(x):
        def multiply_by(y):
            return x * y
        return multiply_by

double = multiply(2)

print(double(5)) # 10
print(multiply(3)(4)) # 12
```

### Decorators 
**Decorators** are syntactic sugar for function transformations using ```@```. ```@``` syntax can be read like: 

```python
@some_decorator
def my_function():
```

Take ```my_function```, give it to ```some_decorator```, and replace ```my_function``` with whatever comes back. 

```python
from collections.abc import Callable

def add_greeting(name: str) -> str: 
    return f"Hello, {name}"

def prepend_name_formatter(greeting: Callable[[str], str]) -> Callable[[Callable[[str, str], str]], Callable[[str, str], str]]: 
    def decorator(title: Callable[[str, str], str]) -> Callable[[str, str], str]: 
        def wrapper(name: str, adjective: str) -> str: 
            return title(greeting(name), adjective)

        return wrapper

    return decorator

@prepend_name_formatter(add_greeting)
def cat_greeting(name: str, color: str) -> str: 
    return f"{name} the {color} cat!"

@prepend_name_formatter(add_greeting) 
def crow_greeting(name: str, size: str) -> str: 
    return f"{name} the {size} crow!" 

print(cat_greeting("Maxwell", "orange")) # Hello, Maxwell the orange cat!
print(crow_greeting("Horace", "large")) # Hello, Horace the large crow!
```

#### Args and Kwargs 
```*args and **kwargs``` let you pass an unspecified number of arguments to a function. ```*args``` collects any number of positional arguments into a tuple so that a function can accept any number of values while ```**kwargs``` collects any number of keyword arguments into a dictionary so that a function can accept any named parameters. Basically:
- *args → "extra positional arguments" → tuple
- **kwargs → "extra keyword arguments" → dictionary

```python
def print_arguments(*args: object, **kwargs: object) -> None: 
    print("*args:")
    for arg in args:
        print(f"  - {arg}")
    print("")
    print("**kwargs:")
    for kwarg in kwargs: 
        print(f"   - {kwarg} : {kwargs[kwarg]}")


print_arguments("Maxwell", "Laser", day = "Monday", temperature = "82 °F", is_true = False)

"""
*args:
  - Maxwell
  - Laser

**kwargs:
   - day : Monday
   - temperature : 82 °F
   - is_true : False
"""
```

#### LRU Cache
```functools.lru_cache``` is an example of memoization and is a decorator. LRU (least recently used) caches store items up to a certain size limit. When it's full it deletes the least recently used items to store new items. The ```lru_cache``` memoizes the inputs and outputs of the decorated function to speed up repeated calls to a slow function (like functions that read from disk, make netwok requests, or require a lot of computation) with the same inputs. 

```python
from functools import lru_cache

@lru_cache()
def get_name_length(name: str) -> int:
    return len(name) 

maxwell = "Maxwell" 
laser = "Laser"

# Running function
print(get_name_length(maxwell)) # 7
print(get_name_length(laser)) # 5

# Pulling from cache 
print(get_name_length(maxwell)) # 7

print(get_name_length.cache_info()) # CacheInfo(hits=1, misses=2, maxsize=128, currsize=2)
```

## Sum Types
(**Important note!** Python doesn't actually support sum types, this is just a workaround!)  
**Sum types** let a value be one of several alternatives. They have a fixed number of possible values while **product types** can have many, often infinite, combinations. 

```python
class Character:
    def __init__(self, name: str) -> None:
        self.name = name

class Fighter(Character): 
    pass

class Thief(Character): 
    pass

class Mage(Character): 
    pass 

def get_starting_weapon(player: Character): 
    if isinstance(player, Fighter): 
        return "a rusty broadsword"
    elif isinstance(player, Thief):
        return "an old dagger"
    elif isinstance(player, Mage):
        return "a cracked magic medallion"
    else: 
        raise ValueError("invalid character type") 

player_character = Fighter("Adam") 
sidekick = Mage("Orko") 
king = Character("Randor")

print(get_starting_weapon(player_character)) # a rusty broadsword
print(get_starting_weapon(sidekick)) # a cracked magic medallion
print(get_starting_weapon(king)) # throws ValueError: invalid character type
```

### Union Types
Instead of using workaround, you can use **union types** for the type hints to describe a value that may be one type or another. Union types in Python are used commonly for optional values (like ```int | None```) and in functional programming for things like making it explicit that will be some value or none or that there will be a result from a function or an error. It's important to remember though that these are really just hints and are not enforced at runtime. 

```python
def get_starting_weapon(player: Fighter | Mage | Thief): 
    if isinstance(player, Fighter): 
        return "a rusty broadsword"
    elif isinstance(player, Thief):
        return "an old dagger"
    elif isinstance(player, Mage):
        return "a cracked magic medallion"
    else: 
        raise ValueError("invalid character type") 

king = Character("Randor")
print(get_starting_weapon(king)) # editor has red squiggly line under "king" and throws ValueError: invalid character type
```

### Enums
**Enums** (enumerations) define a set of named constant values. Enums can be defined using = operator or with a manual class-based system. The class-based system if generally preferred because it creates distinct, strongly based members rather than plain variables, is more readable, and you can customize the behavior better. 

#### Functional API Usage
```python
from enum import Enum

CreativeColor = Enum("CreativeColor", "RED", "ORANGE", "YELLOW", "BLUE", "INDIGO", "VIOLET")

print(CreativeColor.RED) # CreativeColor.RED
print(CreativeColor.GREEN) # AttributeError: type object 'CreativeColor' has no attribute 'GREEN'    
```

#### Manual Class-Based Usage 
```python
from enum import Enum

class CreativeColor(Enum): 
    RED = "red" 
    ORANGE = "orange"
    YELLOW = "yellow"
    BLUE = "blue"
    INDIGO = "indigo"
    VIOLET = "violet"
    
print(CreativeColor.RED) # CreativeColor.RED
print(CreativeColor.GREEN) # AttributeError: type object 'CreativeColor' has no attribute 'GREEN'
```

#### Match Statements 
Python has match statements that are easier to read than a lot of if/elif/else statements and are great for enums. You can also use tuples to match more than one enum. 

```python
from enum import Enum

class Color(Enum):
    ORANGE = 1
    BLACK = 2 

class Size(Enum):
    SKINNY = 1
    CHONKY = 2

def get_cat(color: Color, size: Size): 
    match (color, size): 
        case (Color.ORANGE, Size.SKINNY): 
            return "Murtaugh" 
        case (Color.ORANGE, Size.CHONKY):
            return "Maxwell"
        case (Color.BLACK, Size.SKINNY):
            return "Laser"
        case (Color.BLACK, Size.CHONKY):
            return "Lucifer" 
        
        # Invalid (default) case 
        case _:
            return "Schrödinger"

print(get_cat(Color.ORANGE, Size.CHONKY)) # Maxwell
print(get_cat(Color.GRAY, Size.SKINNY)) # AttributeError: type object 'Color' has no attribute 'GRAY'
```
