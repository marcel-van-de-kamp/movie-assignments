Assignment 7: Retreiving data with a service
==============================================

> ## Create a service that returns/fetches the movie data instead of hardcoding it in the component

**Links**:
- [components & services](https://angular-2-training-book.rangle.io/handout/migrate/ng-metadata/components-and-services.html)
- [services tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)
- [angular dependency injection](https://angular-2-training-book.rangle.io/handout/di/)
- [angular component lifecycle hooks](https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html)

**Steps**:
- Create a new service in the `movies` folder using the angular-cli command `ng g service movies/movie`.
  - Angular-cli may throw a warning, but we will ignore that for now.
  - A `movie.service` file is generated with a minimum amount of code: a JavaScript class with an Injector decorator.
- Create a public function `getMovies` in our new movie.service which will return the `movies` array as currently defined in our movie component.
- Add the `MovieService` in the constructor of the movie component as a private property `movieService` with the typing `MovieService`. 
    - By doing this, you are effectively telling the DI framework of Angular to inject an instance of the `MovieService`.
- Import the `OnInit` interface in the movie component and add the interface to the class declaration.
  - Implement the interface by adding the `ngOnInit` method.
- Retreive the movies in the `ngOnInit` function from the `movieService`, and assign it to our private `movies` property.
- Remove the hardcoded movies array from the movie component if you haven't done so yet, as we are now fetching them with the service.
- To actually use the service, we need to tell the Angular DI that it exists. Do this by importing the movie `service` in the movie `module` and adding it to the `providers` array property.

**Result**:
> The movies will now be retreived from a reusable singleton service. The service is responsible of fetching and returning the requested movies.
> How the service does that is not important to the components that use it.