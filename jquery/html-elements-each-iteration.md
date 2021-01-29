## Html Elements Each Iteration
---
```
<ul class="list">
    <li>foo</li>
    <li>bar</li>
</ul>

$('.list').each(function(index) {
    console.log(index + ' : ' + $(this).text());
});

$('.list').each(function() {
    console.log($(this).text());
});

$('.list').each(function(index, element) {
    console.log(index + ' : ' + $(element).text());
});
```
```
return false;
```
で抜けれる。false以外の返り値は無視。

[参照](http://js.studio-kingdom.com/jquery/traversing/each)