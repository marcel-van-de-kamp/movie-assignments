Assignment 12b: Validating user input with a model driven form
==============================================

> ## Extend the movie detail form with model driven validation and validation messages

**Links**:
- [reactive forms](https://angular.io/guide/reactive-forms)
- [model driven forms handout](https://angular-training-guide.rangle.io/forms/reactive-forms)
- [formcontrol api](https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html)
- [formgroup api](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
- [formbuilder api](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
- [template reference variable](https://angular.io/guide/template-reference-variables)
- [NG14 feature: Stricly typed forms](https://angular.io/guide/typed-forms)

**Steps**:
> Name and genre are required fields and name should have at least 4 characters.
> Validators can be set by adding them as a second (array) parameter to the `FormControl` objects.
- Import the standard angular `Validators` from `@angular/forms`.
- Add a second parameter to the `genre` `FormControl`: this parameters needs an array of validators, we only need 1 at the momoment so add `[Validators.required]`.
- Do the same for the `name`, but also add a second validator `Validators.minLength(4)`.
> Angular will add failed validation rules to the `FormControl` object as an `errors` property.
- Create a new `<span>` element beneath the `name` input field and display an error text in the `<span>`.
 - Add an `*ngIf` directive to the `<span>` and use the `errors` property to check if the `required` rule is present: `movieForm.controls.name.errors?.required`.
 - Extend the `*ngIf` condition with `&& movieForm.controls.name.touched` to make sure the error only appears when the user has 'touched' it.
- Do the same for the genre control and for the `minlength` error of the name control (`errors?.minlength`).
> You can now see the errors in the browser when you delete the characters from the name or genre input.
> Out of the box Angular 2 supplies the required, minlength, maxlength and pattern Validators.
> To validate the min (1) and max (10) for the rating input we need to create a custom Validator. We will do this in an extra assignment.

> Now before submitting to the server, we need to check if the form is valid.
- Use the `movieForm` in the `onSaveClicked` function to check if the form is valid (`movieForm.valid`) before using it's value
- When the form is not valid, show a window alert with an error message.

> When clicking through the movies list, you will notice the movie form inputs are not automatically updated.
> The model is not (two-way) binded to the form so we need to do this 'manually'.
- Import the `OnChanges` interface and the `SimpleChanges` and `SimpleChange` types from `@angular/core`.
- Let the reactive movie detail component implement the `OnChanges` interface AND add the `ngOnChanges` lifecycle hook function.
> The `ngOnChanges` function receives one parameter `changesObject: SimpleChanges`. This object contains al the changed values that are bound from outside the component (properties with `@Input` decorator). The `SimpleChanges` interface cannot tell 'which' properties have changed, you'll have to check for yourself.
- Check if the `SimpleChanges` object contains the `movie:SimpleChange` property (it will if the `movie` is changed).
> The keys on the object correspond to the names of the `@Input` properties, but only if they are actually changed.
-   If the `movie` property on the object has a value, save it to a local variable `value`. You will see the variable is automatically typed as a `SimpleChange`.
- Check if it is the first time the input property is set with the `isFirstChange` property on the `changes.movie` SimpleChange.
- If it is not the first change and the `Movie:SimpleChange` is present, update the form values with the changed `movie` values. Use the `setValue` method of the `movieForm`.

**Extra**:
- Try to do everything in `ngOnChanges` and remove `ngOnInit`
- If the form is not valid, we don't want the user to be able to click the save button.
> Creating `FormGroup`s and `FormControl`s can be simplified by using the angular `FormBuilder` service.
 - Import the `FormBuilder` from `@angular/forms`, inject it into the constructor and store it as a property of the reactive movie detail component class.
 - ¹Rewrite the `FormGroup` and `FormControls` using the `FormBuilder` in `ngOnInit` function.

**Result**:
> We now have a model driven form that validates its input changes and displays error messages
