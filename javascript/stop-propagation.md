# Stop Propagation

2021.12.13

- MDN web docs - [stopPropagation](https://developer.mozilla.org/ja/docs/Web/API/Event/stopPropagation)
- MDN web docs - [stopImmediatePropagation](https://developer.mozilla.org/ja/docs/Web/API/Event/stopImmediatePropagation)

## stopPropagation

When event occurs in html, the event is propagated on parent elements.
So, when we do not have to propagate the event, we have to write this.

```
event.stopPropagation()
```
```
```

## stopImmediatePropagation

When we add some event listeners on same target and event, we can stop other event listener which have not been called.

```
event.stopImmediatePropagation()
```
