Assignment 13: Routing between views
==============================================

> ## Define a route for the movies component

**Links**:
- [Configuring Routes](https://angular-2-training-book.rangle.io/handout/routing/config.html)
- [Angular 2 Router intro](http://blog.angular-university.io/angular2-router/)
- [Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)

**Steps**:
- Make sure the `index.html` has added a `<base href="/" >` element in the head (see explanation.md).
- Import the `RouterModule` and `Routes` in the movies module.
- Declare a constant `routes` with the type `Routes` in the movies module.
- Define the `routes` constant as an array with one object literal in it (a `Route` config object).
  - Set the `path` property of the Route config object to `'movies'`.
  - Set the `component` property of the Route config object to the `MoviesComponent`.
- Declare a variable `routeProviders` in the movies module.
  - Call the function `RouterModule.forChild` with the `routes` and assign the result to the `routeProviders` variable.
- Add the `routeProviders` variable to the `imports` array of the movies module.
> Are you getting a runtime error that `ngIf` and `ngFor` are not recognized? Make sure you import the angular `CommonModule` into the module `imports` array.

- Remove the selector from the movies component.
- Remove the movies component from the `exports` array in the movies module.
- Replace the `cw-movies` component from the app component template with a `<router-outlet>` component.
> You will now get an error `router-outlet is not a known element`.
- Import the `RouterModule` from `@angular/router` into the app module and add it to the `imports` array to fix the error.


**Result**:
> Now the application will only show the app header on the root url '/', if you navigate to http://localhost:4200/movies you will see the movies again