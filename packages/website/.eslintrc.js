module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@next/next/recommended',
    ],
    plugins: [
        'react',
        'import',
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    rules: {
        'consistent-return': ['off'],
        'no-underscore-dangle': ['off'],
        'no-console': ['warn', {
            allow: ['error', 'warn'],
        }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-void': ['error', { allowAsStatement: true }],
        indent: ['error', 2],
        camelcase: ['error', {
            properties: 'never',
            ignoreDestructuring: false,
            ignoreImports: true,
        }],

        'jsx-a11y/control-has-associated-label': 'off',

        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        '@typescript-eslint/no-unused-expressions': ['error', {
            allowTernary: true,
            allowShortCircuit: true,
        }],

        'react/jsx-indent-props': ['error', 2],
        'react/jsx-indent': ['error', 2],
        'react/prop-types': 0,
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-uses-react': 'off',
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        'react/react-in-jsx-scope': 'off',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/newline-after-import': ['error', { count: 1 }],
        'import/extensions': 'off',
        'import/namespace': 0,
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['sibling', 'index', 'parent'],
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: '@**/**',
                        group: 'internal',
                    },
                    {
                        pattern: '@**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
    },
};
