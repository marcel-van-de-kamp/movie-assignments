Assignment 8: Multiple feature modules
==============================================

> ## Create another feature module 'dashboard' that shows your favorite movies 

- Generate a new module with the angular-cli command `ng g module dashboard`;
  - > You will notice angular-cli has also generated a `dashboard.component`. This component will function as the 'root' for the movies feature;
- Import and declare the dashboard component in the dashboard module and remove it from the app module;
- import the dashboard module into the app module and the `imports` array;
- Change the selector of the dashboard component to `dashboard`;
- Create a function in the movie service that only returns your favorite 3 movies;
- Import the service into the dashboard component and retreive your favorite movies in the `ngOnInit` function;
- display your favorite movies as a list in the template of the dashboard component;
- add the dashboard component to the template of the app component;

> We now have two feature modules, that are both used and displayed on the same page via the app component.
> We actually want to create a seperate dashboard and movies page. We will use Routing to achieve that in the next exercise.

**Links**:
- [Angular Modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
- [Feature Modules](https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html)
