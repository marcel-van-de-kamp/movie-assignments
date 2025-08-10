Assignment 6: organizing components
==============================================

> ## organizing components

**Steps**:
- Generate a movies component for all the movie functionality with the angular-cli command `ng g component movies/movies`.
- Move all movie functionality from the app component to the movies component.
  - Move any movie imports, properties and functions from the app component to the movies component.
  - Move the movie list and detail elements from the app component template to the movies component template.
  - Move the imports of the movie detail, movie list component and @if from the app component to the movies component.
  - Import the movies component into the app component and add it to the imports array.
  - Add the movies component `cw-movies` in the HTML template of the app component, to get the application working again.

**Result**:
> We now have the same result like we had before, but we extracted logic from the app component to a separate movies component.