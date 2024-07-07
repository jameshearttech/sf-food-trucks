import jseslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginJest from 'eslint-plugin-jest';

export default tseslint.config(
    jseslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ['test/**'],
        ...eslintPluginJest.configs['flat/recommended']
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    },
    // This must go last!
    eslintPluginPrettierRecommended
);
