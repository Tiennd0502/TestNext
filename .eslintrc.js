module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next", "eslint:recommended", "plugin:jsx-a11y/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jsx-a11y"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "no-undef": "off",
  },
};