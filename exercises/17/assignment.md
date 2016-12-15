Assignment 17: Processing user input
==============================================

> ## Extend the movie detail component so you can edit the properties of a movie and reflect it back to the model

**Links**:
- [two way binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#two-way)
- [two way binding with ngmodel directive](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel)
- [ngmodel api](https://angular.io/docs/ts/latest/api/forms/index/NgModel-directive.html)
- [user input events](https://angular.io/docs/ts/latest/guide/user-input.html)
- [cloning with object.assign](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- ***[native key event binding](https://www.bennadel.com/blog/3088-native-key-combination-event-binding-support-in-angular-2-beta-17.htm)***


**Steps**:
- Add two input fields of type `text` (name and genre) to the movie-detail component template and one of type `number` (rating)
- The `NgModel` directive is exported from the `FormsModule` located in `@angular/forms`. Add this module to the `imports` array of the movies module
- Use the `ngModel` directive to two way bind the inputs to the name, genre and rating properties of the movie Object
> The `ngModel` directive is exported from the `FormModule` and can be used for 'two way binding' with input elements
- Add the `FormsModule` located in `@angular/forms` to the `imports` array of the movies module
> Test it in the browser and see what happens.  
- *testing testing.. wtf..?*
> Oops, we don't want the changes to directly be reflected in the movie list as well, so we need to decouple its model
- In the movies component, use the `Object.assign` function to set the `selectedMovie` property to a clone of the clicked movie (event)
> As an **extra** functionality, we want to clear the `genre` input when the user presses the escape button
- Add a `keydown` event binding to the `genre` input element and call the `onGenreKeyDown($event)` function with the click event as payload (`$event`) 
- Add a method `onNameKeyDown` to the movie detail component that accepts an event parameter of type `KeyBoardEvent`
  - Use the event to read which `key` has been pressed and clear the movie genre when escape (`event.key === 'Escape'`) is pressed
- *Rewrite the clearing of the `genre` input with the escape key using angular's native key event binding*


**Result**:
> We are now able to reflect the user input to the model and vice versa via two way binding and the ngModel directive
