/**
 * Created by wang on 2017/7/11.
 */
import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'

class Lab extends React.Component {
  static defaultProps = {
    className: 'lab-content'
  }

  render() {
    const props = { ...this.props }
    const isMode = props.isMode
    delete props.isMode
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' }
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
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key='text'
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key='h1' id={`${props.id}-title`}>
              国内最大的智能锁综合测试实验室
            </h1>
            <p key='p' id={`${props.id}-content`}>

              实验室按照德国原厂品质标准，投资几百万资金，完全按照德国标准组建。凯迪仕采购的原部件，都是通过严格测试后才进入生产组装环节的；凯迪仕所生产的产品也都是经过层层检验后，才能销入市场。
            </p>
          </QueueAnim>
          <TweenOne
            key='img'
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width='100%' src='https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png' />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    )
  }
}

export default Lab
