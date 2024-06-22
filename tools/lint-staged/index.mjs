// The comma-separate string must not contain spaces (e.g., "*.{js, cjs, mjs}").
export const check = {
    '*.{js,cjs,mjs}': ['eslint', 'prettier --check'],
    '*.{scss,css,json,yaml,yml,html}': ['prettier --check'],
    '*.md': ['remark', 'prettier --check'],
    'package.json': ['syncpack lint']
};
export const fix = {
    '*.{js,cjs,mjs}': ['eslint --fix', 'prettier --write'],
    '*.{scss,css,json,yaml,yml,html}': ['prettier --write'],
    '*.md': ['remark --output', 'prettier --write'],
    'package.json': ['syncpack format', 'syncpack fix-mismatches']
};
