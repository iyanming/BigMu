import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import './index.less'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import config from './Download.json'

class Application extends Component {
  static defaultProps = {
    className: 'download'
  }

  render () {
    const props = {...this.props}

    const dataArray = config.imgData
    const childrenToRender = dataArray.map((item, i) => (
        <li key={i}>
          <div className='content-wrapper'>
            <span><img src={item.img} height='100%' /></span>
            <p>{item.content}</p>
          </div>
        </li>
      )
    )
    return (
      <div className='application'>
        <QueueAnim key='text' className='page-text white-text' type='bottom' leaveReverse>
          <div
            {...props}
            className='content-template-wrapper download-wrapper'
          >
            <OverPack
              className={`content-template ${props.className}`}
            >
              <TweenOne
                animation={{y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad'}}
                component='h1'
                key='h1'
                reverseDelay={300}
              >
                下载中心
              </TweenOne>
              <TweenOne
                animation={{y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad'}}
                component='p'
                key='p'
                reverseDelay={200}
              >
                在这里您可以下载关于我公司的文件
              </TweenOne>
              <TweenOneGroup
                className={`${props.className}-img-wrapper`}
                component='ul'
                key='ul'
                enter={{y: '+=30', opacity: 0, type: 'from'}}
                leave={{y: '+=30', opacity: 0, ease: 'easeOutQuad'}}
              >
                {childrenToRender}
              </TweenOneGroup>
            </OverPack>
          </div>
        </QueueAnim>
      </div>
    )
  }
}

export default Application
