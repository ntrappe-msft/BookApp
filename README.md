# BookApp

### Quick Commands

- To install Node.js: `npm install`
- To start up a development server: `npm run dev`
- To run tests: `npm test`

### Getting Started

#### Prerequisites

- [Download Visual Studio Code](https://code.visualstudio.com/download) if you don't already have it

#### Step 1: Clone the Repository

- Use the git command to clone the repo to your machine:

```ruby
git clone https://github.com/ntrappe-msft/BookApp.git
```

#### Step 2: Install Prettier

- Open Visual Studio Code
- Go to Extensions (`ctrl + shift + X` or `cmd + shift + X`) and search for "Prettier"
- Install it

#### Step 3: Configuration

- Open the Command Palette (`ctrl + shift + P` or `cmd + shift + P`)
- Search for "Format on Save" and enable it
- Now, Prettier will auto-format your code when saved

#### Step 4: Dependencies

- In the Visual Studio Code terminal, run the following to install Node.js dependencies:

```ruby
npm install
```

- This will create or update a folder called `node_modules/`
- The `.gitignore` file should ensure that `node_modules/` is never committed or pushed to GitHub, however, it's always good practice to double-check which files are being committed each time

#### Step 5: Start the Local Server

- In the Visual Studio Code terminal, run the following to start up a development server:

```ruby
npm run dev
```

- It will return a URL, such as `http://localhost:5174`
- You can open _another_ terminal if you want to use that to run commands but leave the terminal hosting the server running

#### Step 6: View the Application

- Paste the URL from Step 5 into your browser to see the rendered app
- Open Developer Tools then open the responsive design mode
  - Chrome calls this "Responsive" mode
  - Firefox and Safari call this "Responsive Design Mode"
  - Edge calls this "Device Toolbar"
- Select a mobile device to view the app

### Git Cheat Sheet

#### Branches

- Create a new branch: `git checkout -b <new branch name>`

#### Adding Files

- Add all files: `git add .`
- Add files of a type (e.g., c++): `git add *.cpp`
- Add specific files: `git add <path to file>`
- See which files you've added: `git status`

#### Committing Files

- Commit files: `git commit -m <commit message>`
- Undo the latest commit: `git reset --soft HEAD~1`
- List the commit IDs _(first is most recent)_: `git log`
- See which files were just committed: `git show <recent commit ID> --name-only`

#### Pushing Files

- Push committed file(s) to a branch: `git push origin <destination branch>`

#### Managing Changes

- Reset branch to most recent commit: `git reset --hard HEAD`
- Pull the latest changes: `git pull origin <branch-name>`
- Save your changes: `git stash`
