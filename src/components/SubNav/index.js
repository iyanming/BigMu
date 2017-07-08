import React from 'react'
import PropTypes from 'prop-types'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import { enquireScreen } from '../../utils'
import './index.less'
import subNavConfig from './subnav.json'
import { Link } from 'dva/router'

class Page extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      affixAnim: {},
      isHash: false,
      isMode: false,
      open: false,
      zIndex: 998,
      barAnim: []
    }
  }

  componentDidMount () {
    enquireScreen((bool) => {
      this.setState({
        isMode: bool
      })
    })
  }

  getTransitionEnd = () => {
    const transEndEventNames = {
      transition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend'
    }
    return Object.keys(transEndEventNames).map((name) => {
      if (typeof document.body.style[name] === 'string') {
        return transEndEventNames[name]
      }
      return null
    }).filter(item => item)[0]
  }

  setZIndex = () => {
    this.setState({
      zIndex: 998
    })
  }

  getListChildren = (navList = [], activeKey, navTitle) => {
    return (
      <div
        className={`list-wrapper${this.state.open ? ' open' : ''}`}
        style={{zIndex: this.state.zIndex}}
        id='J-List'
      >
        <div className='icon-list' onClick={this.openClick}>
          <div className='bar-wrapper'>
            <TweenOne component='em' animation={this.state.barAnim[0]} />
            <TweenOne component='em' animation={this.state.barAnim[1]} />
            <TweenOne component='em' animation={this.state.barAnim[2]} />
          </div>
        </div>
        <div className='list'>
          <h2 >
            {navTitle}
          </h2>
          <ul>
            {
              navList.map((item, i) => (
                <li key={i} className={`${activeKey === item.key ? 'active' : ''}`}>
                  <Link to={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>)
  }

  openClick = () => {
    const zIndex = 1002
    const list = document.getElementById('J-List')

    const transitionEnd = this.getTransitionEnd()
    if (this.state.open) {
      list.addEventListener(transitionEnd, this.setZIndex)
    } else {
      list.removeEventListener(transitionEnd, this.setZIndex)
    }
    const obj = this.state.open ? {
      barAnim: [
        {rotate: 0, y: 0, duration: 300},
        {opacity: 1, duration: 300},
        {rotate: 0, y: 0, duration: 300}
      ]
    } : {
      barAnim: [
        {rotate: 45, y: 5, duration: 300},
        {opacity: 0, duration: 300},
        {rotate: -45, y: -5, duration: 300}
      ]
    }
    this.setState({
      ...obj,
      open: !this.state.open,
      zIndex
    })
  }

  render () {
    const {className, activeKey, config = subNavConfig} = this.props
    const {navItems, navTitle} = config
    const listToRender = this.getListChildren(navItems, activeKey, navTitle)
    return (
      <div className={className}>
        <div key='bg' className={`list-bg${this.state.open ? ' open' : ''}`} onClick={this.openClick} />
        {
          this.state.isMode ? (
            <TweenOneGroup
              enter={{
                y: 30,
                type: 'from',
                opacity: 0,
                onComplete: (e) => {
                  const {target} = {...e}
                  target.style.cssText = ''
                }
              }}
              leave={{y: -30, opacity: 0}}
              className={`${className}-wrapper`}
            >
              {listToRender}
            </TweenOneGroup>
          ) : (
            <div key='nav' className={`${className}-nav`}>
              <ul>
                {
                  navItems.map((item, i) => (
                    <li
                      key={i} className={`${activeKey === item.key ? 'active' : ''}`}
                      style={{width: `${100 / navItems.length}%`}}
                    >
                      <Link to={item.href}>
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>
    )
  }
}
Page.propTypes = {
  className: PropTypes.string,
  pathname: PropTypes.string
}

Page.defaultProps = {
  className: 'sub-nav'
}
export default Page
