# @funboxteam/eslint-plugin-no-only-tests

[![npm](https://img.shields.io/npm/v/@funboxteam/eslint-plugin-no-only-tests.svg)](https://www.npmjs.com/package/@funboxteam/eslint-plugin-no-only-tests)

**eslint-plugin-no-only-tests** — это плагин ESLint, который проверяет наличие в файлах `describe.only()` и `it.only()`, и в случае их обнаружения показывает предупреждение.

## Назначение

Когда разработчик отлаживает тесты локально, он может для упрощения процесса оставить включёнными только те из них, 
которые сломаны. Удобнее всего это делать с помощью метода `only` в `it` и `describe`.

Однако, на CI нужно запускать все тесты. 
Потому мы включаем в нашем [ESLint-конфиге](https://github.com/funbox/eslint-config) этот плагин, и он проверяет, 
не используется ли метод `only` в файлах с тестами. А сам линтер запускаем с помощью прекоммит-хука,
тем самым блокируя возможность коммита в случае наличия `only` в кодовой базе.

## Установка

Для начала необходимо установить [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Далее установить сам плагин:

```
$ npm install @funboxteam/eslint-plugin-no-only-tests --save-dev
```

## Использование

Необходимо добавить `@funboxteam/eslint-plugin-no-only-tests` в раздел `plugins` конфигурационного файла `.eslintrc`.
Можно опустить префикс `eslint-plugin-`:

```json
{
  "plugins": [
    "@funboxteam/no-only-tests"
  ]
}
```

Далее настроить правило в разделе `rules`:


```json
{
  "rules": {
    "@funboxteam/no-only-tests/no-only": 2
  }
}
```

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
