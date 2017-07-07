import React from 'react'
import './index.less'
import HomeBanner from './Banner'
import ShowItems from './ShowItems/index'
const HomePage = () => {
  return (
    <div className='home-page'>
      <HomeBanner />
      <ShowItems />
    </div>
  )
}

export default HomePage
