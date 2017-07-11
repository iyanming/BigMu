/**
 * Created by raoul on 17-7-11.
 */
import React, {
  Component,
  PropTypes
} from 'react'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane
import './index.less'

function callback(key) {
  console.log(key)
}

class ServiceTabsProduct extends Component {
  render() {
    return (
      <div className="service-tabs">
        <div></div>
        <div>65464</div>
        <div>65464</div>
      </div>
    )
  }
}

ServiceTabsProduct.propTypes = {}
ServiceTabsProduct.defaultProps = {}

export default ServiceTabsProduct
