# venteicher-org
Personal web site

This web site is constructed using:

- Angular 4
- Angular Material 2
- Angular Universal (Server Side rendering to speed up initial page loading)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Start universal server (server side rendering for 1 sec (apx) loading of page)

git clone https://github.com/cventeic/venteicher-org

```
cd venteicher-org
yarn install
yarn run build_all  `Build both normal content (dist) and universal server content (dist-server)`
node server.js
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
