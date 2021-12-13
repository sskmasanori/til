## For Else Directive
2021.12.13

laravel 5.x ~ 8.x

## Before using @forelse
```php
@if ($posts->isNotEmpty())
    @foreach ($posts as $post)
        <span>{{ $post->title }}</span>
    @endforeach
@else
    <p>There are no posts.</p>
@endif
```

## After using @forelse
```php
@forelse ($posts as $post)
    <span>{{ $post->title }}</span>
@empty
    <p>There are no posts.</p>
@endforelse
```
