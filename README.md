# stylelint-at-rule-no-debug

[![Build Status](https://travis-ci.org/timothyneiljohnson/stylelint-at-rule-no-debug.svg)](https://travis-ci.org/timothyneiljohnson/stylelint-at-rule-no-debug)

A [stylelint](https://github.com/stylelint/stylelint) custom rule to catch usage of `@debug` statements.

This rule will cause stylelint to warn you whenever `@debug` is used.

## Installation

```
npm install stylelint-at-rule-no-debug
```

This plugin is compatible with v5.0.1+.

## Details

```css
a { /* Not OK */
   @debug $blue;
   color: $blue;
}

a { /* OK */
   color: $blue;
}
```

## Usage

Add `"stylelint-at-rule-no-debug"` to your stylelint config `plugins` array, then add `at-rule-no-debug` to your rules, set to `true`.

As follows:

```js
{
  "plugins": [
    "stylelint-at-rule-no-debug"
  ],
  "rules": {
    "at-rule-no-debug": true
  }
};
```
