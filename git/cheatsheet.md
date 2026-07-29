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
Git config stores data in key / value pairs. Each key also has a section. For example, in the below code 
- user is the **section**
- name is the **key**
- liz is the **value** 

```bash
$ git config set --global user.name "liz"
```

## Locations 
There are several levels to where git is configured and what to what scope the changes affect. If something is set in multiple locations, the most specific value is used. 

- System (for all users on a system): /etc/gitconfig
- Global (for all projects for a single user): ~/.gitconfig
- Local (for a single project): .git/config
- Worktree (for only a part of a single project): .git/config.worktree

## Set
```bash
$ git config set --global user.name "<username>" 
$ git config set --global user.email "<email>" 
```

### append 
Use --append to add new line and not alter any existing values 

### Local
Just omit the "--global" to set something for only the repo you're in. 

## View 
```bash
$ cat ~/.gitconfig
```

### Local
```bash
$ git config list --local
```

### get
```bash
$ git config get <key> 
```

## unset
Removes a config variable 

```bash
$ git config unset <key> 
```

### Duplicates
git config allows duplicate keys, so be careful. You can unset all with --all

```bash
$ git config unset --all <key> 
```

## Remove section
```bash
$ git config remove-section <section>
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


