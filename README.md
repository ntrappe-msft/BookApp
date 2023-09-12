# BookApp

### [🚀 Find the App Here](https://ntrappe-msft.github.io/BookApp/)

## Quick Commands

- To install Node.js: `npm install`
- To start up a development server: `npm run dev`
- To run tests: `npx cypress open`

## Developer Space

### Guides

- [Testing Guide: Cypress](https://github.com/ntrappe-msft/BookApp/wiki/Testing-Guide)
- [Style Guide: React](https://github.com/ntrappe-msft/BookApp/wiki/Style-Guide)
- [System Architecture/Design](https://github.com/ntrappe-msft/BookApp/wiki/System-Design)
- [Git Cheatsheet](https://github.com/ntrappe-msft/BookApp/wiki/Git-Cheatsheet)

### Assignments

- Take a look at our [Issues](https://github.com/ntrappe-msft/BookApp/issues) to find something you want to work on
- Each component or piece of architecture is its own Issue
- Each is labeled by priority, contains a mock-up, and has a template
- Assign an Issue to yourself if you'd like to work on it
- Adding tests to `cypress/component` are option but highly recommended

## Getting Started

### Prerequisites

- Install `Node.js` (aka `npm`). I recommend [Homebrew](https://brew.sh) for Mac and [Chocolately](https://community.chocolatey.org/packages/nodejs.install) for Windows.
- [Download Visual Studio Code](https://code.visualstudio.com/download) if you don't already have it

### Step 1: Clone the Repository

- Use the git command to clone the repo to your machine:

```ruby
git clone https://github.com/ntrappe-msft/BookApp.git
```

### Step 2: Install Prettier

- Open Visual Studio Code
- Go to Extensions (`ctrl + shift + X` or `cmd + shift + X`) and search for "Prettier"
- Install it

### Step 3: Configuration

- Open the Command Palette (`ctrl + shift + P` or `cmd + shift + P`)
- Search for "Format on Save" and enable it
- Now, Prettier will auto-format your code when saved

### Step 4: Dependencies

- In the Visual Studio Code terminal, run the following to install Node.js dependencies:

```ruby
npm install
```

- This will create or update a folder called `node_modules/`
- The `.gitignore` file should ensure that `node_modules/` is never committed or pushed to GitHub, however, it's always good practice to double-check which files are being committed each time

### Step 5: Start the Local Server

- In the Visual Studio Code terminal, run the following to start up a development server:

```ruby
npm run dev
```

- It will return a URL, such as `http://localhost:5174`
- You can open _another_ terminal if you want to use that to run commands but leave the terminal hosting the server running

### Step 6: View the Application

- Paste the URL from Step 5 into your browser to see the rendered app
- Open Developer Tools then open the responsive design mode
  - Chrome calls this "Responsive" mode
  - Firefox and Safari call this "Responsive Design Mode"
  - Edge calls this "Device Toolbar"
- Select a mobile device to view the app

## Testing

- Testing is done with Cypress. If you don't know what this is, check out their [Component Testing Guide](https://docs.cypress.io/guides/component-testing/overview)
- All tests verifying components should be added to the folder `cypress/component`. **(This is applicable for most people)**
- All tests verifying control and communication should be added to the folder `cypress/e2e`
- There is an example test in each folder that you can copy.
- If you have questions or doubts, check out our [Testing Guide](https://github.com/ntrappe-msft/BookApp/wiki/Testing-Guide)

### Testing Locally

- Cypress offers testing both via command-line or UI. With the UI, you can actually see what's being tested on the app.
- You need to specify if you're testing component or e2e tests

```javascript
// install dependencies if you haven't already
npm i cypress --save-dev
npm i @types/jest --save-dev
```

```javascript
// run tests via UI
npx cypress open
```

```javascript
// run COMPONENT tests via CLI
npx cypress run --component
npx cypress run --e2e
```

### Testing via GitHub Actions

- Tests will run on _all_ pushes to developer branches (i.e. not `main`)
- You can go into GitHub Actions and re-run any tests manually
