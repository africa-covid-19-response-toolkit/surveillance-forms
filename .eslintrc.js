module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "jest": true
    },
    "parserOptions": {
      "ecmaVersion": 8
    },
    "extends": [
      "react-app",
      "eslint:recommended",
      // "plugin:react/recommended",
      // "google"
    ],
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
    "plugins": [
        "react"
    ],
    "ignorePatterns": [
      "src/**/*.story.js",
      "src/**/*.test.js",
      "node_modules/"
    ],
    "rules": {
      "react/prop-types": "off",
      "no-eval": "error",
      "import/first": "error",
      "no-console": "warn",
    }
};
