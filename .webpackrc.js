const path=require('path')

export default {
  alias: {
    "@": path.resolve(__dirname, 'src')
  }
}

// export default {
//     "extraBabelPlugins": [
//       ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
//     ]
// }