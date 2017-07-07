/**
 * Created by out_xu on 17/7/7.
 */
import React, { Component } from 'react'

class AboutPage extends Component {
  render () {
    return (
      <div>
        {this.props.children || (
          <div>
            info
          </div>
        )}
      </div>
    )
  }
}

AboutPage.propTypes = {}
AboutPage.defaultProps = {}

export default AboutPage
