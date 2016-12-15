Assignment 16: Using view encapsulation and shadow DOM
==============================================

> ## Create a shared module and add a reusable loading component that is used by the movies and dashboard module

**Links**:
- [shared module style guide](https://angular.io/docs/ts/latest/guide/style-guide.html#!#-a-id-04-10-a-shared-feature-module)

**Steps**:
- Generate a new module `shared` with the angular-cli command `ng g module shared`;
- Remove the shared `shared.component .ts|.scss|.html|.spec.ts` files;
- Generate a reusable `loading-container` component with angular-cli `ng g component shared/loading-container`;
  - Double check if the component is added to the `declarations` and `exports` array of the shared module;
- Copy below HTML and CSS to the templates of the component;
- Import the angular Input decorator and add a boolean input property `loading` to the loading-container component
- Add the shared module to the movies module `imports` array;
- Use the `cw-loading-container` component in the movies component template as a wrapper element for the movies list;
- Bind the property `loading` of the container component to a property `moviesLoading` in the movies component
  - Assign the `moviesLoading` prop default to `true`;
  - Set the `moviesLoading` property to `false` as soon as the movies are retreived;
- Add the shared module to the dashboard module `import` array and also use the loading container for the favorite movies;  

**Result**:
> We now have a shared module that exposes reusable components/directives/pipes and can be imported by any module that needs them;


**Material**:  

HTML:  

```html
<pre>
<div [ngSwitch]="loading">
    <div *ngSwitchCase="false">
        <ng-content></ng-content>
    </div>
    <div *ngSwitchCase="true">
        <div class="spinner"></div>
    </div>
</div>
```  

CSS:

```css
.spinner {
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```