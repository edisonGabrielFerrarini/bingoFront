module.exports = {
  devServer: {
    proxy: 'https://localhost:8080/api'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
