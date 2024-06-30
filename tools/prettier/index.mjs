/** @type {import("prettier").Config} */

export default {
    arrowParens: 'avoid',
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    tabWidth: 4,
    semi: true,
    overrides: [
        {
            files: ['*.scss', '*.css', '*.json', '*.yaml', '*.yml', '*.html', '*.md'],
            options: {
                tabWidth: 2
            }
        }
    ]
};
