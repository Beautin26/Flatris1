module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:flowtype/recommended'
  ],
  plugins: ['react', 'flowtype'],
  env: {
    es6: true,
    'shared-node-browser': true
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  globals: {
    global: true,
    process: true
  },
  rules: {
    'no-console': 'off',
    'flowtype/generic-spacing': 'off'
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'babel.config.js',
        'jest.config.js',
        'jest.framework-setup.js',
        'packages/web/cosmos.config.js',
        'packages/web/cosmos.test.js',
        'packages/web/next.config.js',
        'packages/server/**/*.js'
      ],
      env: {
        node: true
      }
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true
      }
    },
    {
      files: [
        'packages/web/components/**/*.js',
        'packages/web/pages/**/*.js',
        'cosmos.proxies.js'
      ],
      rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
      }
    },
    {
      files: ['**/__fixtures__/**/*.js']
    }
  ]
};
