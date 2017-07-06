import React from 'react'
import { Link } from 'dva/router'
import TweenOne from 'rc-tween-one'
import QueueAnim from 'rc-queue-anim'
import { Icon } from 'antd'

import { enquireScreen, goto } from '../../utils'
import './index.less'
import navConfig from '../config/header.json'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false,
      openAnim: null,
      phoneOpen: false,
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

  getAnimData = phoneOpen => (phoneOpen ? {
    phoneOpen: false,
    openAnim: {opacity: 0, delay: 300, duration: 400},
    barAnim: [
      {rotate: 0, y: 0, duration: 300},
      {opacity: 1, duration: 300},
      {rotate: 0, y: 0, duration: 300}
    ]
  } : {
    phoneOpen: true,
    openAnim: {opacity: 1, duration: 400},
    barAnim: [
      {rotate: 45, y: 6, duration: 300},
      {opacity: 0, duration: 300},
      {rotate: -45, y: -6, duration: 300}
    ]
  })

  phoneClick = (e, phoneOpen, href, isLogo) => {
    if (!this.state.isMode || isLogo && !phoneOpen) {
      return
    }
    if (href) {
      e.preventDefault()
      setTimeout(() => {
          goto(href)
        }, 850
      )
    }
    this.setState(this.getAnimData(phoneOpen))
  }

  render () {
    const {navItem = []} = navConfig
    const navToRender = navItem.map((item) => {
      const className = this.props.activeKey === item.key ? 'active' : ''
      return (
        <li key={item.key}>
          <Link
            to={item.href}
            className={className}
            onClick={(e) => {
              this.phoneClick(e, this.state.phoneOpen, item.href)
            }}
          >
            {item.name}
          </Link>
        </li>
      )
    })
    return (
      <header
        className={`${this.props.className}-wrapper${this.state.phoneOpen ? ' open' : ''}`}
      >
        <div className={this.props.className}>
          <TweenOne
            className={`${this.props.className}-logo`}
            animation={{opacity: 0, type: 'from'}}
          >
            <Link to='/' key='logo' onClick={(e) => {this.phoneClick(e, this.state.phoneOpen, '/', true)}}>
             <span style={{fontSize: 20, color: '#fff'}}>
               <Icon type="like-o" /> &ensp; 大拇哥
             </span>
            </Link>
          </TweenOne>
          {
            this.state.isMode ? (
              <div className='phone-nav'>
                <div className='phone-nav-bar' onClick={(e) => {this.phoneClick(e, this.state.phoneOpen)}}>
                  <TweenOne component='em' animation={this.state.barAnim[0]} />
                  <TweenOne component='em' animation={this.state.barAnim[1]} />
                  <TweenOne component='em' animation={this.state.barAnim[2]} />
                </div>
                <TweenOne
                  className='phone-nav-text-wrapper'
                  animation={this.state.openAnim}
                  style={{pointerEvents: this.state.phoneOpen ? 'auto' : 'none'}}
                >
                  <QueueAnim component='ul' delay={[300, 0]} type='bottom' leaveReverse>
                    {this.state.phoneOpen && navToRender}
                  </QueueAnim>

                </TweenOne>
              </div>
            ) : (
              <TweenOne
                component='nav'
                className='web-nav'
                animation={{opacity: 0, type: 'from'}}
              >
                <ul>
                  {navToRender}
                </ul>
              </TweenOne>
            )
          }
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  className: 'header'
}

export default Header
