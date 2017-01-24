Capturing user input
================================================

*NgModel and change detection*:
- two way binding does not exist anymore in angular2 like it did in angular 1.
- the ngmodel directive has just become syntactically for adding a property and event binding to an input in shorter syntax.
- the ngmodel directive makes sure the correct event is captured based on the input type.
- The two way binding reflects the changes in the user input directly to the bound property of the movie object in the details.
- The rating in the list also changes because it is the same object (reference).
- You could/should decouple this behavior by using immutable objects.
- A big advantages of using immutable objects with angular 2 is an increase in change detection perfomance.

**Links**:
- [angular and immutable objects](http://victorsavkin.com/post/133936129316/angular-immutability-and-encapsulation)
- [immutable objects performance]((https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html)