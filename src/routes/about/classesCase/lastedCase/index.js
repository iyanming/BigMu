/**
 * Created by Pororo on 17/7/8.
 */
import React, { Component } from 'react'
import './index.less'
import lastedConfig from './lastedConfig.json'
import ImgCards from '../imgCards/index'

class lastedCase extends Component {
  render () {
    return (
      <div>
        <ImgCards config={lastedConfig} />
      </div>
    )
  }
}

lastedCase.propTypes = {}
lastedCase.defaultProps = {}
export default lastedCase
