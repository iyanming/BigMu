/**
 * Created by raoul on 17-7-11.
 */
import React, {
  Component,
  PropTypes
} from 'react'
import {Link} from 'dva/router'
import ImgCard from '../imgCards'
import './index.less'
import ServiceTabProductConfig from './ServicecTabProduct.json'

class ServiceTabsProduct extends Component {
  render() {
    const {title, cardItem} = ServiceTabProductConfig
    return (
      <ImgCard config={ServiceTabProductConfig}/>
    )
  }
}

ServiceTabsProduct.propTypes = {}
ServiceTabsProduct.defaultProps = {}

export default ServiceTabsProduct
