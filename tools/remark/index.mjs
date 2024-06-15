import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkLintNoDuplicateHeadings from 'remark-lint-no-duplicate-headings';
import remarkLintNoFileNameIrregularCharacters from 'remark-lint-no-file-name-irregular-characters';
import remarkLintNoUndefinedReferences from 'remark-lint-no-undefined-references';
import remarkLintListItemIndent from 'remark-lint-list-item-indent';
import remarkLintFencedCodeFlag from 'remark-lint-fenced-code-flag';
import remarkValidateLink from 'remark-validate-links';
import remarkToc from 'remark-toc';
import remarkFrontmatter from 'remark-frontmatter';
import remarkPrettier from 'remark-preset-prettier';

export default {
    plugins: [
        // Add presets.
        remarkPresetLintConsistent, // Check that markdown is consistent.
        remarkPresetLintRecommended, // Few recommended rules.
        remarkPresetLintMarkdownStyleGuide,
        // Reconfigure presets.
        [remarkLintNoDuplicateHeadings, false], // Disable.
        [remarkLintNoFileNameIrregularCharacters, false], // Disable.
        [remarkLintNoUndefinedReferences, false], // Disable.
        [remarkLintListItemIndent, 'space'], // Reconfigure to use space.
        // Add rules and transformations.
        [remarkLintFencedCodeFlag], // Warn on code block without language flag.
        [remarkValidateLink], // Warn on invalid links.
        [remarkToc, { heading: 'contents', tight: true }],
        // Others
        remarkFrontmatter, // Parse frontmatter. (---/n ... /n---)
        remarkPrettier // Use prettier for formatting.
    ],
    settings: {
        rule: '-',
        bullet: '-',
        strong: '*',
        emphasis: '_',
        listItemIndent: 'one',
        tightDefinitions: true,
        fences: true
    }
};
