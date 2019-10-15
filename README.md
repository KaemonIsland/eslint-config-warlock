# eslint-config-warlock

## Getting Started

Simply download this package as a devDependency with `yarn add -D eslint-config-warlock`.

Once it's downloaded run the command `yarn warlock-config-setup` This will install all of the required devDependencies for ever thing to run correctly. This command will also create eslint/prettier/husky config files if they aren't already present within your project. For now eslint will use the [airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb) until I find that I need to add additional rules.

Husky/lint-staged work together to provide git-hooks. Here are the following hooks/commands that are called:

### pre-commit
* prettier - writes all js/jsx files and adds them to stage
* eslint - lints the staged files and exits if there are any errors

More hooks will be added soon

devDependencies:

* [eslint](https://eslint.org/)
* [eslint-config-prettier](https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier)
* [prettier](https://prettier.io/)
* [husky](https://github.com/typicode/husky)
* [lint-staged](https://github.com/okonet/lint-staged)

## If you already have config files setup

For eslint, simply add `"warlock"` to the extends field.

Husky and Lint-staged config files must be able to import objects. Really just make sure that you import them from `./node_modules/eslint-config-warlock/husky` and `./node_modules/eslint-config-warlock/lintstaged`.

## also

Please let me know what you thing, or if there is any functionality/rules you think should be included!