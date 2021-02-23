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

const i18n = new VueI18n({
    locale: 'ja',
    messages: require({lang file path : '../../resources/lang/text.json'})
})

new Vue({
    el: ***,
    i18n,
});
```

resources/lang/text.json
```
{
    "ja": {
        "button": {
            "save": "保存",
        },
    },
    "en": {
        "button": {
            "save": "Save",
        },
    },
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
        <button class="***" @click="***">{{ $t("button.save") }}</button>
    </div>
</template>
```

[vue-i18n公式ドキュメント : 言語の切り替え](https://kazupon.github.io/vue-i18n/guide/locale.html)