# Vocab
A **terminal** (or more specifically, a **terminal emulator**) is the program you type commands into and that renders text on your screen.

A **shell** runs the commands you enter into terminal or are loaded from a file. They are also referred to as **REPLs**, which stands for Read, Eval (or Evaluate), Print, and Loop. 


# Echo
Prints argument to the terminal screen

```bash
$ echo "Hello, world!"
Hello, world!
```

# Expr
Evaluates simple expressions and performs simple operations 

```bash
$ expr 200 + 30 + 5
235
$ expr length "Maxwell"
7
$ expr "Max" = "well" 
0
```

# whoami
Return your username 

```bash
liz:~$ whoami
liz
```

# Variables

## Creation
No spaces between name, =, and value are mandatory. 

```bash
$ kitty="Maxwell"
$ echo $kitty
Maxwell
```

## Interpolation
```bash
$ kitty="Maxwell"
$ echo Hello, $kitty!
Hello, Maxwell!
```

# History
Prints history of commands that have been executed in current shell session  

```bash
$ kitty="Maxwell"
$ echo Hello, $kitty!
Hello, Maxwell!
$ history
1  kitty="Maxwell"
2  echo Hello, $kitty!
3  history   
```

# clear (Ctrl + L) 
Clear just clears the screen, it doesn't clear history. 

```bash
clear
```

# pwd (Print Working Directory)
Prints the full path of the directory you are currently in 

```bash
liz:~$ pwd
/home/liz
```

# ls (List) 
Lists all files and directories in your current working directory 

```bash
$ ls
cat-pics/ potential_cat_names.txt
$ ls cat-pics/
maxwell.png laser.jpg 
```

# cd (Change Directory) 
```bash
$ ls
cat-pics/ potential_cat_names.txt
$ cd cat-pics/
$ pwd
home/user/cat-pics
$ cd ..
home/user
```

## Absolute Paths
Denote absolute paths by starting them with a forward slash. 

```bash
$ cd /home/user/cat-pics
```

# cat (Concatenate) 
View the contents of files 

```bash
$ cat kitty_names.txt
1. Maxwell
2. Laser
3. Garfield
4. Frederick
```

# head
Prints the first n lines of a file. n defaults to 10 if not specified 

```bash
$ head -n 2 kitty_names.txt
1. Maxwell
2. Laser
```

# head
Prints the last n lines of a file. n defaults to 10 if not specified 

```bash
$ tail -n 2 kitty_names.txt
3. Garfield
4. Frederick
```

# more 
Displays a file one screen at a time and lets you move forward through the document 

# less  
Improvement on more (the joke being it's called less because "less is more") that displays a file one screen at a time but has more navigation features like moving both forward and back, search, and jumping 

Controls:
 - **Spacebar** to move down a page
 - **b** to move up one page
 - **/** to search
 - **q** to quit back to shell prompt

# touch
Create an empty file if it doesn't already exist or updates the timestamps of a file if it already exists. You can create multiple files at once by separating names with a space

```bash
$ touch maxwell.txt laser.txt
```

# mkdir (Make Directory) 
```bash
$ mkdir cat-pics
$ cd cat-pics/
```

# mv (Move)
Moves a file or directory. Can also be used to rename a file 

## Rename a file
```bash
mv old_name.txt new_name.txt
```

## Move a file 
If you're not renaming the file, you can just include the directory you're moving it to. 

```bash
mv maxwell.txt kitties/
```

# rm (Remove)

## Delete a file or empty directory 
```bash
$ ls
cat_names.txt maxwell.png
$ rm cat_names.txt
$ ls
maxwell.png
```

## Delete a directory with all its contents 
```bash
$ ls
cat_names.txt cat-pics/
$ rm -r cat-pics 
$ ls
cat_names.txt
```
