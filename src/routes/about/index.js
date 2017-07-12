/**
 * Created by out_xu on 17/7/7.
 */
import React, { Component } from 'react'
import { SubNav } from '../../components/index'
import SubNavConfig from './about.json'
import './index.less'

class AboutPage extends Component {
  render () {
    const {routes} = this.props
    const activeKey = routes[2].path ? routes[2].path : 'introduction'
    const isShow = routes[3] ? (routes[3].path !== 'newscontent') : true
    return (
      <div>
        {
          isShow && <SubNav activeKey={activeKey} config={SubNavConfig} />
        }
        {this.props.children || (
          <div>
            info
          </div>
        )}
      </div>
    )
  }
}

AboutPage.propTypes = {}
AboutPage.defaultProps = {}

export default AboutPage
