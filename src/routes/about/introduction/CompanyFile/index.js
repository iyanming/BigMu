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
class CompanyFile extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string
  }

  static defaultProps = {
    className: 'company-file'
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
          <p>Never stop “think tank” made in Germany</p>
           永不止步的凯迪仕
          </span>
        <p
          key='content'
          id={`${props.id}-contentBlock0`}
        >

          Kaadas凯迪仕专注于高端智能锁领域，是一家集产品研发、制造、销售、安装、售后于一体的全产业链公司，是国家级高新技术企业，总部位于中国广东省深圳市高新科技园——科兴科学园。凯迪仕一直秉承“创新、智造、品质、诚信、工匠精神”做产品，为全球每一位消费者提供舒适，便捷，安全的高品质生活。目前，凯迪仕有1000多名员工，上万家的全球终端网点，销售规模位居全球TOP
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

export default CompanyFile
