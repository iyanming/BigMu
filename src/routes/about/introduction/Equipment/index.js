/**
 * Created by wang on 2017/7/11.
 */
import React, { PropTypes } from 'react'
import { Button, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'

const BgElement = Element.BgElement
class Equipment extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string
  }

  static defaultProps = {
    className: 'equipment'
  }

  render () {
    const props = {...this.props}
    const isMode = props.isMode
    delete props.isMode
    const follow = !isMode ? {
      delay: 1000,
      minMove: 0.1,
      data: [
        {id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX']},
        {id: `${props.id}-wrapperBlock0`, value: -15, type: 'x'}
      ]
    } : null
    const childrenToRender = (<Element
      key='0'
      prefixCls='banner-user-elem'
      followParallax={follow}
    >
      <BgElement
        className='bg bg0'
        key='bg'
        id='bg$0'
        scrollParallax={{y: 300}}
      />
      <QueueAnim
        type={['bottom', 'top']} delay={200}
        className={`${props.className}-title`}
        key='text'
        id={`${props.id}-wrapperBlock0`}
      >
         <span
           className='logo'
           key='logo'
           id={`${props.id}-titleBlock0`}
         >
            领先科技先进设备
          </span>
        <p
          key='content'
          id={`${props.id}-contentBlock0`}
        >
          凯迪仕智能锁获得涵盖核心部件、结构工艺、外观设计等多项专利，一跃成为行业翘楚。拥有国内最大的智能锁具综合测试实验室，2012年斥资500万打造了专业智能产品研发中心。
        </p>
        {/*<Button*/}
        {/*type='ghost'*/}
        {/*key='button'*/}
        {/*id={`${props.id}-buttonBlock0`}*/}
        {/*>*/}
        {/*Learn More*/}
        {/*</Button>*/}
      </QueueAnim>
    </Element>)

    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key='banner'
          enter={{opacity: 0, type: 'from'}}
          leave={{opacity: 0}}
          component=''
        >
          <BannerAnim
            key='banner'
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{y: '-=20', yoyo: true, repeat: -1, duration: 1000}}
          className={`${props.className}-icon`}
          style={{bottom: 40}}
          key='icon'
        >
          <Icon type='down' />
        </TweenOne>
      </OverPack>
    )
  }
}

export default Equipment
