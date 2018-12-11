Assignment 7: Retreiving data with a service
==============================================

> ## Create a service that returns/fetches the movie data instead of hardcoding it in the component

**Links**:
- [components & services](https://angular-2-training-book.rangle.io/handout/migrate/ng-metadata/components-and-services.html)
- [services tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)
- [angular dependency injection](https://angular-2-training-book.rangle.io/handout/di/)
- [angular component lifecycle hooks](https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html)
- [Providing services](https://angular.io/guide/architecture-services#providing-services)

**Steps**:
- Create a new service in the `movies` folder using the angular-cli command `ng g service movies/movie`.
  - Angular-cli may throw a warning, but we will ignore that for now.
  - A `movie.service` file is generated with a minimum amount of code: a JavaScript class with an Injector decorator.
- Create a public function `getMovies` in our new `movie.service` which will return the `movies` array as currently defined in our movie component, in other words, move the hardcoded movies array from the `movies.component` to the `MovieService.getMovies`.
- Add the `MovieService` in the constructor of the movies component as a private property `movieService` with the typing `MovieService`. 
    - By doing this, you are effectively telling the DI framework of Angular to inject an instance of the `MovieService`.
- Notice the `OnInit` interface in the movies component which has been implemented onto the class declaration.
- Retreive the movies in the `ngOnInit` function from the `movieService`, and assign it to our public `movies` property.
- Remove the hardcoded movies array from the movie component if you haven't done so yet, as we are now fetching them with the service.
- To actually use the service, we need to tell the Angular DI that it exists by providing it. By default, the Angular CLI command `ng g service movies/movie` registers a provider with the root injector for our service by including provider metadata in the @Injectable() decorator. Angular will create a single, shared instance of MovieService and injects it into any class that asks for it. So we're all set.

**Result**:
> The movies will now be retreived from a reusable singleton service. The service is responsible of fetching and returning the requested movies.
> How the service does that is not important to the components that use it.