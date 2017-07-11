/**
 * Created by yanming on 17-7-7.
 */
import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import { Link } from 'dva/router'
import './index.less'
import showItemConfig from './InvestmentAgent.json'
class InvestmentAgent extends React.Component {
  render () {
    const {showItems = [], title, subTitle} = showItemConfig
    const demoToChildren = showItems.map((item, i) => {
      const {img, title, content} = item
      if (i < 3) {
        return (
          <li key={i}>
            <Link>
              <div className='home-anim-demo-img'><img src={img} width='100%' /></div>
              <h2>{title}</h2>
              <div className='home-anim-demo-text'>
                <p>{content}</p>
              </div>
            </Link>
          </li>
        )
      }
    })

    return (
      <OverPack
        className='home-content show-items'
        playScale={0.3}
      >
        <QueueAnim
          className='page-text'
          key='text'
          type='bottom'
          leaveReverse
          delay={[0, 100]}
        >
          <h1 key='h1'>{title}</h1>
          <p key='p'>
            {subTitle}
          </p>
        </QueueAnim>
        <QueueAnim
          className='page-text'
          type='bottom'
          leaveReverse
          delay={[0, 100]}
        >
          <TweenOne
            key='img'
            className='home-anim-demo'
          >
            <ul>
              {demoToChildren}
            </ul>
          </TweenOne>
        </QueueAnim>
      </OverPack>
    )
  }
}

export default InvestmentAgent
