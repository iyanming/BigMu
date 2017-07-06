import React from 'react'
import { connect } from 'dva'
import { Header, Footer } from '../components'
import { Helmet } from 'react-helmet'
import NProgress from 'nprogress'
import { config, withInArray } from '../utils'

import '../themes/index.less'
import './app.less'
const App = ({children, location, loading, routes}) => {
  NProgress.start()
  !loading.global && NProgress.done()

  const {openPages = [], noNavBgPages = [], logoSrc = '', name = ''} = config
  // 全屏页面
  if (withInArray(openPages, location.pathname)) {
    return <div>{children}</div>
  }

  // iconFont 本地化
  // const {iconFontJS, iconFontCSS} = config
  const activeKey = routes[1].path || 'home'
  const isNoBg = withInArray(noNavBgPages, location.pathname)
  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href={logoSrc} type='image/x-icon' />
        {/* {iconFontJS && <script src={iconFontJS}> </script>} */}
        {/* {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />} */}
      </Helmet>
      <div className={isNoBg && 'no-bg'}>
        <Header activeKey={activeKey} />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default connect(({loading}) => ({loading}))(App)
