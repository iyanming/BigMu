/**
 * Created by out_xu on 17/7/7.
 */
import React, { Component } from 'react'
import { SubNav } from '../../components/index'
import SubNavConfig from './about.json'

class AboutPage extends Component {
  render () {
    const {routes} = this.props
    const activeKey = routes[2] ? routes[2].path : 'introduction'
    return (
      <div>
        <SubNav activeKey={activeKey} config={SubNavConfig} />
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
