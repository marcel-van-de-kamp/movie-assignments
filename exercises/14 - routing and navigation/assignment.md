Assignment 14: Navigation links and redirecting to another route
==============================================

> ### Set the dashboard component as default route in app component 
> ### and add navigation links for the movies and dashboard route

**Links**:
- [redirecting to another Route](https://angular-2-training-book.rangle.io/handout/routing/redirects.html)
- [routing and navigation](https://angular.io/docs/ts/latest/guide/router.html)
- [routing links](https://angular-2-training-book.rangle.io/handout/routing/routerlink.html)
- [routerLink directive](https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html)

**Steps**:
- Add a root level RoutingModule to the application `app-routing.module.ts`.
- Define the `routes` constant as an array with one object literal in it (a Route config object);
  - Set the `path` property of the Route config object to an empty string `''`;
  - Set the `redirectTo` property of the Route config object to the route `'dashboard'`;
  - Set the `pathMatch` property of the Route config object to `'full'`;
- Don't forget to import the `AppRoutingModule` in the app module to the ***end*** of the imports array

> We can now add navigation for our routes
- Add a `<nav>` element to the app component template;
- Add an unordered list to the template `<ul>` with two list items `<li>`;
- Insert an anchor element `<a>` to the first `<li>` with the text `Movies`;
 - Add a `routerLink` directive to the anchor element and set its value to `/movies`;
- Repeat the above step for `/dashboard`;

**Result**:
> When you now navigate to the empty route `localhost:4200`, the router will automatically redirect to the `dashboard` route.
> Also, the movies and dashboard components are now accessible via navigation links.
