import React, {
  Component,
  PropTypes
} from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import {Link} from 'dva/router'
import './index.less'
import tabConfig from './serviceTab.json'
class ServiceTabs extends Component {
  render() {
    const {tabs = []} = tabConfig
    const demoToChildren = tabs.map((item, i) => {
      const {title, link, desc} = item
      if (i < 3) {
        return (
          <li className="service-tab-pane" key={i}>
            <Link to={link}>
              <h1 className="pane-title">{title}</h1>
              <p className="pane-desc">{desc}</p>
            </Link>
          </li>
        )
      }
    })
    return (
      <div
        className='tab-content show-tabs'
      >
        <QueueAnim
          className='page-text'
          key='text'
          type='bottom'
          leaveReverse
          delay={[0, 10]}
        >
          <p key='p'>
          </p>
        </QueueAnim>
        <TweenOne
          animation={{y: '+=10', opacity: 0, type: 'from'}}
          key='img'
          className='service-tabs-wrapper'
        >
          <ul className="service-tabs">
            {demoToChildren}
          </ul>
        </TweenOne>
      </div>
    )
  }
}
export default ServiceTabs
