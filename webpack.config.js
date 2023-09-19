const path = require('path')

module.exports = {
  entry: './src/index.js', // đầu vào là soruce code, css, các chỉnh sửa, phát triển code
  output: {
    filename: 'main.js', // file đầu ra
    path: path.resolve(__dirname, 'dist') // thư mục chứa file đầu ra
  }
}
