module.exports = {
  path: 'about',
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'about.chunk')
  }
}
