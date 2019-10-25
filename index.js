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
    "prettier/prettier": "error",
    "semi": [2, "never"],
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
  }
}
