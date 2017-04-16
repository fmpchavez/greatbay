# greatbay
In class assignment creating an 'ebay like' node app

## First things First
	I forgot to create the remote repo before actually starting this 
    assignment so here's the instructions to convert a local repo to a remote one:

1. Go to local directory
   Run `git init`
2. Add files to local repo
   `git add .`
3. Commit files
   `git commit -m "first commit"
4. Grab the URL from the remote repo on GitHub
   `git remote add origin [remote repo URL]`
   `git remote -v`

After writing the bidAuction function I ran into this error:
```
(node:15411) UnhandledPromiseRejectionWarning: Unhandled promise rejection 
(rejection id: 1): TypeError: Cannot read property 'type' of undefined

```
I googled it and tried this:

`$ node --version` returned with `v6.9.1`

