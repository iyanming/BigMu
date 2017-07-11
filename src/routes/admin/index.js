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
          <Markdown content={''}/>
        </div>
      </div>
    )
  }
}

AdminPage.propTypes = {}
AdminPage.defaultProps = {}

export default AdminPage
