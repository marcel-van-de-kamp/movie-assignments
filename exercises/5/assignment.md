Assignment 5: Creating a movie list component 
==============================================

## Create a new reusable component that shows the list of a movies and use it in the app component

- Create a new component in the `movies` folder using the angular-cli generator command `ng g component movies/movie-list` in the integrated terminal;
  - Double check if the component is imported in the app module and added to the ngModule `declarations` array;
- Change the `selector` property of the movie-list component to `movie-list`;
- Import the angular `Input` and `Output` decorator and the angular `EventEmitter`;
- Create an input property `movies` with the typing array of `Movie`;
- Create an output property `movieClicked` and assign a new (instance of) EventEmitter to it;
- Copy the list HTML from the app component to the movie-list template;
- Create a function in the movie-list component `onMovieClicked` that accepts a movie as parameter;
- Make sure the click event on the button in the template of the `movie-list` is bound to the `onMovieClicked` function;
- Use the `movieClicked` output property to emit an event and supply the clicked movie as event value;
- Replace the movie list HTML in the app component template with the `<movie-list>` component;
    - Add a property binding to the element that binds the movies from the app component to the input property of the movie list;
    - Add an event binding to the `movieClicked` event and bind it to the function `onMovieSelected` in the app component;
        - Rename the function `onMovieClicked` in the app component to `onMovieSelected` and use the event value to set the `selectedMovie`;

The view will still show the list of movies will show the details of a clicked movie, but now via a reusable stateless list and detail component.  
The parent component (app component) regulates the communication between the two stateless components.

**Links**:
- [creating a component](https://angular-2-training-book.rangle.io/handout/components/creating_components.html)
- [event property binding](https://angular-2-training-book.rangle.io/handout/components/app_structure/responding_to_component_events.html)