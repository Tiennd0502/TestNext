module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next", "eslint:recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "no-undef": "off"
  },
};
