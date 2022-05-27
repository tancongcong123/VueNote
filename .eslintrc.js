module.exports = {
    root: true,
    env: {
      node: true
    },
    parserOptions: {
      ecmaVersion: 6,
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    overrides: [
        {
          files: ['src/pages/**/*.vue'],
          rules: {
            'vue/multi-word-component-names': 'off',
          },
        },
    ]
  }
  