module.exports = {
    extends: [
        'eslint:recommended',
    ],

    rules: {
        'array-bracket-newline': [
            'error',
            {
                minItems: 1,
            },
        ],
        'array-element-newline': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        indent: [
            'error',
            4,
        ],
        'key-spacing': 'error',
        'object-property-newline': 'error',
        'object-curly-newline': [
            'error',
            {
                minProperties: 1,
            },
        ],
        'no-extra-semi': 'error',
        semi: [
            'error',
            'always',
        ],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'quote-props': [
            'error',
            'as-needed',
        ],
        quotes: [
            'error',
            'single',
        ],
        'no-unused-expressions': 'error',
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'sort-imports': 'error',
        'function-paren-newline': [
            'error',
            {
                minItems: 1,
            },
        ],
        'space-before-function-paren': [
            'error',
            'always',
        ],
        'max-len': [
            'error',
            {
                code: 120,
            },
        ],
    },

    parserOptions: {
        ecmaVersion: 6,
    },
};
