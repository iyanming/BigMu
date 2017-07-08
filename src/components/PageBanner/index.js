/**
 * Created by Pororo on 17/7/8.
 */
import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Button } from 'antd'
import './index.less'
import pageBannerConfig from './pagebanner.json'

class pageBanner extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    // 页面顶部标题和分页Banner
    const {activeKey, config = pageBannerConfig} = this.props
    const {englishTitle, chineseTitle, navButton = []} = config
    return (
      <div className='pageBannerWrapper'>
        <h1>{englishTitle}</h1>
        <h2>{chineseTitle}</h2>
        <ul>
          {
            navButton.length !== 0 && navButton.map((item, index) => {
              return (
                <li key={index} className='navButton'>
                  <Link to={item.href}>
                    <Button size='large' type={activeKey === item.href ? 'primary' : 'default'}>{item.content}</Button>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

pageBanner.propTypes = {}
pageBanner.defaultProps = {}

export default pageBanner
