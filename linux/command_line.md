# Unix Philosophy (by Peter H. Salus, inspired by Doug McIlroy) 
 - Write programs that do one thing and do it well.
 - Write programs to work together.
 - Write programs to handle text streams, because that is a universal interface.

# Terminal 
A **terminal** (or more specifically, a **terminal emulator**) is the program you type commands into and that renders text on your screen.

# Shell
A **shell** runs the commands you enter into terminal or are loaded from a file. They are also referred to as **REPLs**, which stands for Read, Eval (or Evaluate), Print, and Loop. A shell also acts as interpreter for .sh files. 

Some common ones: 
 - **sh** is the Bourne Shell. It was the original Unix shell
 - **bash** is the Bourne Again Shell. It's built on the sh and has a lot more features
 - **zsh** is the Z Shell which is used on MacOS and has a lot more feaures like bash does 

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

## Local
### Creation
No spaces between name, =, and value are mandatory. 

```bash
$ kitty="Maxwell"
$ echo $kitty
Maxwell
```

### Interpolation
```bash
$ kitty="Maxwell"
$ echo Hello, $kitty!
Hello, Maxwell!
```

## Environment 
Available to all programs you run in the shell 

### env 
Use to view all environment variables
```bash
$ env
```

### export 
Creates an environment variable for your current session
```bash
$ export  KITTY="Maxwell" 
```

You can also create an environment variable for just one command instead of your whole session 
```bash
$ KITTY_NAME="Maxwell" bash ./kitty_zodiac_generator.sh
```

### unset
Removes an environment variable from current session 
```bash
$ unset KITTY
```

## PATH
The PATH variable lists the directories that store the commands you have installed, separated by colons. This means instead of having to find where "ls" is when you want to see what's in a directory, you can just type in "ls". 

```bash
$ echo $PATH
```

### Temporarily add to you PATH for session
```bash
$ export PATH="$PATH:/usr/kitties/maxwell" 
```

### Permanently add to you PATH 
Several ways to do this, but common way is to add an "export" statement to you shell configuration file. 

```bash
$ export PATH="$PATH:/absolute/path/to/program"
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

## -l (Long) 
Shows more info than just ls by itself 
```bash
$ ls -l
```

## -a (All)
Shows hidden files
```bash
$ ls -a
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
# cp (Copy)

## Copy a file
```bash
$ cp file_to_copy.txt /destincation_dir
```

## Copy a directory
```bash
$ cp -R /directory_to_copy /destination_dir
```

# Home
Your **home** directory is where your personal files are stored and where you start when you first log into a system. You should typically only do your development work there (such as in a "Workspace" directory in you home directory.) 

## ~ (Home Alias)
```bash
liz/cat_pics/maxwell$ cd ~
liz:~$
```

# grep (Search for text within files) 

## Search for a string
```bash
$ grep "Maxwell" cats.txt 
```

## Search for a string in multiple files 
```bash
$ grep "Maxwell" good_cats.txt best_cats.txt
```

## Search for a string in entire directory 
```bash
$ grep -r "Maxwell" .
```

## Exclude directories
```bash
$ grep -r "Maxwell" . --exclude-dir="DIR_TO_EXCLUDE"
```

# find (Search for files and directories by name) 

## Find a file by name
```bash
$ find . -name "maxwell.txt"
```

## Find all files with a given extension
```bash
$ find . -name "*.txt"
```

## Find file with wildcard 
```bash
$ find . -name "*maxwell*"
```

# which
Gives location of an installed command line program

```bash
$ which sh
/bin/sh 
```

# Run Executeables 
You can run executeables by typing in just their name. If the file is in your current directory, you must include "./". 

```bash
$ ./cat_name_generator.sh 
```

# Shebangs
A **shebang** is a line at the top of scripts that tells the shell what program to use to execute it. This is how shell can automatically run non-compiled executeables (like shell scripts). 

## Format
```bash
#! interpreter [optional-arg]
```

