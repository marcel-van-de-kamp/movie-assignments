Assignment 11b: Processing user input with a model driven form
==============================================

> ## Create a new movie detail component with a model driven form to capture and submit user input 

**Links**:
- [model driven forms handout](https://angular-2-training-book.rangle.io/handout/forms/reactive-forms/reactive-forms.html)
- [model driven forms fundamentals](https://toddmotto.com/angular-2-forms-reactive#ngmodule-and-reactive-forms)
- [formcontrol api](https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html)
- [formgroup api](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)

**Steps**:
- When using model driven forms, the `ReactiveFormsModule` has to be imported into the movies module from `@angular/forms` and added to the imports array.
- Encapsulate the input fields and button in the template of the movie detail component with a `<form novalidate>` element.
- Add a `name` attribute to all input fields and set a value to it, for example `name="genre"`.
- Remove all `ngModel` directives from the template, we don't need 'automagic' template binding in model driven forms.
- To build a model driven form we need the `FormGroup` and `FormControl` classes, import these in the detail component from `@angular/forms`.
- Declare a class property `movieForm` of type `FormGroup` en assign a new `FormGroup` object to it in the`ngOnInit` function.
- Supply an object (literal) to the `FormGroup` as first parameter.
  - For every input field on the form (name, genre, rating), add a property to the object, with the name of the input field as key, and assign a new `FormControl` object as value to it.
  - Supply an initial/default 'value' to each `FormControl` as first parameter. As we are editing an existing movie, the default values should be the values from that movie.
> To synchronize the created `FormGroup` and `FormControl`'s to the template we use the `formGroup` and `formControlName` directives in the template.
- Add a property binding `[formGroup]` to the `form` element in the template and bind it to the `movieForm` object that we created in the component.
- Add a `formControlName` directive to each input field and use the same name you used in the `ngOnInit` function, for example `formControlName="genre"`.
> The `FormGroup` we bind to our root `form` element will store and handle all input and validations of its child controls and groups.
- Add an event binding `(ngSubmit)` to the form element and call `onSaveClicked()`.
- Create the function `onSaveClicked` in the detail component class.
  - Map the properties on the `value` property of our `movieForm` to our `movie` model object to simulate a 'save'.
  > You could use here `Object.assign`, because `value` has the same properties as a `Movie`.

**Result**:
> We now use a FormGroup and FormControls to capture input changes without directly modifying the model, and we are writing the data to the model on submit. We didnt use any bindings (ngModel) to the input fields themselfs.
> Next we want to validate the input changes and show validation messages.