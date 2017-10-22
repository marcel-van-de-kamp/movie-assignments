Assignment 14: Multiple feature modules
==============================================

> ## Create another feature module 'dashboard' that shows your favorite movies 

**Links**:
- [¹routing module](https://angular.io/docs/ts/latest/guide/router.html#!#milestone-2-the-routing-module-)
- [angular modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
- [feature modules](https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html)
- [introduction to feature modules](https://johnpapa.net/introducing-angular-modules-feature-modules-2/)

**Steps**:
- Generate a new module with the angular-cli command `ng g module dashboard --routing`.
- Import the dashboard component in the dashboard module and add it to the `declarations` and the `exports` array.
- In the app module, remove the dashboard component import and instead import the dashboard module and add it to the `imports` array.
- Create a function `getFavMovies` in the movie service that only returns your favorite 3 movies via `api/moviesFav`.
- Import the service into the dashboard component and retreive your favorite movies in the `ngOnInit` function.
- Display your favorite movies as a list in the template of the dashboard component with the `ngFor` directive.
> ¹You will have noticed angular-cli has also generated a `dashboard-routing.module.ts` file, that contains some routing logic. 
- Use the routes array in `dashboard-routing.module.ts` to define a route `dashboard` for the dashboard component
- Make sure the `DashboardRoutingModule` imports the result of `RouterModule.forChild(routes)`, exports the `RouterModule` and the `DashboardModule` imports the `DashboardRoutingModule`.
- Extract the 'inline' route in the movies module to its own ¹RoutingModule `movies-routing.module.ts`.

**Result**:
> We now have another feature module, that can be accessed via the url http://localhost:4200/dashboard.
> We have also 'separated concerns' by extracting the routing from the feature module to its own module file,
> because our feature module should only be concerned with providing and exposing features from the module.
