# Built-Ins

## `int(string, base)`

**What it does:** Converts a string representation of a number in a given base to an integer.

**Signature:** `int(x: str, base: int) -> int`

**Example:**

```python
int("100", 2)   # 4   (binary)
int("ff", 16)   # 255 (hex)
int("17", 8)    # 15  (octal)
```

**When I'd reach for this:** Parsing binary/hex strings from data migrations, config files, or user input.

**Gotchas:**
- Base must match the string's format, or you'll get a `ValueError`.
- Works for any base from 2 to 36, not just the common ones.

**Related:** `bin()`, `hex()`, `oct()` do the reverse (`int` -> `str`).

# str

## `startswith(prefix[, start[, end]])`

**What it does:** Checks whether a string starts with a specified prefix or any prefix in a tuple of prefixes 

**Signature:** `str.startswith(prefix: str | tuple[str, ...], start: int = 0, end: int = len(s)) -> bool`

**Example:**

```python
"Maxwell".startswith("Max") # True
"Maxwell".startswith("well") # False
```

**When I'd reach for this:** Validating file names, checking URL schemes (https://), filtering records by prefixes, parsing structured text, or quickly determining string categories.

**Gotchas:**
- It's case-sensitive by default!
- The optional start and end can be used to limit the portion of the string being checked (good for algo practice then?) 

**Related:** str.endswith(), in, regex (re.match()), string slicing (s[:n] == prefix).
