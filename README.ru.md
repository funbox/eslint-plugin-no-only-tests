# eslint-plugin-no-only-tests

**eslint-plugin-no-only-tests** — это плагин ESLint, который проверяет наличие тестов describe.only() и it.only(), и в случае их обнаружения показывает предупреждение.

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

Необходимо добавить `@funbox/eslint-plugin-no-only-tests` в раздел `plugins` конфигурационного файла `.eslintrc`.
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
