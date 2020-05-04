const aliases = require("./webpack.alias");

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint", //optional: @typescript-eslint/parser can be here but impossible to use with babel-eslint
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["json", "prettier"],
  rules: {
    "import/no-unresolved": 2,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: Object.keys(aliases).map((key) => [key, aliases[key]]),
        extensions: [".ts", ".js", ".jsx", ".tsx", ".json"],
      },
    },
  },
};
