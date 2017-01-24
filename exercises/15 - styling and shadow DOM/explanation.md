Shadow DOM and Angular
=====================================================

**Component view encapsulation**:
> We can control how encapsulation happens on a per component basis by setting the view encapsulation mode in the component metadata. There are three modes to choose from:
> - *Native* view encapsulation uses the browser's native Shadow DOM implementation to attach a Shadow DOM to the component's host element, and then puts the component view inside that Shadow DOM. The component's styles are included within the Shadow DOM.
> - *Emulated* view encapsulation (the default) emulates the behavior of Shadow DOM by preprocessing (and renaming) the CSS code to effectively scope the CSS to the component's view.
> - *None* means that Angular does no view encapsulation. Angular adds the CSS to the global styles. The scoping rules, isolations, and protections discussed earlier do not apply. This is essentially the same as pasting the component's styles into the HTML.  

> Native view encapsulation only works on browsers that have native support for Shadow DOM. The support is still limited, which is why Emulated view encapsulation is the default mode and recommended in most cases.