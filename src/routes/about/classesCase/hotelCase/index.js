/**
 * Created by Pororo on 17/7/8.
 */
import React, { Component } from 'react'
import './index.less'
import HotelConfig from './hotelConfig.json'
import ImgCards from '../imgCards/index'

class HotelCase extends Component {
  render () {
    return (
      <ImgCards config={HotelConfig} />
    )
  }
}

HotelCase.propTypes = {}
HotelCase.defaultProps = {}
export default HotelCase