## Python example
```bash
#!/usr/bin/python3
```

# Help
For most published commands, help can be found by using one of the following: 
 - Flags: --help or -help
 - First positional argument: help

```bash
$ ls --help 
```
## man
The full manual can be found with "man"

```bash
$ man ls
```
To search within a manual: 
 - Type "/" followed by what you're searching for.
 - Type "n" to jump to next result.
 - Type "N" to go back a result.

# Flags
Flags are options that modify how a command behaves. 

## Combining Flags
You can combine flags, such as using -l and -a for ls. 
```bash
$ ls -al 
```

## Common conventions
There are no concrete rules, but these conventions are often used: 
 - Single dashes for single character flags (-a, -l)
 - Double dashes for multiple character flags (--help, --reverse)
 - Double dashes and single dash flags can sometimes have the same meaning (-a and --all)

# wc (Word Count) 
Returns the number of lines, words, and bytes in a file  

```bash
$ wc name_ideas.txt
```

## -c 
Returns the number of byes in a file 
```bash
$ wc name_ideas.txt -c
```

## -l 
Returns the number of lines in a file 

## -w 
Returns the number of words in a file 

## -m
Returns the number of characters in a file 

# Exit Codes ( aka Return Codes aka Status Codes) 
Codes returned to cofirm if a program ran succesffully or not. **0** is the code for success and **1** is sort of a catch-all error code. Rarely other codes can be returned instead. 

Exit codes can be used by programs that run other programs, too. For example, if a mailers program runs a separate program for generating PDF files, a 1 code can tell the mailers program that the PDF wasn't generated, so don't send it. 

## $? 
$? stored exit code of last program you ran

```bash
$ echo "hello"
hello
$ echo $?
0
```

# Running multiple commands 
You can run multiple commands using semicolons 

```bash
$ echo "hello" ; echo $?
hello
0
```

## Running multiple commands conditionally
If you only want later commands to run if previous command succeeded, use &&
```bash
$ "hello" && echo $?
bash: hello: command not found                                                                                                                                                 
```

# stdout (Standard Output) 
The default place where programs print output, like print() in python, echo in shell, or console.log() in JS. 

# stderr (Standard Error) 
Like stdout but for errors. By default prints to same place as stdout but they're separate streams so you can redirect them to different places.

# Redirect Streams
You can redirect streams using **>** for stdout and **2>** for stderr. 

```bash
$ echo "Maxwell" > kitty.txt
$ cat kitty.txt
Maxwell
```

```bash
$ cat fake_file.txt 2> error.txt
$ cat error.txt
cat: fake_file.txt: No such file or directory
```

# stdin (Standard In)
The default place where programs read their input, like input() for Python or Console.ReadLine() for C#. 

## Redirecting Input
< redirects a file into a program's stdin. This is different than proving a filepath as an argument where the command opens the file itself. This is instead only sending the contents of the file into the command. 

```bash
$ wc < kitty.txt
```

# Piping
The pipe operator | takes the stdout of the program before it and enters it as the stdin of the program after it. 

```bash
$ echo "Maxwell" | wc -m
7
```

# Symbolic Link (symlink) 
File that points to another file or directory, like a shortcut in a GUI filesystem

## ln (Link)
Creates a link. Use -s to create symbolic links 

```bash
$ ln -s original/path link/path
```
# top 
Shows which programs are using the most resources on computer (basically task manager for the command line!) 

```bash
$ top
```

By default, top sorts by CPU useage decreasing. Press **"M"** while it's running to sort by RAM (memory) decreasing. 

# SIGINT
SIGINT is the signal that is actually sent when you press "Ctrl" + "c" to stop a program or command. It's basically an interruption request, which is different than actually terminating it. 

# ps (Process Status)
Lists the processes running along with their **PIDs** (process IDs). Use with "aux" to show all processes, even those owned by other users, and to show more information. 

```bash
$ ps aux
```

# kill
Used when SIGINT doesn't work. 

```bash
$ kill <pid> 
```
