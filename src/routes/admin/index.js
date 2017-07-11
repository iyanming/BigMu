/**
 * Created by out_xu on 17/7/7.
 */
import React, { Component } from 'react'
import {SubNav,Markdown} from '../../components'
import adminConfig from './admin.json'
class AdminPage extends Component {
  render () {
    return (
      <div>
        <SubNav activeKey='home' config={adminConfig} />
        <div>
          <Markdown content={"# 如何使用：\n\n 1. 导出文件为 react，\n\n### 2. 将 Home 文件包直接拷到 routes 文件夹下。\n\n### 3. 修改 router.js 里的 IndexPage 的路径:\n\n### 5. 安装依赖:\n\n### 6. 按需加载 antd, 安装 babel-plugin-import:\n\n### 8. 配置自定义皮服，[参考](https://ant.design/docs/react/customize-theme-cn) 里面的 package.theme（推荐);\n\n### 9. 在你的 index.html 里的 head 里添加上\n\n![mahua](mahua-logo.jpg)"}/>
        </div>
      </div>
    )
  }
}

AdminPage.propTypes = {}
AdminPage.defaultProps = {}

export default AdminPage
