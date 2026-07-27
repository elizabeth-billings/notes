# Sources
- [Documentation](https://git-scm.com/docs)
- [Boot.Dev](boot.dev)

# help
```bash
$ git help <command>
```

How to navigate:
- **q** quit manual
- **j** one line down
- **k** one line up
- **d** half page down
- **u** half page up
- **/<term>** search
- **n** next search term
- **N** previous search term

# Config

## Set
```bash
$ git config set --global user.name "<username>" 
$ git config set --global user.email "<email>" 
```

## View 
```bash
$ cat ~/.gitconfig
```

# init 
Create a new git repo 

```bash
$ git init
```

# status
Shows list of files along with their status (untracked, staged, committed) 

```bash
$ git status 
```

# add
You need to **stage** a file (add it to the "index") to start tracking a file 

```bash
$ git add <file> 
```

# commit
After staging you **commit** file(s) so you can have a "snapshot" of the file to return to later if needed. Commits need a message explaining the changes you've made

```bash
$ git commit -m "<descriptive message>"
```

# log
Returns list of commits made in a repo along wih the author, datetime, and message 

Controls: 
- **q** quit
- **arrow keys** scroll 

```bash
git log
```

## Only show n log entries
```bash
$ git log -n <int>
```

## Don't use pager
$ git --no-pager log 

## Commit Hash
A unique identifier for each commit. For convenience, you can just use the first 7 characters to refer to it within Git. They're created using SHA-1, so sometimes commit hashes are also called **SHAs**. 

# cat-file
See the contents of a git object (commit or tree). Use **-p** for "pretty print" 

```bash
$ git cat-file -p <commit hash> 
```

## Trees vs. Blobs
Git stores directories with trees and individual files with blobs. 
