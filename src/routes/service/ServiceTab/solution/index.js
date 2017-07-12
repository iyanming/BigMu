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
import QueueAnim from 'rc-queue-anim'


class ServiceTabsSolution extends Component {
  render() {
    return (
      <div className='service-tabs'>
        <QueueAnim delay={300} className="queue-simple"
                   key="demo"
                   type={['right', 'left']}
                   ease={['easeOutQuart', 'easeInOutQuart']}>
          <div key="a">依次进场</div>
          <div key="b">依次进场</div>
          <div key="c">依次进场</div>
          <div key="d">依次进场</div>
        </QueueAnim>
      </div>
    )
  }
}

ServiceTabsSolution.propTypes = {}
ServiceTabsSolution.defaultProps = {}

export default ServiceTabsSolution
