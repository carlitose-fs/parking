module.exports = {
  plugins: [
    '@babel/transform-flow-strip-types',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/transform-react-jsx-source',
    '@babel/proposal-object-rest-spread',
    '@babel/transform-runtime',
    // ['module-resolver',
    //   {
    //     root: ['.'],
    //     alias: {
    //       src: './src',
    //       services: './src/services',
    //       screens: './src/screens',
    //       navigation: './src/navigation',
    //       assets: './assets',
    //       themes: './src/styles/themes',
    //       actions: './src/redux/actions',
    //       reducers: './src/redux/reducers',
    //       sagas: './src/redux/sagas',
    //       store: './src/redux/store',
    //       data: './src/redux/data',
    //       hocs: './src/hocs',
    //       hooks: './src/hooks',
    //       icons: './assets/fonts/icons',
    //       selectors: './src/redux/selectors',
    //       utils: './src/utils',
    //       library: './src/utils/library',
    //       locales: './src/locales',
    //       packageJson: './package.json',
    //       components: './src/components/',
    //       activeOrderComponents: './src/screens/order/components/',
    //       currentOrdersComponents: './src/screens/currentOrders/components/',
    //       editOrderComponents: './src/screens/editOrder/components/',
    //       screenComponents: './src/screens/general/components/',
    //     },
    //   },
    // ],
  ],
  presets: ['@babel/preset-react'],
};
