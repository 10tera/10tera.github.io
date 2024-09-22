/** @type {import('eslint').ESLint.ConfigData} */

const config = {
  extends: [
    "plugin:astro/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "react-app",
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "tailwindcss", "unused-imports"],
  ignorePatterns: ["node_modules", "dist"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json",
      },
      rules: {
        // Any型の使用を禁止
        "@typescript-eslint/no-explicit-any": "error",
        // 返り値の省略を許容
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // 型インポートの使用を推奨
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
          },
        ],
        // Switch文の全検査を必須に
        "@typescript-eslint/switch-exhaustiveness-check": "error",
      },
    },
  ],
  rules: {
    "no-undef": "off",
    // console.logが残っていればwarn
    "no-console": [
      "warn",
      {
        allow: ["warn", "info", "error"],
      },
    ],
    // for in, for of, enumの使用は非推奨
    "no-restricted-syntax": [
      "warn",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums",
      },
    ],
    // constの使用を推奨
    "prefer-const": "warn",
    // テンプレートリテラルの使用を推奨
    "prefer-template": "warn",
    // 未使用importの削除を推奨
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
  },
};

module.exports = config;
