import React from 'react'
import { Row } from 'antd'
import './index.less'
import HomeBanner from './Banner'
const HomePage = () => {
  return (
    <div className='home'>
      <Row>
        <HomeBanner />
      </Row>
    </div>
  )
}

export default HomePage
