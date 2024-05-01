Assignment 6: Creating a feature module
==============================================

> ## Using the new Angular control flow

**Links**:
- [Angular Control flow](https://angular.io/guide/control_flow)

**Steps**:
- Generate a movies component for all the movie functionality with the angular-cli command `ng g component movies/movies`.
- Move all movie functionality from the app component to the movies component.
  - Move any movie imports, properties and functions from the app component to the movies component.
  - Move the movie list and detail elements from the app component template to the movies component template.
  - Move the imports of the movie detail, movie list component and ngIf from the app component to the movies component.
  - Import the movies component into the app component and add it to the imports array.
  - Add the movies component cw-movies in the template of the app component, to get the application working again.

- From Angular 18+, Angular will work with a new control flow. The new declarative control flow brings the functionality of NgIf, NgFor, and NgSwitch into the framework itself. Please read the documentation to see what the changes are.
- To start with the new control flow, execute the following angular-cli command `ng g @angular/core:control-flow`.
- Check what happened and write down the changes for
  - movies.component.ts
  - movies.component.html
  - movie-list.component.ts
  - movie-list.component.html

**Result**:
> We now have the same result like we had before, but now using Angular's new control flow and we extracted logic from the app component to a separate movies component.