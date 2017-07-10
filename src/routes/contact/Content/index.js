import React, { Component } from 'react'
import { Icon, Row, Col, Card } from 'antd'
import './index.less'
import config from './index.json'
const Content = () => {
  const {cards} = config
  const saleCards = cards.map((item, i) => {
    const {title, leader, contact} = item
    return (
      <div className='content-sale-cards-item'>
        <Card title={title} key={i} >
          <p>联系人：{leader}</p>
          <p>联系方式：{contact}</p>
        </Card>
      </div>
    )
  })
  return (
    <div className='content-wrapper'>
      <div className='content-info'>
        <Row>
          <Col xs={24} sm={8}>
            <div className='content-item'>
              <span className='content-item-icon'>
                <Icon type='environment-o' />
              </span>
              <span className='content-item-text'>
                <p className='title'>ADDRESS</p>
                <p className='detail'>地址：深圳市南山区高新科技园中区科苑路科兴科学园C栋3单元202</p>
              </span>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className='content-item'>
              <span className='content-item-icon'>
                <Icon type='phone' />
              </span>
              <span className='content-item-text'>
                <p className='title'>PHONE</p>
                <p className='detail'>电话：86&nbsp;400-800-4756</p>
              </span>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className='content-item'>
              <span className='content-item-icon'>
                <Icon type='mail' />
              </span>
              <span className='content-item-text'>
                <p className='title'>E-MAIL</p>
                <p className='detail'>电子邮箱：ckkj@163.com</p>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className='content-sale'>
        <div className='content-sale-title'>
          <h2>销售地区</h2>
        </div>
        <div className='content-sale-cards'>
          {saleCards}
        </div>
      </div>
    </div>
  )
}

export default Content
