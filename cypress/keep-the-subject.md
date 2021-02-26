## Keep The Subject

```
<form>
  <div>
    <label>name</label>
    <input name="name" />
  </div>
  <button type="submit">Proceed</button>
</form>
```
keep the form as subject
```
cy.get('form') // yields <form>...</form>
  .contains('form', 'Proceed') // yields <form>...</form>
  .submit() // yields <form>...</form>
```
not keep
```
cy.get('form') // yields <form>...</form>
  .contains('Proceed') // yields <button>...</button>
```

[参考]()