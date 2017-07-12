/**
 * Created by Pororo on 17/7/8.
 */
import React from 'react'
import {Link} from 'dva/router'
import './index.less'
import contactCardConfig from './contactcard.json'

class ContactCard extends React.Component {
  render() {
    const {showItems = []} = contactCardConfig
    const demoToChildren = showItems.map((item, i) => {
      const {img, title, content} = item
      if (i < 4) {
        return (
          <li key={i}>
            <Link>
              <div className='contact-anim-demo-img'><img src={img} width='100%'/></div>
              <div className='contact-anim-demo-text'>
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
        className='contact-content contact-items'
        id='page2'
      >
        <div
          key='img'
          className='contact-anim-demo'
        >
          <ul>
            {demoToChildren}
          </ul>
        </div>
      </div>
    )
  }
}

ContactCard.propTypes = {}
ContactCard.defaultProps = {}

export default ContactCard
