import React, {
  Component,
  PropTypes
} from 'react'
import {Input, Icon} from 'antd'
import './index.less'
class ServiceBanner extends Component {
  render () {
    return (
      <div className='service-banner'>
        <h1 className='service-banner-title'>您需要帮助吗</h1>
        <div className='service-banner-input-wrapper'>
          <Input className='service-banner-input'
            placeholder='搜索服务'
            prefix={<Icon type='search' style={{fontSize: 30}} />}
            onPressEnter={value => console.log(value)} />
        </div>
      </div>
    )
  }
}

ServiceBanner.propTypes = {}
ServiceBanner.defaultProps = {}

export default ServiceBanner
