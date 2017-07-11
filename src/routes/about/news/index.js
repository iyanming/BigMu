/**
 * Created by Pororo on 17/7/7.
 */
import React, { Component } from 'react'
import './index.less'
import { PageBanner } from '../../../components/index'
import { Link } from 'dva/router'
import PageBannerConfig from './news.json'
import NewsCard from './newscard/index'
import TweenOne from 'rc-tween-one'

class News extends Component {
  render () {
    return (
      <div className='news-wrapper'>
        {this.props.children ||
          <div>
            <PageBanner config={PageBannerConfig} />
            <div className='newsCard'>
              <NewsCard />
              <div className='news-content'>
                <TweenOne
                  key='a'
                  className='news-button'
                  style={{marginBottom: '80px'}}
                >
                  <Link onClick={(e) => { e.preventDefault() }}>查看更多</Link>
                </TweenOne>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

News.propTypes = {}
News.defaultProps = {}

export default News
