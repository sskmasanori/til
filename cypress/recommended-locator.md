## Recommended Locator
---
Locator : key to identity element from view.

```
<button id="main" class="btn btn-large" name="submission" role="button" data-cy="submit">
    Submit
</button>
```
In e2e test with cypress, recommended locator is data-cy to be isolated from all changes.
```
cy.get('[data-cy=submit]').click()
```
<br>
https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements