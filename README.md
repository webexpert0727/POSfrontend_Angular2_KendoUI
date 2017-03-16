# YoiPOS

[Project Management](https://trello.com/b/KZ2fog7X/administrative-portal-ui)

Point-of-Sale front-end administrative portal. 

Stack: 
Angular2 + KendoUI Controls + Font-Awesome + Bootstrap CSS Grid System

## Dependencies
Make sure Angular 2 CLI is installed globally:  
`npm install -g @angular/cli;`

KendoUI Angular 2  
On the project, add the Progress NPM registry:  
`npm login --registry=https://registry.npm.telerik.com/ --scope=@progress`  
Login with the Telerik credentials. Note: user is simply the name before the @ sign from the registered emails address.  

Run `npm install` to install all project dependencies.  

## Style guide
Indentation: Spaces, 4 characters (no tabs)  
Line Length: Max 120 characters, you can keep it at 80 or 100 if you prefer more traditional styling  

[Angular Style Guide](https://angular.io/styleguide)  
Use [Codelyzer](https://www.npmjs.com/package/codelyzer)  
Braces: K&R  

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
