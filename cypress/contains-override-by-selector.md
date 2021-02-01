## Contains Override By Selector
---
```
<html>
  <body>
    <ul data-cy=fruit-list>
      <li>apples</li>
      <li>oranges</li>
      <li>bananas</li>
    </ul>
  </body>
</html>
```
```
// yields <ul>...</ul>
cy.contains('ul', 'apples')
cy.contains('[data-cy=fruit-list]', 'apples')
```

> Technically(理論上では、建前としては) the html, body, ul, and first li in the example below all contain “apples”. Normally Cypress would return the first li since that is the deepest element that contains “apples”. To override the element that is yielded we can pass 'ul' or '[data-cy=fruit-list]' as the selector.


[参考](https://docs.cypress.io/api/commands/contains.html#Selector)