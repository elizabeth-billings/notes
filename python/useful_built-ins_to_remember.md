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

**Tags:** #python #number-conversion #strings
