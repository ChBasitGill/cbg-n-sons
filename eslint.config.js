// @ts-check
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const angular = require('angular-eslint')
const prettier = require('eslint-config-prettier')

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'cbg',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'cbg',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // '@angular-eslint/template/alt-text': ['error'],
      // '@angular-eslint/template/attributes-order': ['error'],
      // '@angular-eslint/template/banana-in-box': ['error'],
      // '@angular-eslint/template/button-has-type': ['error'],
      // '@angular-eslint/template/click-events-have-key-events': ['error'],
      // '@angular-eslint/template/conditional-complexity': ['error'],
      // '@angular-eslint/template/cyclomatic-complexity': [
      //   'error',
      //   {
      //     maxComplexity: 1,
      //   },
      // ],
      // '@angular-eslint/template/elements-content': ['error'],
      // '@angular-eslint/template/eqeqeq': ['error'],
      // '@angular-eslint/template/interactive-supports-focus': ['error'],
      // '@angular-eslint/template/label-has-associated-control': ['error'],
      // '@angular-eslint/template/mouse-events-have-key-events': ['error'],
      // '@angular-eslint/template/no-any': ['off'],
      // '@angular-eslint/template/no-autofocus': ['error'],
      // '@angular-eslint/template/no-call-expression': ['error'],
      // '@angular-eslint/template/no-distracting-elements': ['error'],
      // '@angular-eslint/template/no-duplicate-attributes': ['error'],
      // '@angular-eslint/template/no-inline-styles': ['error'],
      // '@angular-eslint/template/no-interpolation-in-attributes': ['error'],
      // '@angular-eslint/template/no-negated-async': ['error'],
      // '@angular-eslint/template/no-positive-tabindex': ['error'],
      // '@angular-eslint/template/prefer-control-flow': ['error'],
      // '@angular-eslint/template/prefer-ngsrc': ['error'],
      // '@angular-eslint/template/prefer-self-closing-tags': ['error'],
      // '@angular-eslint/template/role-has-required-aria': ['error'],
      // '@angular-eslint/template/table-scope': ['error'],
      // '@angular-eslint/template/use-track-by-function': ['error'],
      // '@angular-eslint/template/valid-aria': ['error'],
    },
  },
)
