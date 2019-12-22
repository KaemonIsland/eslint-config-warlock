# eslint-config-warlock

## Opinions

Eslint should be used to prevent coding errors while writing code before they become in production. This set of rules are set with the mindset of finding errors, not yelling at you when something should go on a new line.

For right now, I'm going with most of the recommended settings. They will be changed as-needed in future versions.

## Getting Started

Simply download this package as a devDependency with `yarn add -D eslint-config-warlock`. Then add "warlock" to "extends" within a `.eslintrc` file. It should look like this:

```javascript
{
  "extends": ["warlock"]
}
```

## If you already have config files setup

For eslint, simply add `"warlock"` to the extends field.

Husky and Lint-staged config files must be able to import objects. Really just make sure that you import them from `./node_modules/eslint-config-warlock/husky` and `./node_modules/eslint-config-warlock/lintstaged`.

## also

Please let me know what you thing, or if there is any functionality/rules you think should be included!
