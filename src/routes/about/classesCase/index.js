/**
 * Created by out_xu on 17/7/7.
 */
import React, { Component } from 'react'
import './index.less'
import { PageBanner } from '../../../components/index'
import PageBannerConfig from './classescase.json'

class ClassesCase extends Component {
  render () {
    const {routes} = this.props
    const activeKey = routes[3] ? routes[3].path : 'case'
    return (
      <div>
        <div>
          <PageBanner config={PageBannerConfig} activeKey={activeKey} />
        </div>
      </div>
    )
  }
}

ClassesCase.propTypes = {}
ClassesCase.defaultProps = {}
export default ClassesCase
