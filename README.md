# BookApp

### Git Cheat Sheet

#### Branches

- Create a new branch: `git checkout -b <new branch name>`

#### Adding Files

- Add all files: `git add .`
- Add files of a type (e.g., c++): `git add *.cpp`
- Add specific files: `git add <path to file>`

#### Committing Files

- Commit files: `git commit -m <commit message>`
- Undo the latest commit: `git reset --soft HEAD~1`
- List the commit IDs _(first is most recent)_: `git log`
- See which files were just committed: `git show <recent commit ID> --name-only`

#### Pushing Files

- Push committed file(s) to a branch: `git push origin <destination branch>`

### Getting Started

- [Download Visual Studio Code](https://code.visualstudio.com/download) if you don't already have it
- Clone this repo: `git clone https://github.com/ntrappe-msft/BookApp.git`
- Go to VS Code > Extensions and install **Prettier**
- Open **Command Palette...** and select `Format on Save` if you want **Prettier** to auto-format your code to appropriate React typescript
- In the terminal, run `npm install`, this should create or update a folder called `node_modules/` in the repo
  - The `.gitignore` should make sure `node_modules/` are never committed nor pushed to GitHub. But to be safe, check which files are committed each time.
- In the terminal, run `npm run dev`
  - This will return a local host like `http://localhost:5174` where you can see `index.md` rendered
  - Paste what it returned in a browser window to host your code
