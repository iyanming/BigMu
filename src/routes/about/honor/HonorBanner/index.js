/**
 * Created by wang on 2017/7/8.
 */
import React from 'react'
import { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'
import 'rc-banner-anim/assets/index.css'
import config from './banner.json'
const BgElement = Element.BgElement
class HonorBanner extends React.Component {
  render () {
    const props = {...this.props}
    const {banner} = config
    const childrenToRender = banner.map((item, i) => {
      const {bg} = item
      return (
        <Element
          key={i}
          prefixCls='banner-user-elem'
        >
          <BgElement
            className='bg'
            style={{background: `url(${bg}) center`}}
            key='bg'
          />
        </Element>
      )
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
      </OverPack>
    )
  }
}

HonorBanner.defaultProps = {
  className: 'honor-banner'
}

export default HonorBanner
