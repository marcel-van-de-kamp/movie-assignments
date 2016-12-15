Assignment 11: Extracting the routes to their own module
==============================================

> ## Extract the routing configuration of each module into it's own module

**Links**:
- [Routing Module](https://angular.io/docs/ts/latest/guide/router.html#!#milestone-2-the-routing-module-)

**Steps**:
- Create a file `movies-routing.module.ts` in the `movies` folder and add an exported class `MoviesRoutingModule`;
- Import `NgModule`, `RouterModule` and `Routes` into the file;
- Decorate the `MoviesRoutingModule` class with the `NgModule` decorator;
- Move the `routes` constant and the route configuration function (`forChild`) from the movies module to the new file;
 - Import the needed `MoviesComponent`;
- Add the `RouterModule` to the `exports` array of the `MoviesRoutingModule`;
- Import the `MoviesRoutingModule` into the movies module and add in to the end of the `imports` array;
- Repeat the above steps for the `dashboard` and the `app` modules by creating the files `dashboard-routing.module.ts` and `app-routing.module.ts`;

**Result**:
> We have 'separated concerns' by extracting the routing from the feature module to its own module file.
> Our feature module should only be concerned with providing and exposing features from the module.