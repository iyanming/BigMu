module.exports = {
  path: 'sale',
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'sale.chunk')
  }
}
