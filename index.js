module.exports = {
  extends: 'stylelint-config-standard',
  defaultSeverity: 'warning',
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'content',
          'debug',
          'each',
          'else',
          'error',
          'extend',
          'for',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'warn',
          'while',
        ]
      }
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'declaration-block-single-line-max-declarations': 2,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ]
  }
}
