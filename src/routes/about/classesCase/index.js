import React, { Component } from 'react'
import './index.less'
import { PageBanner } from '../../../components/index'
import PageBannerConfig from './classescase.json'

class ClassesCase extends Component {
  render () {
    const {routes} = this.props
    const activeKey = routes[3].path ? `/about/classesCase/` + routes[3].path : '/about/classesCase/lastedCase'
    return (
      <div>
        <div>
          <PageBanner config={PageBannerConfig} activeKey={activeKey} />
          {this.props.children || (
            <div>
              noComponent
            </div>
          )}
        </div>
      </div>
    )
  }
}

ClassesCase.propTypes = {}
ClassesCase.defaultProps = {}
export default ClassesCase
