/**
 * Created by wang on 2017/7/11.
 */
import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'

class CompanyFileText extends React.Component {
  static defaultProps = {
    className: 'company-file-text-content'
  }

  render () {
    const props = {...this.props}
    const isMode = props.isMode
    delete props.isMode
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? {y: '+=30', opacity: 0, type: 'from'}
        : {x: '-=30', opacity: 0, type: 'from'}
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key='img'
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width='100%' src='https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png' />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key='text'
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key='h1' id={`${props.id}-title`}>
              大拇哥
            </h1>
            <p key='p' id={`${props.id}-content`}>
              我们致力于为每一位用户提供最安全、便捷的智能锁产品，开启“安全无忧”智能生活模式。加速21世纪全球物联网生活建设，打造影响全人类的智能家居产品<br />
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}

export default CompanyFileText
