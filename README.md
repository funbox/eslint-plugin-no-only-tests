# eslint-plugin-no-only-tests

Disallow the use of describe.only() and it.only().

[По-русски](./README.ru.md)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install the plugin:

```
$ npm install @funboxteam/eslint-plugin-no-only-tests --save-dev
```

## Usage

Add `@funboxteam/eslint-plugin-no-only-tests` to the `plugins` section of your `.eslintrc` configuration file. 
You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@funboxteam/no-only-tests"
    ]
}
```


Then configure the rule under the `rules` section.

```json
{
    "rules": {
        "@funboxteam/no-only-tests/no-only": 2
    }
}
```
