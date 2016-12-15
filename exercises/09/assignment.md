Assignment 9: Routing between components
==============================================

> ## Define two routes for the movies and dashboard component  

**Links**:
- [Why Routing](https://angular-2-training-book.rangle.io/handout/routing/why_routing.html)
- [Configuring Routes](https://angular-2-training-book.rangle.io/handout/routing/config.html)
- [Angular 2 Router intro](http://blog.angular-university.io/angular2-router/)
- [Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)

**Steps**:
- Make sure the `index.html` has added a `<base href="/" >` element in the head (see explanation.md).
- Import the `RouterModule` and `Routes` in the movies module;
- Declare a constant `routes` with the type `Routes` in the movies module;
- Define the `routes` constant as an array with one object literal in it (a Route config object);
  - Set the `path` property of the Route config object to `'movies'`;
  - Set the `component` property of the Route config object to the `MoviesComponent`;
- Declare a variable `routeProviders` in the movies module;
  - Call the function `RouterModule.forChild` with the `routes` and assign the result to the `routeProviders` variable;
- Add the `routeProviders` variable to the `imports` array of the movies module;
> Are you getting a runtime error that ngIf and ngFor are not recognized? Make sure you import the angular common module into the module `imports` array;
* *Repeat the steps above for the dashboard module*;

- Remove the selectors from the movies and dashboard component;
- Remove the movies and dashboard components from the `exports` array in the movies and dashboard module;
- Replace the `cw-movies` and `cw-dashboard` components from the app component template with a `<router-outlet>` component;

> You will now get an error `router-outlet is not a known element`, so please continue with assignment 10 to make the app work again.
