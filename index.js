module.exports = {
  "extends": ["airbnb"],
  "plugins": [
    "prettier",
    "jsx-a11y",
    "import",
    "react",
    "react-hooks"
  ],
  "rules": {
    "semi": [2, "never"],
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "react/require-default-props": 0,
    "arrow-parens": [2, "as-needed"],
    "react/jsx-one-expression-per-line": 0,
    "no-confusing-arrow": 0,
    "react/jsx-props-no-spreading": 0
  },
  "env": {
    "browser": true,
    "es6": true,
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
      },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
}
