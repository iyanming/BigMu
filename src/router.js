import React from 'react'
import { Router } from 'dva/router'
import App from './routes/app'

const Routers = ({history, app}) => {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, {component: require('./routes/home')})
        }, 'home.chunk')
      },
      childRoutes: [
        require('./routes/about/route'),
        require('./routes/admin/route'),
        require('./routes/contact/route'),
        require('./routes/home/route'),
        require('./routes/product/route'),
        require('./routes/sale/route'),
        require('./routes/service/route')
      ]
    },
    {
      path: '*',
      getComponent (nextState, cb) {
        require.ensure([], require => {
          cb(null, require('./routes/404'))
        }, 'error')
      },
    },]

  return <Router history={history} routes={routes} />
}

export default Routers
