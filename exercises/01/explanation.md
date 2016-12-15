- angular cli heeft voor ons de root component en module gemaakt
- in de module worden een aantal standaard dingen geimporteerd en geregistreerd
- een component bestaat veelal uit een ts/js file (logic), een html file (view), een css file (styling), een optionele spec file (testing)
- in de index.html staat de root component app selector. de index.html is de enige file die de browser initieel nodig heeft.
- common module zitten de structural directives ng-for, ng-if en switch in
- variables or functions that are direclty accesed in the view should be declared public because:
    - TS may force this in the future
    - AoT compilation / offline compilation errors
    - Unit testability
    - http://stackoverflow.com/a/39000046/5182446


links
- ngFor e.d. https://angular-2-training-book.rangle.io/handout/directives/structural_directives.html