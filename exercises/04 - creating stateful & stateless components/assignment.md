Assignment 4: Creating a movie detail component 
==============================================

> ## Create a new reusable component that shows the details of a movie and use it in the app component

**Links**:
- [creating a component](https://angular-2-training-book.rangle.io/handout/components/creating_components.html)
- [input property binding](https://angular-2-training-book.rangle.io/handout/components/app_structure/passing_data_into_components.html)

**Steps**:
- Create a new component in the `movies` folder using the angular-cli generator command `ng g component movies/movie-detail` in the integrated terminal. NB: You can run this command from the root of the project.
  - Double check if the component is imported in the app module and added to the ngModule `declarations` array.
- Notice the `selector` property of the movie-detail component has become `cw-movie-detail`.
- Import the angular `Input` decorator from @angular/core and create an input property `movie` of the type `Movie`.
- Copy the movie detail HTML from the app component template to the movie detail component template.
    - Make sure the property bindings (interpolation) are set to the movie property of the detail component.
- Replace the detail HTML in the app component template with the movie detail component.
  - Use the movie detail component by adding a `<cw-movie-detail>` element.
  - Add a property binding to the element that binds the input property `movie` to the `selectedMovie` of the app component.
  - If you still have the `*ngIf=".."` in the detail component, move it back to the app component HTML and set it on the `cw-movie-detail`. A parent component is responsible for when and if a child is displayed.

**Result**:
> The view will still show the details of the movie, but now via a reusable stateless component.