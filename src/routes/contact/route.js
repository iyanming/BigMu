module.exports = {
  path: 'contact',
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'contact.chunk')
  }
}
