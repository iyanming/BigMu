/**
 * Created by out_xu on 17/7/11.
 */
import React, { Component } from 'react'
import { Col, Row, Tabs, Tag } from 'antd'
import showItemConfig from '../product.json'
import SliderItems from '../SliderItems'
import { windowScroll } from '../../../utils'
import './index.less'
const TabPane = Tabs.TabPane

class ProductDetail extends Component {
  render () {
    windowScroll('nav-header')
    const {params: {id, type}} = this.props
    const config = showItemConfig[type]
    const item = config.data[id - 1]

    const tags = item.tags && item.tags.map((t, i) => (<Tag color='#000'>{t}</Tag>))
    return (
      <div className='product-detail'>
        <Row type='flex' className='product-detail-content'>
          <Col xs={{span: 24, order: 1}} sm={{span: 16, order: 0}} className='product-detail-content-word'>
            <h1>
              {item.title}
            </h1>
            {tags}
            <Tabs defaultActiveKey='1' className='product-detail-tabs'>
              <TabPane tab={<span className='product-detail-tabs-title'>产品规格</span>} key='1'>
                <div className="product-detail-tabs-content">
                  系列名称：皇冠系列
                  <br />
                  型 号：6105
                  <br />

                  尺 寸：741×80×32（mm）
                  <br />

                  可选颜色：欧洲金/咖啡古铜/亮油古铜
                  <br />

                  开门方式：密码/指纹/机械钥匙/遥控
                  <br />

                  主要材质：铜
                  <br />

                  指纹容量：100
                  <br />

                  密码长度：6-12位开门密码，总30位虚位密码
                  <br />

                  工作电源：4节AA电池，（可装两组） <br />

                  可选颜色：欧洲金/咖啡古铜/亮油古铜
                  <br />

                  开门方式：密码/指纹/机械钥匙/遥控
                  <br />

                  主要材质：铜
                  <br />

                  指纹容量：100
                  <br />

                  密码长度：6-12位开门密码，总30位虚位密码
                  <br />

                  工作电源：4节AA电池，（可装两组） <br />

                  可选颜色：欧洲金/咖啡古铜/亮油古铜
                  <br />

                  开门方式：密码/指纹/机械钥匙/遥控
                  <br />

                  主要材质：铜
                  <br />

                  指纹容量：100
                  <br />

                  密码长度：6-12位开门密码，总30位虚位密码
                  <br />

                  工作电源：4节AA电池，（可装两组） <br />

                  可选颜色：欧洲金/咖啡古铜/亮油古铜
                  <br />

                  开门方式：密码/指纹/机械钥匙/遥控
                  <br />

                  主要材质：铜
                  <br />

                  指纹容量：100
                  <br />

                  密码长度：6-12位开门密码，总30位虚位密码
                  <br />

                  工作电源：4节AA电池，（可装两组）
                </div>
              </TabPane>
              <TabPane tab={<span className='product-detail-tabs-title'>功能特点</span>} key='2'>
                <div className="product-detail-tabs-content">
                  系列名称：皇冠系列
                  <br />
                  型 号：6105
                  <br />

                  尺 寸：741×80×32（mm）
                  <br />

                  可选颜色：欧洲金/咖啡古铜/亮油古铜
                  <br />

                  开门方式：密码/指纹/机械钥匙/遥控
                  <br />

                  主要材质：铜
                  <br />

                </div>
              </TabPane>
              <TabPane tab={<span className='product-detail-tabs-title'>资料下载</span>} key='3'>
                <div className="product-detail-tabs-content">
                  系列名称：皇冠系列
                  <br />
                  型 号：6105
                  <br />

                  尺 寸：741×80×32（mm）
                  <br />

                  可选颜色：欧洲金/咖啡古铜/亮油古铜
                  <br />

                  开门方式：密码/指纹/机械钥匙/遥控
                  <br />

                  主要材质：铜
                  <br />
                </div>
              </TabPane>

            </Tabs>
          </Col>
          <Col xs={{span: 24, order: 0}} sm={{span: 8, order: 1}} className='product-detail-content-img'>
            <img src={item.img} width={300} />
          </Col>
        </Row>
        <div className='product-detail-about'>
          <SliderItems key='hot' config={config} />
        </div>
      </div>
    )
  }
}

export default ProductDetail
