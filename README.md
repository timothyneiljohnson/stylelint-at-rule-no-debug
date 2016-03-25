# stylelint-no-debug

[![Build Status](https://travis-ci.org/timothyneiljohnson/stylelint-no-debug.svg)](https://travis-ci.org/timothyneiljohnson/stylelint-no-debug)

A [stylelint](https://github.com/stylelint/stylelint) custom rule to catch usage of `@debug` statements.

This rule will cause stylelint to warn you whenever `@debug` is used.

## Installation

```
npm install stylelint-property-unknown
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

Add `"stylelint-no-debug"` to your stylelint config `plugins` array, then add `no-debug` to your rules, set to `true`.

As follows:

```js
{
  "plugins": [
    "stylelint-no-debug"
  ],
  "rules": {
    "no-debug": true
  }
};
```
