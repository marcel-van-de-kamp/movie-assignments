Angular components with angular-cli
================================================================

- Angular cli has already created the root component and module for us.
- A number of standard things are imported and registered in the root module.
  - The common module contains the structural directives ng-for, ng-if en switch
- A component exists of a ts/js file (logic), a html file (view), a css file (styling) and an optional spec file (testing).
- In the `index.html` the root component is used. The `index.html` is the only file the browser needs to initialize the app.
- Variables or functions that are direclty accesed in the view should be declared public because:
    - TS may force this in the future
    - AoT compilation / offline compilation errors
    - Unit testability
    - http://stackoverflow.com/a/39000046/5182446