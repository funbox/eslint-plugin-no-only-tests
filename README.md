# @funboxteam/eslint-plugin-no-only-tests

[![npm](https://img.shields.io/npm/v/@funboxteam/eslint-plugin-no-only-tests.svg)](https://www.npmjs.com/package/@funboxteam/eslint-plugin-no-only-tests)

Disallow the use of `describe.only()` and `it.only()`.

[По-русски](./README.ru.md)

## Rationale

When developers fix tests they may make the process easier by filtering tests using method `only` on `it` & `describe`.

However, such filters should not be in the repo when the project is running on CI. 
So, we add this rule to our [ESLint config](https://github.com/funbox/eslint-config) to check the existence of `only` 
in the tests files. And we run linter using precommit-hook, which make it possible to prevent committing 
when `only` does exist in the code.  

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

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
