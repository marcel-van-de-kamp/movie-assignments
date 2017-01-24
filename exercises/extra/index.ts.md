Using index.ts for exporting TypeScript modules
==============================================================

> ## Use an index.ts file to export the exposed classes in the movies folder

**Links**:
- [typescript module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [a module barrel](https://angular.io/docs/ts/latest/guide/glossary.html#!#B)

**Steps**:
- Create an `index.ts` file in the movies feature module folder.
- Re-export the movie model object `export * from ./movie`;
- Do the same for the movie service and movies module.
> you could also do this for the movie detail and list, if you wanted to expose them and exported them in the movies module.
> You can now one import statement to import several interfaces/classes from the movies folder.
- Use a single import statement to import the `Movie` and `MovieService` in the dashboard component.

**Result**:
> We now use a ES6 'barrel' to export several typescript modules as one