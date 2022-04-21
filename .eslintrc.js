module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@components': './src/app/components',
          '@config': './src/app/config',
          '@constants': './src/app/constants',
          '@reducers': './src/app/reducers',
          '@shared': './src/app/shared',
          '@theme': './src/app/config/theme',
          '@app': './src/app',
        },
      },
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'no-tabs': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    radix: 0,
    'react/jsx-props-no-spreading': 0,
    'react-native/no-raw-text': [
      2,
      {
        skip: ['Animated.Text', 'ListItem.Title', 'ListItem.Subtitle'],
      },
    ],
  },
};
