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

Floats should have leading 0 for readability (0.5 instead of just .5). 
