module.exports = {
  plugins: ["jsx-a11y", "import", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],
  rules: {
    // ESLINT

    // Warn on use of console
    "no-console": 1,

    // allow empty block statements
    "no-empty": 0,

    // React-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    es2020: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  }
};
