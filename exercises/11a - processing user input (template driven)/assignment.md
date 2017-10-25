Assignment 11a: Processing user input with a template driven form
==============================================

> ## Extend the movie detail component with a template driven form to capture and submit user input

**Links**:
- [angular forms](https://angular.io/docs/ts/latest/guide/forms.html)
- [ngForm directive](https://angular.io/guide/forms#the-ngform-directive)
- [template model binding](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-model-binding.html)
- [template driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-driven_forms.html)
- [template driven forms fundamentals](https://toddmotto.com/angular-2-forms-template-driven)
- [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)
- *[pipes](https://angular.io/docs/ts/latest/guide/pipes.html)*

**Steps**:
- When using template driven forms and/or the `NgModel` directive, we need to import the `FormsModule` located in `@angular/forms`. Double check this is done in the movie module.
- Encapsulate the input fields and button in the template of the movie detail component with a `<form novalidate>` element.
> Angular will slap an error in your face (actually in the console of the browser), see if you can fix it.
- Add a `name` attribute to all input fields and set a value to it, for example `name="genre"`.
- Add a *template reference variable* `movieForm` to the `form` element and assign the `ngForm` directive to it.
> You are now able to access the form object that angular creates in the template via the `movieForm` variable.
> Check it out and output its value in the template by using the `json` filter/pipe `{{ movieForm.value | json }}`.

> We now have two seperate states to keep track of inside the detail component, but we should let `NgForm` do all the work for us:
- Remove the event bindings from the `ngModel` directives so only the changes to the model are reflected to the view, and not vice versa.
> Notice that the details that are interpolated, i.e. `{{movie.name}}`, are not updated anymore when changing the input.
- Change the type of the save button to `submit` and remove the binding to the `click` event.
- Bind de `ngSubmit` event that is emitted by the `ngForm` directive on the `<form>` element to the `onSaveClicked` function and supply the value of the form as parameter: `onSaveClicked(movieForm.value)`. Add a parameter `value` to the `onSaveClicked` function in the movie detail component.
> If you used the same names in the `name` attributes as the property names of a movie (name, genre, rating), `movieForm.value` will have the same properties as a `Movie`.
- Because we have removed the 'two way binding' to the `movie` property, we need to map/set the values we receive in the `onSaveClicked` function to the `movie` before calling `emit`. So `this.movie.name = value.name` etcetera..

**Extra**:
> Our `movie` model still changes directly when we press the *Escape* key in the `genre` input field.
- Create a template reference variable `#genre` on the genre input element and assign the `ngModel` object to it.
- Use the template reference variable to clear the genre when the *Escape* key is pressed, by accessing the form control that Angular has created for it and calling its `setValue` method: `genre.control.setValue('')`.
> Because we removed the two way binding from the input fields, the form can also can be easily reset because we still have the original data in the `movie` input property.
- Add another button to the form `Reset..`, with `type="button"`.
 bind a `onResetClicked` method to the click event of the button and supply the `movieForm` as parameter.
- In the `onResetClicked` method, call the `resetForm` method on the `movieForm` parameter and supply the `movie` as parameter.


**Result**:
> We now use a ngForm to capture input changes without directly modifying the model, and we are writing the data to the model on submit.
> Next we want to validate the input changes and show validation messages.