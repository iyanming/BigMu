/**
 * Created by out_xu on 17/7/11.
 */
import React, {
  Component,
  PropTypes,
} from 'react'

class index extends Component {
  render () {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}

index.propTypes = {}
index.defaultProps = {}

export default index
