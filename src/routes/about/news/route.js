module.exports = {
  path: 'news',
  childRoutes: [
    require('./newscontent/route')
  ],
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'news.chunk')
  }
}
