module.exports = {
  "extends": ["airbnb"],
  "plugins": [
    "prettier",
    "jsx-a11y"
  ],
  "rules": {
    "prettier/prettier": "error",
    "jsx-a11y/control-has-associated-label": [ 2, {
      "labelAttributes": ["label"],
      "controlComponents": ["CustomComponent"],
      "ignoreElements": [
        "audio",
        "canvas",
        "embed",
        "input",
        "textarea",
        "tr",
        "video",
      ],
      "ignoreRoles": [
        "grid",
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "row",
        "tablist",
        "toolbar",
        "tree",
        "treegrid",
      ],
      "depth": 3,
    }],
    "react/jsx-fragments": [2, "syntax"],
    "react/jsx-curly-newline": [2, {
      multiline: "consistent",
      singleline: "consistent" 
    }],
    "react/state-in-constructor": [2, "never"],
    "react/static-property-placement": [2],
    "react/jsx-props-no-spreading": [{
      "html": "ignore",
      "custom": "ignore",
      "explicitSpread": "ignore",
  }],
  "linebreak-style": [2, "windows"],
  "semi": [2, "never"]
  }
}