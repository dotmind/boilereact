# .boilereact

**Menu**

* [π» NPM commands](#-npm-commands)
* [πΆπ» Onboarding](#-onboarding)
* [π·ββοΈ How it's work](#-how-its-work])

## π» NPM commands
* `npm start` : The classical, starts the React project

*other commands*
* `npm run build` : Build the React project
* `npm run lint` : Run eslint check
* `npm run lint:fix` : Run an eslint check with the flag --fix (cf.eslint cli), auto-fix commons synthax errors
* `npm run test` : Run the Jest unit tests in watch mode. It allows any actions :
```bash
Watch Usage
 βΊ Press a to run all tests.
 βΊ Press f to run only failed tests.
 βΊ Press q to quit watch mode.
 βΊ Press p to filter by a filename regex pattern.
 βΊ Press t to filter by a test name regex pattern.
 βΊ Press Enter to trigger a test run.
 ```
* `npm run test:coverage` : Run the Jest unit tests and generate a coverage tracking page, a list that details all the testing coverage of the app. It creates a coverage folder at the project root with all the coverage page assets.
* `npm run storybook` : Run the complete UI kit interactive documentation powered by storybook. More info [here](#-storybook)

## πΆπ» Onboarding

### β οΈ What do you need  to know before starting :
This project is based on a CRA (Create React App) typescript bootstrap setup :
- [CRA](https://create-react-app.dev/docs/adding-typescript/)

You will need to have NodeJS install on your machine :
- [Node JS](https://nodejs.org/en/download/)


#### 1οΈβ£ Install packages *(β required)...*
```bash
npm i
```

#### 2οΈβ£ ...and run the server *(β required)*
```bash
npm start
```
π

## π·ββοΈ How it's work

### Stack π
#### Bootstrap
- Create-react-app
#### App State Management
- [react-redux](https://redux.js.org/introduction/getting-started)
- [redux-saga](https://redux-saga.js.org/)
#### HTTP Client
- [axios](https://github.com/axios/axios)

#### Precommit
- [husky](https://typicode.github.io/husky/#/)

### Storybook
The project embarks an exhaustive listing of fragments (eg. basic and scalables components based on the UI kit figma spec), you can play with props of some very scalable fragments like button, and you'll see a real-time render.
The storybook runs on the default 6006 port, eg.localhost:6006.

### Architecture
The project architecture follows a modular feature-oriented architecture.
At the root you can find :
```
    .storybook/ // storybook config files.
    public/ // public assets.
    src/ // the hot topic ! The React project source files.
```
Let's have a deeper look at the `src` folder π

```
assets/
feature/
  components/
    MyFeature.tsx
    MyFeature.module.scss
internal/
  components/
    App.tsx
    App.module.scss
```

### Why there's many branch in this boilerplate ?
Well, the goal is to have as many starter pack as we need to avoid loss of time.
For now, there's two starters, redux-toolkit ready w/ full hook support and redux-saga ready (the good ol' .mind way ! π€ ).

### How about StyleSheet ?
We use Sass with CSS modules β‘οΈ `**/*.module.scss`

### How about StyleSheet ?
What's comming next ?
  - UNIT TESTS with JEST
  - STORYBOOK for UI Documentation
  - More branch with more starter pack

## π Notes & questions

> The first rule about fight club is you don't talk about fight club π
