import React, { Component } from 'react'
import { Button } from 'antd'
import Slider from 'react-slick'
import { Link } from 'dva/router'
import './index.less'
const ButtonGroup = Button.Group
class SliderItems extends Component {
  constructor (props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next () {
    this.slider.slickNext()
  }

  previous () {
    this.slider.slickPrev()
    g
  }

  render () {
    const {data, title} = this.props
    const demoToChildren = data.map((item, i) => (
      <li
        key={`${title}-${i}`}
      >
        <Link to={`/product/${item.id}`} className='content-wrapper'>
          <span style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: `auto 100%`,
            backgroundPosition: 'center'
          }} />
          <p>{item.title}</p>
        </Link>
      </li>)
    )
    const settings = {
      className: 'slider',
      infinite: true,
      accessibility: true,
      centerPadding: '60px',
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      dots: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    }
    return (
      <div className='product-slider'>
        <div className='product-slider-header'>
          <span>{title}</span>
          <ButtonGroup>
            <Button icon='left' onClick={this.previous} />
            <Button icon='right' onClick={this.next} />
          </ButtonGroup>
        </div>
        <Slider {...settings} ref={c => this.slider = c}>
          {demoToChildren}
        </Slider>
      </div>
    )
  }
}

SliderItems.propTypes = {}
SliderItems.defaultProps = {}

export default SliderItems
