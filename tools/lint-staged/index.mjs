export default {
    // The comma-separate string must not contain spaces (e.g., "*.{js, cjs, mjs}").
    '*.{js,cjs,mjs}': ['eslint', 'prettier --check'],
    '*.{scss,css,json,yaml,yml,html}': ['prettier --check'],
    '*.md': ['remark', 'prettier --check']
};
