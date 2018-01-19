Assignment 6: Creating a feature module
==============================================

> ## Create a movies feature module and move all movie material to it 

**Links**:
- [Angular Modules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
- [Feature Modules](https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html)
- [Modules Explained](http://blog.angular-university.io/angular2-ngmodule/)

**Steps**:
- Generate a new module in the movies folder with the angular-cli command `ng g module movies`.
- Generate a root component for the module with the angular-cli command `ng g component movies`.
  - > Check if angular-cli has automatically added the movies component to the `declarations` array of the movies module.
- Move all movie functionality to the movies module:
  - Besides the `declarations` array, also add the movies component to the `exports` array property of the movie module.
  - Move the imports of the movie detail and movie list component from the app module to the movies module.
  - Add the two components to the `declarations` array.
- Import the movie functionality into the app module:
  - Import the movies module into the app module and add it to the `imports` array.
- Move all movies functionality from the app component to the movies component:
  - Move any movie imports, properties and functions from the app component to the movies component.
  - Move the movie list and detail elements from the app component template to the movies component template.
- Add the movies component `cw-movies` in the template of the app component, to get the application working again.
> NB: Sometimes angular-cli's watcher must be restarted with `Ctrl-C` and `ng serve` to get everything working again.

**Result**:
> We now have a movies feature module that encapsulates all movie specific material.
> Our app (module/component) imports and uses the functionalities provided by the movies module.
> Our app does not know any movie specifics anymore, we are free to also add serie, music and game modules in the future if we want. We are also able to copy / move all movie functionality to another angular app.
