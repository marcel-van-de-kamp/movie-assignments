Assignment 11: Validating user input with a model driven form
==============================================

> ## Extend the movie detail form with model driven validation and validation messages

**Links**:
- [model driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/reactive-forms/reactive-forms.html)
- [model driven forms fundamentals](https://toddmotto.com/angular-2-forms-reactive#ngmodule-and-reactive-forms)
- [formcontrol api](https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html)
- [javascript property accessors](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [formgroup api](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
- ¹[formbuilder api](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
- ²[template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)
- ³[pipes](https://angular.io/docs/ts/latest/guide/pipes.html)

**Steps**:
> Name and genre are required fields and name should have at least 4 characters.
> Validators can be set by adding them as a second (array) parameter to the `FormControl` objects.
- Import the standard angular `Validators` from `@angular/forms`.
- Add a second parameter to the genre `FormControl`: an Array with `Validators.required` validator function as array item.
- Do the same for the name `FormControl`, but also add a second validator `Validators.minLength(4)`, which will return a validator function.
> Angular will add failed validation rules to the `FormControl` object as an `errors` property.
- Create a new `<span>` element beneath the `name` input field and display an error text in the `<span>`.
 - Add an `*ngIf` directive to the `<span>` and use the 'errors' property to check if the 'required' rule is present: `movieForm.controls.name.errors?.required`.
 - Extend the `*ngIf` condition with `&& movieForm.controls.name.touched` to make sure the error only appears when the user has 'touched' it.
- Do the same for the genre control and for the `minlength` error of the name control.
> You can now see the errors in the browser when you delete the characters from the name or genre input.
> Out of the box Angular 2 supplies the required, minlength, maxlength and pattern Validators.
> To validate the min (1) and max (10) for the rating input we need to create a custom Validator. We will do this in an extra assignment.

> Creating `FormGroup`s and `FormControl`s can be simplified by using the angular `FormBuilder` service.
- Import the `FormBuilder` from `@angular/forms`, inject it into the constructor and store it as a class property.
- ¹Rewrite the `FormGroup` and `FormControls` using the `FormBuilder` in `ngOnInit` function.

> Now before submitting to the server, we need to check if the form is valid.
- Use the `movieForm` in the `onSubmit` function to check if the form is valid (`movieForm.valid`) before using it's value.

> When clicking through the movies list, you will notice the movie form is not automatically updated.
> The model is not (two-way) binded to the form so we need to do this mannually.
- Import the `OnChanges` interface and the `SimpleChanges` and `SimpleChange` types from `@angular/core`.
- Let the movie detail component implement the `OnChanges` interface by adding the `ngOnChanges` lifecycle hook function.
> The only parameter for this function is of a 'key: `SimpleChange`' type. This means it is not explicitly known which keys are on the object but their value must be of type `SimpleChange`.  
- First check if the `SimpleChanges` object contains the `movie` property (if the movie is changed), ²use the bracket notation to access the movie property on the object
> The keys on the object correspond to the names of the `@Input` properties, but only if they are actually changed.
- If the `movie` property on the object has a value, save it to a local variable. You will see the variable is automatically typed as a `SimpleChange`.
- Check if it is the first time the input property is set with the `isFirstChange()` function on the variable.
- If it is not the first time, update the form values with the changed `movie` values:
    - Create a private function `updateFormValues`.
    - Use the `setValue` function on the `movieForm` to copy the name, genre and rating of the new movie model to the form.

**Extra**:
- If the form is not valid, we don't want the user to be able to click the save button.
- ³Use the json pipe to print the value and errors object on the screen. This can be handy when debugging.

**Result**:
> We now have a model driven form that validates its input changes and displays error messages
