import React from 'react'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './index.less'
import isPhone from '../../../../utils/enquireScreen'
import ImgCardsConfig from './imgCardConfig.json'
import { Link } from 'dva/router'

class ImgCards extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false
    }
  }

  static propTypes = {
    id: React.PropTypes.string
  }

  static defaultProps = {
    className: 'imgCard'
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

  componentDidMount () {
    isPhone((isMode) => {
      this.setState({isMode})
    })
  }

  render () {
    const props = {...this.props}
    const isMode = this.state.isMode
    const {config = ImgCardsConfig} = this.props
    const {cardItem} = config
    const childrenToRender = cardItem.map(this.getChildrenToRender)
    const col = isMode ? 1 : 4
    const row = Math.ceil(cardItem.length / col) // 通过数组个数来确定高度
    const isOverMode = row > 5 ? row : 0 // 移动端超过五个显示查看更多
    const isOver = row > 3 ? row : 0 // 电脑端超过三个显示查看更多
    const isMore = isMode ? 5 : 3
    return (
      <div>
        <div
          {...props}
          className='content-template-wrapper imgCard-wrapper'
          style={{height: isMode ? `${row * 250 + 220 - isOverMode * 15}px` : `${row * 270 + 50 - isOver * 22}px`}}
        >
          <OverPack
            className={`content-template ${props.className}`}
          >
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
              {
                row > isMore && <div className='case-content'>
                  <TweenOne
                    key='a'
                    className='case-button'
                  >
                    <Link onClick={(e) => { e.preventDefault() }}>查看更多</Link>
                  </TweenOne>
                </div>
              }

            </TweenOneGroup>
          </OverPack>
        </div>

      </div>
    )
  }
}

export default ImgCards
