import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import { Link } from 'dva/router'
import './index.less'
import imgCardConfig from './imgCardConfig.json'

class ImgCards extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    pageData: PropTypes.object
  }

  static defaultProps = {
    className: 'case-list'
  }

  render () {
    const {config = imgCardConfig} = this.props
    const {cardItem = []} = config
    const listChildren = cardItem.map((item, index) => {
      const {img, title} = item
      return (<li key={index}>
        <Link onClick={(e) => { e.preventDefault() }}>
          <img src={img} width='100%' />
        </Link>
        <h3>{title}</h3>
      </li>)
    })
    return (<div className='page'>
      <div className='page-wrapper'>
        <TweenOne
          className={this.props.className}
          component='ul'
          animation={{y: 30, type: 'from', opacity: 0}}
        >
          {listChildren}
        </TweenOne>
      </div>
      <div className='case-content'>
        <TweenOne
          key='a'
          className='case-button'
        >
          <Link onClick={(e) => { e.preventDefault() }}>查看更多</Link>
        </TweenOne>
      </div>
    </div>)
  }
}

export default ImgCards
