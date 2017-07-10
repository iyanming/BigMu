/**
 * Created by yanming on 17-7-7.
 */
import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import './index.less'
import TweenOne from 'rc-tween-one'
import { Link } from 'dva/router'
import { Modal, Form, Input } from 'antd'
const FormItem = Form.Item

const CollectionCreateForm = Form.create()(
  (props) => {
    const {visible, onCancel, onCreate, form} = props
    const {getFieldDecorator} = form
    const regex = '^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$'
    return (
      <Modal
        visible={visible}
        title='请填写你的个人信息'
        okText='确定'
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout='vertical' className='form'>
          <FormItem label='姓名'>
            {getFieldDecorator('name', {
              rules: [{required: true, message: '请输入姓名'}]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label='城市'>
            {getFieldDecorator('city', {
              rules: [{required: true, message: '请输入所在城市'}]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label='代理方式'>
            {getFieldDecorator('way', {
              rules: [{required: true, message: '请输入代理方式'}]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label='电子邮箱'
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '输入不是有效的电子邮箱'
              }, {
                required: true, message: '请输入你的电子邮箱'
              }]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label='手机号'
          >
            {getFieldDecorator('mobile', {
              rules: [{
                pattern: regex, message: '输入的不是有效的手机号码！'
              }, {
                required: true, message: '请输入手机号码'
              }]
            })(
              <Input className='form-content-input' />
            )}
          </FormItem>
          <FormItem label='详细信息'>
            {getFieldDecorator('description')(<Input type='textarea' autosize={{minRows: 4, maxRows: 6}} />)}
          </FormItem>
        </Form>
      </Modal>
    )
  }
)

class ServiceSupport extends Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({visible: true})
  }
  handleCancel = () => {
    this.setState({visible: false})
  }
  handleCreate = () => {
    const form = this.form
    form.validateFields((err, values) => {
      if (err) {
        return
      }

      console.log('Received values of form: ', values)
      form.resetFields()
      this.setState({visible: false})
    })
  }
  saveFormRef = (form) => {
    this.form = form
  }

  render () {
    return (
      <div className='support'>
        <QueueAnim
          key='text'
          className='page-text white-text'
          type='bottom'
          leaveReverse
        >
          <span>SERVICE SUPPORT</span>
          <h1 key='h1'>招商代理</h1>
          <p key='p'>
            智能锁十大品牌商深圳凯迪仕智能锁公司智能防盗门锁、家用智能门锁、指纹密码锁、指纹密码锁代理批发,【智能锁招商加盟热线】
          </p>
          <div className='button-page'>
            <TweenOne
              key='a'
              className='news-button'
              style={{marginBottom: '80px'}}
            >
              <Link onClick={this.showModal}>申请代理</Link>
            </TweenOne>
          </div>
          <CollectionCreateForm
            className='input'
            ref={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </QueueAnim>
      </div>
    )
  }
}

export default ServiceSupport
