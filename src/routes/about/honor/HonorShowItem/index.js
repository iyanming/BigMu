import React from 'react'
// import { scrollScreen } from 'rc-scroll-anim'

import RelatedCertificate from './RelatedCertificate'
import './index.less'

export default class HonorShowItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMode: false
    }
  }

  render () {
    const children = [
      <RelatedCertificate id='honor-related-certificate' key='honor-related-certificate' isMode={this.state.isMode} />
    ]
    return (
      <div className='templates-wrapper'>
        {children}
      </div>
    )
  }
}
