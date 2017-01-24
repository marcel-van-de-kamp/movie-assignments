Assignment 7: Retreiving data with a service
==============================================

> ## Create a service that returns/fetches the movie data instead of hardcoding it in the component

**Links**:
- [components & services](https://angular-2-training-book.rangle.io/handout/migrate/ng-metadata/components-and-services.html)
- [services tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)
- [dependency injection](https://angular-2-training-book.rangle.io/handout/di/what_is_di.html)
- [angular dependency injection](https://angular-2-training-book.rangle.io/handout/di/angular2/)
- [angular component lifecycle hooks](https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html)

**Steps**:
- Create a new service in the `movies` folder using the angular-cli command `ng g service movies/movie`.
  - Angular-cli will throw a warning that you must provide the service in order to use it.
  - Provide the new movie service in the `providers` array of the movie module.
- Create a public function `getMovies` in our new movie service which will return the `movies` array as previously defined in our app component.
- Inject the `MovieService` in the constructor of the movie component as a private property `movieService` with the typing `MovieService`.
- Import the `OnInit` interface in the movie component and add the interface to the class declaration.
  - Implement the interface by adding the `ngOnInit` method.
- Retreive the movies in the `ngOnInit` function from the `movieService`, and assign it to our `movies` property.
- Needless to say, remove the hardcoded movies array from the movie component. This array is now fetched with the service.

**Result**:
> The movies will now be retreived from a reusable singleton service. The service is responsible of fetching and returning the requested movies.
> How the service does that is not important to the components that use it.