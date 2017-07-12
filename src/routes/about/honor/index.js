import React from 'react'
import './index.less'
import HonorBanner from './HonorBanner'
import honorBannerConfig from './config.json'
// import { scrollScreen } from 'rc-scroll-anim'
import HonorShowItem from './HonorShowItem'

class HonorPage extends React.Component {
  render () {
    const honorBanner = () => {
      const {englishTitle, chineseTitle = []} = honorBannerConfig
      return (
        <div className='pageBannerWrapper titleStyleTop'>
          <h1>{englishTitle}</h1>
          <h2>{chineseTitle}</h2>
        </div>
      )
    }
    return (
      <div className='honor-page'>
        <div>
          {honorBanner()}
        </div>
        <HonorBanner />
        <HonorShowItem />
      </div>
    )
  }
}

export default HonorPage
