---
sidebar_position: 1
---

# Git Cheat Sheet

[Thank you bilalarslan](http://bilalarslan.me/git-cheat-sheet/)

---

## Set Up
### Show configuration
#### `config --list` **configuration list** 

```bash
git config --list
```

#### `--local` repository configuration

```bash
git config --local --list
```

#### `--global` configuration

```bash
git config --global --list
```

#### `--system` configuration

```bash
git config --system --list
```

### Set configuration
#### `user.name "my name"` who commits
- The name is identifiable for credit when review version history 
- I can also set at `--local` level with a different name

```bash
git config --global user.name "Springer Barry"
```

```bash
git config --local user.name "Barry Springer"
```

#### `user.email "my email"` who connects
- The email address that will be associated with each history marker
- I can also set at local level with a different email (for different remote platform)
- please use the email same as the remote git repo

```bash
git config --global user.email "valid-email@gmail.com"
```

```bash
git config --local user.email "valid-email@yahoo.com"
```

#### `color.ui auto` automatic command line coloring 
- It is useful for easy reviewing

```bash
git config --global color.ui auto
```

#### `core.editor editorName` global editor for commit
- I am not a vi user, and I want to use vscode

```bash
git config --global core.editor "code -wait"
```

- see if it is working

```bash
git config --global -e
```

- if it is still not works as `code command not found`
1. open vscode command palette by `command + shift + p` in vscode
2. input `shell command` to search the command below.
3. then implement `shell command : install 'code' command in path`
4. try again `git config --global -e`

---

## Configuration Files
#### tips for mac user
- **command + shift + .** to show hiddle files and folders
#### Q without A
- what is a good practise of git configuration at the 3 levels and why?

#### `--local` level configuration file
- config file in your local repository's `.git` hiddle folder

```
repository/.git/config
```

#### `--global` level configuration file
- config file in the user directory

```
~/.gitconfig
```

#### `--system` level configuration file
- config file in mac os

```
/etc/.gitconfig
```

---

## Initiation 
#### `clone` from remote Via `SSH`
[Github help me!](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

```bash
git clone ssh://user@domain.com/repo.git
```

#### `init` a new local repository

```bash
git init
```


---

## Local Changes

### read changes

#### `status` of changes

```bash
git status
```

#### `diff` of tracked files

```bash
git diff
```

#### `diff` of a tracked file

```bash
git diff <file>
```

### add to tracked files

#### `add .` all changes

```bash
git add .
```

#### `add -p` parts of a changed file

```bash
git add -p <file>
```

#### `add` only choosen files

```bash
git add <file1> <file2>
```

### commit

#### `commit -m ""` with message

```bash
git commit -m "message of this commit"
```

#### `--amend` last commit message

```bash
git commit --amend -m "new message"
```

### stash
- I want more examples

#### `stash` uncommitted changes

```bash
git stash
```

#### `apply` stashed changes back

```bash
git stash apply
```

#### `list` all stash

```bash
git stash list
```

#### `apply` a particular stash

```bash
git stash apply stash@{stash_number}
```

#### `drop` last stash

```bash
git stash drop
```

---

## Branch Cheat Sheet
[TOWER Git Branch Cheat Sheet](https://www.git-tower.com/learn/cheat-sheets/git-branches)

- not tested yet!
- not tested yet!
- not tested yet!

### Create

```bash
# from HEAD
git branch <new-branch-name>
# from specific commit by hash
git branch <new-branch-name> 2b504bee
```

### Switch

```bash
# new way  
# recommend
git switch <other-branch>
# old way
git checkout <other-branch>
```

### Rename 

```bash
# change current branch
# recommend
git branch -m <new-branch-name>
# change non current branch 
git branch -m <old-branch-name> <new-branch-name>
```

### Publish

```bash
# public a local branch to remote(will create a new branch in remote)
git push -u origin <local-branch>

# to rename a remote branch if you
# delete the old remote branch and create a new remote one
git push origin --delete <old-remote-branch>
git push -u origin <new-name>
```

### Track

```bash
# create a local branch to track a remote one
git branch --track <new-local-branch> orign/<base-remote-branch> 
# or
git checkout --track origin/<base-branch>
```

### Compare

```bash
# compare local
git log <main>..<feature-branch>
# compare remote
git log <origin/main>..<main>
```

### Merge

```bash
# integrate new feature changes into current HEAD
git switch <main>
git merge <feature-branch>
```

### Rebase

```bash
# alternative to merge
# switch to the branch you want to rebase on main
git switch <feature-branch>
git rebase <main>
```

### Delete

```bash
# delete local
git bash -d <branch-name>
# delete remote
git push origin --delete <branch-name>
```

---

## Commit History
- use extention `gitlens` of vscode


---

## Branches & Tags

#### `branch` show all local

```bash
git branch
```

#### `-r` show all remote

```bash
git branch -r
```

#### `-a` show all

```bash
git branch -a
```

---

## Update & Publish

---

## Merge & Rebase

---

## Undo

---

## Git Flow

- todo video
- todo thedo
- todo noted

### Setup Mac

```bash
brew install git-flow-avh
```

### Start

```bash
# defalt init
git flow init -d
# customize init
git flow init
```

### Features

```bash
# create new feature branch based on develop and switch to it
git flow feature start MYFEATURE
```

```bash
# merge MYFEATURE into develop
# removes MYFEATURE branch and switch to develop
git flow feature finish MYFEATURE
```

```bash
# publish MYFEATURE to remote
git flow feature publish MYFEATURE
```

```bash
# get MYFEATURE from remote
git flow feature pull origin MYFEATURE
```

```bash
# track MYFEATURE from remote
git flow feature track MYFEATURE
```

### Release
```bash
git flow release start RELEASE [BASE]
git flow release publish RELEASE
git flow release finish RELEASE
```

### Hotfix

```bash
git flow hotfix start VERSION [BASENAME]
git flow hotfix finish VERSION
```