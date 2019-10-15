yarn add -D eslint prettier eslint-config-prettier husky lint-staged

[ ! -f .huskyrc.js ] && touch .huskyrc.js && echo "module.exports = require('./node_modules/eslint-config-warlock/husky')" >> .huskyrc.js

[ ! -f .lintstagedrc.js ] && touch .lintstagedrc.js && echo "module.exports = require('./node_modules/eslint-config-warlock/lintstaged')" >> .lintstagedrc.js

[ ! -f .prettierrc.js ] && touch .prettierrc.js && echo "module.exports = require('./node_modules/eslint-config-warlock/prettier')" >> .prettierrc.js

[ ! -f .eslintrc ] && touch .eslintrc && echo '{\n  "extends": ["warlock"]\n}' >> .eslintrc