## Localization With i18n

install [参照](https://kazupon.github.io/vue-i18n/installation.html#direct-download-cdn)
```
npm install vue-i18n
```

app.js
```
import VueI18n from 'vue-i18n';

window.Vue = vue;

Vue.use(VueI18n);

const messages = {
    ja: {
        keyName: require('relateive path to json lang file'),
        keyName2: require('relateive path to json lang file2')
    },
    en: {

    }
}

const i18n = new VueI18n({
    locale: 'ja',
    messages
})

new Vue({
    el: ***,
    i18n,
});
```

json lang file
```
{
    "button": {
        "save": "保存",
    },
    "input": {
        "required": "必ず入力してください",
    }
}
```

sample.vue
```
<template>
    <div>
        ***
        ***
    </div>
    <div class="***">
        <button class="***" @click="***">{{ $t('keyname.button.save') }}</button>
    </div>

    ***
    <input
        class="***"
        type="***"
        :placeholder="$t('keyname.input.required')">
</template>
```

[vue-i18n公式ドキュメント: 言語の切り替え](https://kazupon.github.io/vue-i18n/guide/locale.html)
[qiita: placeholderの多言語設定](https://qiita.com/FumioNonaka/items/138a60f4472ece69c192)