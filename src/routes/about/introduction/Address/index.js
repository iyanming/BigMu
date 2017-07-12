/**
 * Created by wang on 2017/7/11.
 */
import React from 'react'
import { Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'
import config from './config.json'

const BgElement = Element.BgElement
class Address extends React.Component {
  render () {
    const props = {...this.props}
    delete props.isMode
    const {childrenData} = config
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title
      const content = item.content
      // const button = item.button
      return (<Element
        key={i}
        prefixCls='banner-user-elem'
      >
        <BgElement
          className={`bg bg${i}`}
          key='bg'
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key='text'
          id={`${props.id}-wrapperBlock${i}`}
        >
          <span
            className='logo'
            key='logo'
            id={`${props.id}-titleBlock${i}`}
            dangerouslySetInnerHTML={{
              __html: title
            }}
          />
          <p
            key='content'
            id={`${props.id}-contentBlock${i}`}
          >
            {content}
          </p>
        </QueueAnim>
      </Element>)
    })
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
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key='banner'
            >
              {childrenToRender}
            </BannerAnim>
          </div>
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

Address.defaultProps = {
  className: 'address'
}

export default Address
