Assignment 6: Creating a feature module
==============================================

> ## Create a movies feature module and move all movie material to it 

**Links**:
- [Angular Modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
- [Feature Modules](https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html)
- [Modules Explained](http://blog.angular-university.io/angular2-ngmodule/)

**Steps**:
- Generate a new module in the movies folder with the angular-cli command `ng g module movies`.
  - > You will notice angular-cli has also generated a `movies.component`. This component will function as the 'root' component for the movies feature.
- Move all movie functionality to the movies module:
  - Import the movies component into the movies module and add it to the `declarations` and `exports` array.
  - Move the imports of the movie detail and movie list component from the app module to the movies module.
  - Add the components to the `declarations` array.
- Import the movie functionality into the app module:
  - Import the movies module into the app module and add it to the `imports` array.
- Move all movies functionality from the app component to the movies component:
  - Move any movie imports, properties and functions from the app component to the movies component.
  - Move the movie list and detail elements from the app component template to the movies component template.
- Add the movies component `cw-movies` in the template of the app component, to get the application working again.

**Result**:
> We now have a movies feature module that encapsulates all movie specific material.
> Our app (module/component) imports and uses the functionalities provided by the movies module.
