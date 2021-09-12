const defaultPlugins = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {},
  },
}

const productionPlugins = {
  'postcss-flexbugs-fixes': {},
  'postcss-preset-env': {
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 3,
    features: {
      'custom-properties': false,
      'nesting-rules': true
    },
  },
}
module.exports = Object.assign({}, defaultPlugins, process.env.NODE_ENV === 'production' ? productionPlugins : {})
