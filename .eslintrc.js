module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier", "airbnb-typescript"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "consistent-return": "off",
        "no-debugger": "off",
        "no-console": "off",
    },
};
