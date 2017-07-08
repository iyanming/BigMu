/**
 * Created by Pororo on 17/7/8.
 */
import React from 'react'
import { Link } from 'dva/router'
import './index.less'
import newsCardConfig from './newscard.json'

class NewsCard extends React.Component {
  render () {
    const {showItems = []} = newsCardConfig
    const demoToChildren = showItems.map((item, i) => {
      const {img, link, title, content} = item
      if (i < 3) {
        return (
          <li key={i}>
            <Link to={link}>
              <div className='news-anim-demo-img'><img src={img} width='100%' /></div>
              <div className='news-anim-demo-text'>
                <h2>{title}</h2>
                <p>{content}</p>
              </div>
            </Link>
          </li>
        )
      }
    })

    return (
      <div
        className='news-content news-items'
        id='page2'
      >
        <div
          key='img'
          className='news-anim-demo'
        >
          <ul>
            {demoToChildren}
          </ul>
        </div>
      </div>
    )
  }
}

NewsCard.propTypes = {}
NewsCard.defaultProps = {}

export default NewsCard
