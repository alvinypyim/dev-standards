import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

const ignoredPaths = [
  '**/dist/**',
  '**/node_modules/**',
  '**/coverage/**'
];

const noMagicNumbers = [
  'error',
  {
    ignore: [-1, 0, 1],
    ignoreEnums: true,
    ignoreTypeIndexes: true
  }
];

const functionLength = [
  'error',
  { max: 20, skipBlankLines: true, skipComments: true }
];

const maxLength = [
  'error',
  {
    code: 80,
    tabWidth: 2,
    ignoreUrls: true,
    ignoreRegExpLiterals: true
  }
];

const naming = [
  'error',
  { selector: 'default', format: ['camelCase'] },
  {
    selector: 'variable',
    modifiers: ['const'],
    format: ['camelCase', 'UPPER_CASE']
  },
  { selector: 'typeLike', format: ['PascalCase'] }
];

export default tseslint.config(
  { ignores: ignoredPaths },
  js.configs.recommended,
  ...tseslint.configs.strict,
  prettier,
  {
    rules: {
      curly: ['error', 'multi-or-nest'],
      eqeqeq: 'error',
      complexity: ['error', 10],
      'max-depth': ['error', 3],
      'max-params': ['error', 3],
      'max-len': maxLength,
      'max-lines-per-function': functionLength,
      'no-nested-ternary': 'error',
      'no-else-return': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-magic-numbers': noMagicNumbers,
      '@typescript-eslint/naming-convention': naming
    }
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      'max-lines-per-function': 'off',
      '@typescript-eslint/no-magic-numbers': 'off'
    }
  }
);
