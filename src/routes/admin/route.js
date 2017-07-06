module.exports = {
  path: 'admin',
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'admin.chunk')
  }
}
