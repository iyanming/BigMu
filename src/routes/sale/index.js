/**
 * Created by out_xu on 17/7/7.
 */
import React from 'react'
import ServiceSupport from './ServiceSupport'
import ServiceNetwork from './ServiceNetwork'
import InvestmentAgent from './InvestmentAgent'
import Download from './Download'

const SalePage = () => {
  return (
    <div className='sale-page'>
      <ServiceSupport />
      <InvestmentAgent />
      <ServiceNetwork />
      <Download />
    </div>
  )
}

SalePage.propTypes = {}
SalePage.defaultProps = {}

export default SalePage
