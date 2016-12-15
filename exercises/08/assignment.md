Assignment 8: Multiple feature modules
==============================================

> ## Create another feature module 'dashboard' that shows your favorite movies 

**Links**:
- [Angular Modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
- [Feature Modules](https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html)

**Steps**:
- Generate a new module with the angular-cli command `ng g module dashboard`;
- > You will notice angular-cli has also generated a `dashboard.component`. This component will function as the 'root' for the movies feature;
- Import the dashboard component in the dashboard module and add it to the `declarations` and the `exports` array.
- In the app module import the dashboard module and add it to the `imports` array;
- Create a function `getFavMovies` in the movie service that only returns your favorite 3 movies;
- Import the service into the dashboard component and retreive your favorite movies in the `ngOnInit` function;
- Display your favorite movies as a list in the template of the dashboard component with the `ngFor` directive;
- Add the dashboard component `cw-dashboard` to the template of the app component;

**Result**:
> We now have two feature modules, that are both used and displayed on the same page via the app component.
> We actually want to create a seperate dashboard and movies page. We will use Routing to achieve that in the next exercise.
