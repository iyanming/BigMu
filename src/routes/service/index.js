/**
 * Created by out_xu on 17/7/7.
 */
import React, {
  Component,
  PropTypes
} from 'react'
import './index.less'
import ServiceBanner from './ServiceBanner'
import ServiceTab from './ServiceTab'
class ServicePage extends Component {
  render () {
    const {routes} = this.props
    // const activeKey = routes[2].path ? routes[2].path : 'introduction'
    return (
      <div>
        <ServiceBanner />
        <ServiceTab />
        {this.props.children || (
          <div>
          </div>
        )}
      </div>
    )
  }
}

ServicePage.propTypes = {}
ServicePage.defaultProps = {}

export default ServicePage
