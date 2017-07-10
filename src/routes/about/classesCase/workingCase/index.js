/**
 * Created by Pororo on 17/7/8.
 */
import React, { Component } from 'react'
import './index.less'
import workingConfig from './workingConfig.json'
import ImgCards from '../imgCards/index'

class workingCase extends Component {
  render () {
    return (
      <ImgCards config={workingConfig} />
    )
  }
}

workingCase.propTypes = {}
workingCase.defaultProps = {}
export default workingCase
