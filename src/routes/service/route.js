module.exports = {
  path: 'service',
  // getChildRoutes(partialNextState, callback){
  //   require.ensure([], (require)=> {
  //     callback(null, [
  //       require('./admin'),
  //     ])
  //   }, 'home.sub.chunk')
  // },
  getComponents (nextState, callback) {
    require.ensure([], () => {
      callback(null, require('./index'))
    }, 'service.chunk')
  },
  childRoutes: [
    require('./ServiceTab/product/route'),
    require('./ServiceTab/solution/route'),
    require('./ServiceTab/contact/route')
  ]
}
