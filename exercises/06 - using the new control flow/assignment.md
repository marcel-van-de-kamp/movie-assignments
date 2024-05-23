Assignment 6: Creating a feature module
==============================================

> ## Using the new Angular control flow

**Links**:
- [Angular Control flow](https://angular.io/guide/control_flow)
- [Angular Control flow examples](https://medium.com/@ayushgrwl365/introducing-new-control-flow-in-angular-17-89e67903daed)

**Steps**:
- Generate a movies component for all the movie functionality with the angular-cli command `ng g component movies/movies`.
- Move all movie functionality from the app component to the movies component.
  - Move any movie imports, properties and functions from the app component to the movies component.
  - Move the movie list and detail elements from the app component template to the movies component template.
  - Move the imports of the movie detail, movie list component and ngIf from the app component to the movies component.
  - Import the movies component into the app component and add it to the imports array.
  - Add the movies component `cw-movies` in the HTML template of the app component, to get the application working again.

- From Angular 18+, Angular will work with a new control flow. The new declarative control flow brings the functionality of NgIf, NgFor, and NgSwitch into the framework itself. Please read the documentation to see what the changes are.
- To start with the new control flow, execute the following angular-cli command `ng g @angular/core:control-flow`.
  - 2 questions will be askes, as path the default option`./` is ok and the templates should indeed be reformatted.
- Check what happened and write down the changes for
  - movies.component.ts
  - movies.component.html
  - movie-list.component.ts
  - movie-list.component.html (also notice the `track` option within the for syntax, what does it do?)
- Do you prefer this new syntax? For yes shout 'Yay!!', for no shout 'Boooo!'.

**Result**:
> We now have the same result like we had before, but now using Angular's new control flow and we extracted logic from the app component to a separate movies component.