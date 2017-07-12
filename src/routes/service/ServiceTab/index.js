import React, {
  Component,
  PropTypes
} from 'react'
import { Anchor } from 'antd';
import TweenOne from 'rc-tween-one'
import {Link} from 'dva/router'
import './index.less'
import tabConfig from './serviceTab.json'
class ServiceTabs extends Component {
  render () {
    const {tabs = []} = tabConfig
    const demoToChildren = tabs.map((item, i) => {
      const {title, link, desc,num} = item
      if (i < 3) {
        return (
          <li className='service-tab-pane' key={i}>
            <Link to={link} >
              <h2 className='pane-title'>{title}</h2>
              <p className='pane-desc'>{desc}</p>
              <p className='pane-num'>{num}</p>
            </Link>
          </li>
        )
      }
    })
    return (
      <div
        className='tab-content show-tabs'
      >
        <TweenOne
          animation={{y: '+=10', opacity: 0, type: 'from'}}
          key='img'
          className='service-tabs-wrapper'
        >
          <ul className='service-tabs'>
            {demoToChildren}
          </ul>
        </TweenOne>
      </div>
    )
  }
}
export default ServiceTabs
