/**
 * Created by out_xu on 17/7/7.
 */
import React from 'react'
import TweenOne from 'rc-tween-one'
import './index.less'
import showItemConfig from './product.json'
import SliderItems from './SliderItems'
const ProductPage = ({children}) => {
  if (children) {
    return children
  }
  const {hot = {}, door = {}, lock = {}, title, subTitle} = showItemConfig
  return (
    <div className='product-wrapper'>
      <div className='product-header' style={{
        backgroundImage: `url(/assets/sale/content.jpg)`
      }}>
        <TweenOne
          animation={{y: '+=30', opacity: 0, type: 'from'}}
          component='h1'
          key='h1'
          reverseDelay={200}
          className='product-title'
        >
          {title}
        </TweenOne>
        <TweenOne
          animation={{y: '+=30', opacity: 0, type: 'from', delay: 100}}
          component='p'
          key='p'
          reverseDelay={100}
          className='product-sub-title'
        >
          {subTitle}
        </TweenOne>
      </div>
      {children || (
        <div className='product-content'>
          <SliderItems key='hot' config={hot} />
          <SliderItems key='lock' config={lock} />
          <SliderItems key='door' config={door} />
        </div>
      )}

    </div>
  )
}

export default ProductPage
