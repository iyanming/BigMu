/**
 * Created by out_xu on 17/7/7.
 */
import React from 'react'
import ServiceSupport from './ServiceSupport/ServiceSupport'
import ServiceNetwork from './ServiceNetwork/ServiceNetwork'
import InvestmentAgent from './InvestmentAgent/InvestmentAgent'
import Download from './Download/Download'

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
