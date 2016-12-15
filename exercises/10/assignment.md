Assignment 10: Redirecting to another route
==============================================

> ## Set the dashboard component as default route in app component

**Links**:
- [Redirecting to another Route](https://angular-2-training-book.rangle.io/handout/routing/redirects.html)
- [Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)

**Steps**:
- Import the `RouterModule` and `Routes` in the app module;
- Declare a constant `routes` with the type `Routes` in the app module;
- Define the `routes` constant as an array with one object literal in it (a Route config object);
  - Set the `path` property of the Route config object to an empty string `''`;
  - Set the `redirectTo` property of the Route config object to the route `'dashboard'`;
  - Set the `pathMatch` property of the Route config object to `'full'`;
-  Declare a variable `routeProviders` in the app module;
  - Call the function `RouterModule.forRoot` with the `routes` and assign the result to the `routeProviders` variable;
- Add the `routeProviders` variable to the end of the `imports` array of the app module;

**Result**:
> When you now navigate to the empty route `localhost:4000`, the router will automatically redirect to the `dashboard` route.

> You can now navigate to URL `localhost:4000/dashboard` and `localhost:4000/movies` to activate the routes you created.
