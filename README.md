# React Redux Login Form Test Task
A test task for generating login screen with provided PSD template and ReactJS as
required tool.
#### Project uses my own mocked backend
## To perform successful login use credentials: username: 'test', password: '123qwe123'.

[![CircleCI](https://circleci.com/gh/MikeSaprykin/react-redux-test-login-screen.svg?style=svg)](https://circleci.com/gh/MikeSaprykin/react-redux-test-login-screen)
[![codecov](https://codecov.io/gh/MikeSaprykin/react-redux-test-login-screen/branch/master/graph/badge.svg)](https://codecov.io/gh/MikeSaprykin/react-redux-test-login-screen)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/MikeSaprykin/react-redux)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Tools and technologies
> Here is a list of tools and technologies, which were used for this project

* [TypeScript](https://www.typescriptlang.org/) - A primary language. Typed superset of JavaScript
* [ReactJS](https://facebook.github.io/react/) - Primary front-end framework for the project
* [Redux](http://redux.js.org/) - Primary state management pattern
* [Redux-Observable](https://redux-observable.js.org/) - RxJS Based redux middleware for async actions
* [RxJS](http://reactivex.io/rxjs/) - JavaScript reactive extension library
* [Redux-Form](http://redux-form.com/) - Forms bindings to redux
* [Reselect](https://github.com/reactjs/reselect) - Library for efficient store selection
* [React-Router](https://github.com/ReactTraining/react-router) - Routing library for react
* [Redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - fancy and useful browser devtools for redux apps
* [React-Redux-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) - Redux bindings for react router
* [Jest](https://facebook.github.io/jest/) - Core Testing framework
* [Create-React-App](https://github.com/facebookincubator/create-react-app) - CLI tool for React applications
* [NodeJS](https://nodejs.org/en/) - Server to run the application in staging
* [CircleCI](https://circleci.com/) - CI Tool for the project
* [CodeCov](https://codecov.io/gh) - Code Coverage report tool
* [Docker](https://www.docker.com/) - Predictable container for project deployment

## Project Structure
```
.
|-- Dockerfile                                  # Project Dockerfile
|-- README.md                                   # Project README
|-- build                                       # Folder with compiled code
|-- coverage                                    # Code coverage report folder
|-- public                                      # Public static files ( images, css, js )
|-- server.ts                                   # Server configuration file
|-- src                                         # Development files source folder
|   |-- components                              # Reusable dummy components folder
|   |-- containers                              # Pages and bind to store containers folder
|   |-- scss                                    # Sccs variables folder
|   `-- store                                   # Redux store folder
|       `-- auth                                # Auth state folder
|           |-- actions                         # Auth actions
|           |-- epics                           # Auth epics
|           |-- reducers                        # Auth reducers
|           `-- selectors                       # Auth selectors
|-- tsconfig.json                               # Typescript configuration file
|-- tsconfig.test.json                          # Typescript testing configuration file
`-- tslint.json                                 # TsLint configuration file
```

## Scripts overview
Overview of some project script and how to run the project
```bash
    # For development you need to install packages with any tool npm/yarn
    npm i

    # To bundle and minify app in production mode use
    npm run build

    # To build a docker image use ( previous build step is required at first )
    npm run docker:build

    # Run docker container on port 80
    npm run docker

    # To run the app in development mode on dev server run in one termianl
    npm run watch-css # To watch scss assets

    # And in another terminal run
    npm start

    # Run node server with bundled react
    npm run server

    # Run tests with code coverage
    npm run test
    # Run tdd
    npm run tdd
```