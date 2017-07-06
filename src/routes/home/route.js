module.exports = {
  path: 'home',
  // getChildRoutes(partialNextState, callback){
  //   require.ensure([], (require)=> {
  //     callback(null, [
  //       require('./admin'),
  //     ])
  //   }, 'home.sub.chunk')
  // },
  getComponents(nextState, callback){
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'home.chunk')
  }
}
