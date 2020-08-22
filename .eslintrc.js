module.exports = {
  extends: "eslint:recommended",
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    "max-len": ["error", { "code": 100 }]
  },
  overrides: [
    {
      files: [
        "src/**/*.ts",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
          modules: true
        }
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/camelcase": ["error", { properties: "never" }],
        "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-for-of": "error"
      },
    },
    {
      files: [
        "src/**/*.vue",
      ],
      extends: ["plugin:vue/recommended", "@vue/typescript", "prettier", "prettier/vue"],
      plugins: ["simple-import-sort", "no-null"],
      rules: {
        "no-console": "warn",
        "no-debugger": "warn",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "no-null/no-null": "error",
        "no-shadow": "error",
        "no-unused-expressions": "error",
        "no-warning-comments": "warn",
        "prefer-const": "error",
        "simple-import-sort/sort": "error",
        "sort-imports": "off",
        "vue/no-v-html": "off",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/camelcase": ["error", { properties: "never" }],
        "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-for-of": "error"
      },
      parserOptions: {
        parser: "@typescript-eslint/parser",
        // project: "tsconfig.json",
        extraFileExtensions: [".vue"]
      },
    },
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
