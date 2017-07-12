/**
 * Created by Pororo on 17/7/7.
 */
import React, { Component } from 'react'
import CompanyFile from './CompanyFile'
import CompanyFileText from './CompanyFileText'
import Address from './Address'
import Lab from './Lab'
import Equipment from './Equipment'
import './index.less'

class index extends Component {
  render () {
    return (
      <div>
        <CompanyFile />
        <CompanyFileText />
        <Address />
        <Lab />
        <Equipment />
      </div>
    )
  }
}

index.propTypes = {}
index.defaultProps = {}

export default index
