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

## --decorate
--decorate is now automatically applied as of version 2.12.2. Its options are short (the default, just the branch name), full (with the full ref name), or no (none). 

```bash
$ git log --decorate=no
```

## --oneline
Shows a more compact view of the log

```bash
$ git log --oneline
```

## Remote 
You can also use log for remote repos. 

```bash
$ git log <remote_repo>/<branch> 
```

# cat-file
See the contents of a git object (commit or tree). Use **-p** for "pretty print" 

```bash
$ git cat-file -p <commit hash> 
```

## Trees vs. Blobs
Git stores directories with trees and individual files with blobs. 

# Branches
**Branches** are pointers for specific commits. These allow you to keep track of different changes to a project separately. Since they're just pointers, they're "cheap" resource wise. 

## Check what branch you are on
```bash
$ git branch
```

## Rename a branch
```bash
$ git branch -m <old_name> <new_name>
```

### Default names
Git's default is "master" while GitHub's default is "main". 

```bash
$ git config set --global init.defaultBranch main
```

## Create branch
```bash
$ git branch <branch_name>
```

You can instead use switch with -c to create a new branch and switch to it immediately.

```bash
$ git switch -c <branch_name>
```

## Delete branch
```bash
$ git branch -d <branch_name> 
```

## Switch branches
```bash
$ git switch <branch_name>
```

### checkout 
git checkout is the old way to switch branches. You can still use it for restoring a different version of a file, though. 

```bash
$ git checkout <commit> <file_name>

$ git checkout <file_name>
```

# Merge
When you merge two branches, git creates a new commit that has both histories as parents. 

```bash
$ git merge <branch_name>
```

## Fast-forward merge 
If you have main and branch_a and there have been no commits for main since branch_a was created, when you merge branch_a back into main git will automatically just perform a fast forward merge. This means it just has to move the pointer of the main branch to the tip of branch_a. 

## Remote merge
```bash
$ git merge <remote>/<branch_name> 
```

# Rebase
For rebases, git replays the commits for the branch you're checkout out in from the branch you're rebasings for a clean history. This will not affect the branch you're not checked out on. Merge adds an additional commit while rebase does not. 

To use rebase to bring changes from main onto a current branch: 
```bash
$ git rebase main
``` 

# Reset

## Soft
Goes back to a previous commit while keeping all changes. Committed changes are uncommitted and staged, while uncommitted changes remain staged or unstaged like they were before. 

```bash
git reset --soft <commit_hash> 
```

## Hard
--hard makes you working directory and staging area match the given commit exactly. You will lose any local changes. **Be very, very careful with this!!** 

```bash
git reset --hard <commit_hash>
``` 

# Remote 
Other repos are called **remotes**. If you're treating a remote as an "authoritative source of truth" (like Github, GitLab, etc.), you name it the **origin**. 

```bash
$ git remote add <remote_name> <remote_uri> 
```

## Fetch
Brings the remote repo's metadata into our local repo 

```bash
$ git fetch
``` 

## Push
Sends local changes to a remote 

```bash
$ git push origin <branch_name> 
``` 

```bash
$ git push origin <local_branch>:<remote_branch>
```

## Pull
Brings the actual file changes, not just the metadata like fetch 

```bash
$ git pull

$ git pull origin <branch_name> 
```

### Pull Requests 
Pull requests are ways to propose changes to the owner or maintainer of the project you're wanting to contribute to 

# GitIgnore 
.gitignore files list files or folders that are stored in the repo but shouldn't be tracked with Git (like .env files with private keys or node_module directory for JS.) It does not need to be at the root of your project, as you can have multiple .gitignore files nested throughout a single project. 

You can use patterns in addition to exact file paths. Later patterns or files override previous ones 
- **Wildcard (*)** ex. *.txt for all txt files
- **Rooted /** patterns starting with / are anchored to the directory that the gitignore is in. ex. /*.txt for all text files in the same directory as gitignore but not any of the txt files in subdirectories
- **Negation !** Creates exceptions for other patters. ex. !/do_not_ignore.txt
- **Comments #** ex. # This is a comment

## What to Ignore (Generally) 
- Things that can be generated (compiled code, minified files, etc.)
- Dependencies
- Things that are specific only to you and how you like to work (like editor settings)
- Things that are sensitive or dangerous (.env files, passwords, API keys, etc.) 
