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

### Booleans 
```python
is_maxwell_orange = True
is_maxwell_purple = False
```

Floats should have leading 0 for readability (0.5 instead of just .5). 

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
