import React, { Component } from 'react'
import './index.less'
import config from './index.json'
const Map = () => {
  const {background: {image}} = config
  return (
    <div className='map-wrapper' style={{background: image, backgroundSize: '100% 100%'}}>
      <div className='map-text'>
        <h1 className='map-text-cont'>CONTACT&nbsp;US</h1>
        <h1 className='map-text-cont'>联系我们</h1>
      </div>
    </div>
  )
}

export default Map
