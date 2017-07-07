const path = require('path')

export default {
  'entry': 'src/index.js',
  'theme': './theme.config.js',
  'env': {
    'development': {
      'extraBabelPlugins': [
        'dva-hmr',
        'transform-runtime',
        ['import', {'libraryName': 'antd', 'style': true}]
      ],
      'disableCSSModules': true
    },
    'production': {
      'extraBabelPlugins': [
        'transform-runtime',
        ['import', {'libraryName': 'antd', 'style': true}]
      ],
      'autoprefixer': {
        'browsers': [
          'iOS >= 8', 'Android >= 4'
        ]
      },
      'disableCSSModules': true
    }
  }
}
