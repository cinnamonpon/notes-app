module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
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
    ],
    'react-native-reanimated/plugin',
  ],
};
