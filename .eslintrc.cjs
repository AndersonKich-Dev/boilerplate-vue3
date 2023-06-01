/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        'plugin:storybook/recommended',
        '@vue/typescript/recommended',
        'prettier',
        'prettier/vue',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'max-len': [
            'error',
            140,
            4,
            {
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: false,
                ignoreTemplateLiterals: false,
            },
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
    },
};
