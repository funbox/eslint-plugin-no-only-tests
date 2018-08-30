# eslint-plugin-funbox-rules

disallow the use of describe.only() and it.only()

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@funboxteam/eslint-plugin-funbox-rules`:

```
$ npm install @funboxteam/eslint-plugin-funbox-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-funbox-rules` globally.

## Usage

Add `funbox` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@funboxteam/funbox-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@funboxteam/funbox-rules/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
