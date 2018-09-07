module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 10 },
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-flow'
  ],
  plugins: [
    // Stage 0
    '@babel/plugin-proposal-function-bind',

    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    '@babel/plugin-proposal-do-expressions',

    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings'
  ],
  env: {
    production: {
      presets: ['@babel/preset-react'],
      plugins: [
        'dev-expression',

        // Formerly babel-preset-react-optimize
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements'
        // 'babel-plugin-transform-react-remove-prop-types', // POSSIBLY UNSTABLE
        // 'babel-plugin-transform-react-pure-class-to-function' // POSSIBLY UNSTABLE
      ]
    },
    development: {
      presets: [['@babel/preset-react', { development: true }]],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-classes',
        [
          'flow-runtime',
          {
            assert: true,
            annotate: true
          }
        ]
      ]
    }
  }
};
