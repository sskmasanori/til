# How to Remain Input Old Value

2021.03.19

textエリアにてvalidationで弾かれた際にも、入力値が残るように。
```
<p>
    <label>
        Name
        <input type="text" name="name" maxlength="20" value="{{ old('name') }}" required>
    </label>
</p>
```

textエリアにてvalidationで弾かれた際にも、入力値が残るように。そして、前のデータがあれば反映する。
```
<p>
    <label>
        Name
        <input type="text" name="name" maxlength="20" value="{{ old('name') ?? $product->name }}" required>
    </label>
</p>
```

selectボックスにて、前のデータがあればそれを選択しておく。
```
<p>
    <label>Product
        <select name="product_id">
            @foreach ($allProducts as $product)
                @if ($product->id === old('product_id'))
                    <option value="{{ $product->id }}" selected>{{ $product->name }}</option>
                @elseif (old('product_id') === null && $product->id === $stock->product_id)
                    <option value="{{ $product->id }}" selected>{{ $product->name }}</option>
                @else
                    <option value="{{ $product->id }}">{{ $product->name }}</option>
                @endif
            @endforeach
        </select>
    </label>
</p>
```
