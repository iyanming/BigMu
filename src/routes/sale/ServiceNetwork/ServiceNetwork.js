/**
 * Created by yanming on 17-7-7.
 */
import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import { Select } from 'antd'
import './index.less'
import config from './service.json'

const Option = Select.Option

class ServiceNetwork extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (value) => {
    console.log(value)
    this.setState({value: value.key})
  }

  render () {
    const {service = [], select = []} = config
    const options = (select) => (
      select.map(item => (
        <Option value={item.value} key={item.value}>{item.label}</Option>
      ))
    )
    return (
      <div className='network'>
        <QueueAnim className='page-text white-text'>
          <span className='title'>SERVICE NETWORK</span>
          <h1 key='h1' className='service'>服务网络</h1>
          <Select labelInValue defaultValue={{key: '上海市'}} style={{width: 340}} onChange={this.handleChange}
                  className='select' size='large'>
            {options(select)}
          </Select>
          <p key='p' className='content'>{service[+this.state.value].content}</p>
        </QueueAnim>
      </div>
    )
  }
}
export default ServiceNetwork
