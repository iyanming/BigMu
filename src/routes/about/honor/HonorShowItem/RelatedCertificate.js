/**
 * Created by wang on 2017/7/9.
 */
import React from 'react'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import config from './config.json'
class RelatedCertificate extends React.Component {
  static propTypes = {
    id: React.PropTypes.string
  }

  static defaultProps = {
    className: 'honorShowItem'
  }

  getChildrenToRender = (item, i) => {
    const id = `block${i}`
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className='content-wrapper'>
        <span><img src={item.img} height='100%' /></span>
        <p>{item.content}</p>
      </div>
    </li>)
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300
    return {y: '+=30', opacity: 0, type: 'from', delay}
  }

  render () {
    const props = {...this.props}
    const isMode = props.isMode
    delete props.isMode
    const {dataArray} = config
    const childrenToRender = dataArray.map(this.getChildrenToRender)
    return (
      <div
        {...props}
        className='content-template-wrapper content4-wrapper'
      >
        <OverPack
          className={`content-template ${props.className}`}
        >
          <TweenOne
            animation={{y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad'}}
            component='h1'
            key='h1'
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            RELATED CERTIFICATE
          </TweenOne>
          <TweenOne
            animation={{y: '+=30', opacity: 0, type: 'from', delay: 200, ease: 'easeOutQuad'}}
            component='p'
            key='p'
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            相关证书
          </TweenOne>
          <TweenOneGroup
            className={`${props.className}-img-wrapper`}
            component='ul'
            key='ul'
            enter={(e) => {
              return this.getEnterAnim(e, isMode)
            }}
            leave={{y: '+=30', opacity: 0, ease: 'easeOutQuad'}}
            id={`${props.id}-ul`}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    )
  }
}

export default RelatedCertificate
