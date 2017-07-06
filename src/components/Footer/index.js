import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import './index.less'

class Footer extends React.Component {
  render () {
    const props = {...this.props}
    const type = props.type
    const isMode = props.isMode
    delete props.isMode
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type='bottom' component='ul' key='ul' leaveReverse id={`${props.id}-ul`}>
        <li key={'list1'} id={`${this.props.id}-block`}>
          <h2>页脚1</h2>
          <ul>
            <li>More</li>
          </ul>
        </li>
        <li key={'list2'} id={`${this.props.id}-block`}>
          <h2>页脚2</h2>
          <ul>
            {/* <li>More</li> */}
          </ul>
        </li>
        <li key={'list3'} id={`${this.props.id}-block`}>
          <h2>页脚3</h2>
          <ul>
            <li>More</li>
          </ul>
        </li>
        <li key={'list4'} id={`${this.props.id}-block`}>
          <h2>页脚4</h2>
          <ul>
            <li>More</li>
          </ul>
        </li>
        <li key={'list5'} id={`${this.props.id}-block`}>
          <h2>页脚5</h2>
          <ul>
            <li>More</li>
          </ul>
        </li>
      </QueueAnim>
      <TweenOne
        animation={{y: '+=30', opacity: 0, type: 'from'}}
        key='copyright'
        className='copyright'
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2017
        </span>
      </TweenOne>
    </OverPack>)
  }
}
Footer.defaultProps = {
  className: 'large-footer'
}

export default Footer
