Assignment 5: Creating a movie list component 
==============================================

> ## Create a new reusable component that shows the list of a movies and use it in the app component

**Links**:
- [Creating a component](https://angular-training-guide.rangle.io/cli/creating-components)
- [Event property binding](https://angular-training-guide.rangle.io/components/app_structure_with_components/responding_to_component_events)
- [component interaction](https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#child-to-parent)
- [Event emitter API](https://angular.io/api/core/EventEmitter)

**Steps**:
- Create a new component in the `movies` folder using the angular-cli generator command `ng g component movies/movie-list` in the integrated terminal. NB: You can run this command from the root of the project.
  - Add this movie-list component to the imports array of the app.component.ts
- Import the angular `Input` and `Output` decorator and the angular `EventEmitter` from @angular/core in the new component.
- Create an input property `movies` with the typing array of `Movie`.
- Create an output property `movieClicked` and assign a new (instance of) EventEmitter to it. Make sure it will emit a Movie with the help of TypeScript (generic).
- Copy the list HTML from the app component to the movie-list template.
- Move the ngFor import from the app component to the movie list component.
- Create a function `onMovieClicked` in the movie-list component which accepts a movie as parameter.
- The click event of the buttons in the `movie-list.component.html` should now be bound to the `onMovieClicked` function of the movie-list component.
- Use the `movieClicked` output property to emit an event and supply the clicked movie as event value.
- Replace the movie list HTML in the app component template with the `<cw-movie-list>` component.
    - Add a property binding to the element that binds the movies from the app component to the input property of the movie list.
    - Rename the function `onMovieClicked` in the app component to `onMovieSelected` and use the parameter to set the `selectedMovie`.
    - Add an event binding to the `movieClicked` event and bind it to `onMovieSelected` in the app component. Don't forget to to supply `$event` as parameter.

**Result**:
> The view will still show the list of movies and will show the details of a clicked movie, but now via a reusable stateless list and detail component.
> The parent component (app component) regulates the communication between the two stateless components.