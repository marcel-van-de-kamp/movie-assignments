uitleg:
- een shared module bevat components die overal in de applicatie hergebruikt worden. De shared module zal meestal geen applicatie brede services providen, omdat deze niet dan singleton zullen zijn.
- uiteraard is er wel een workaround voor dit soort services, via de forroot methode conventie

- We want to be able to reuse the component throughout the application;
- We want to be able to use the spinner on component level, not (only) on app root level;
- therefore we declare it in a shared module that we import in every module that needs it;

[forroot](https://angular-2-training-book.rangle.io/handout/modules/shared-di-tree.html)