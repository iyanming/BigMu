import React from 'react'
import { connect } from 'dva'
import { Footer, Header } from '../components'
import { Helmet } from 'react-helmet'
import NProgress from 'nprogress'
import { config, goto, withInArray } from '../utils'
import { BackTop, Icon } from 'antd'
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
      <div className='contact-back-top'>
        <BackTop visibilityHeight={50} onClick={() => { goto('/product') }}>
          <div className='ant-back-top-inner'>
            <Icon type="smile-o" />
          </div>
        </BackTop>
      </div>
      <div className='back-top'>
        <BackTop visibilityHeight={100} />
      </div>
      <div className={isNoBg && 'no-bg'}>
        <Header activeKey={activeKey} />
      </div>
      {children}
      <Footer id='footer' key='footer' />
    </div>
  )
}

export default connect(({loading}) => ({loading}))(App)
