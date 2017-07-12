/**
 * Created by raoul on 17-7-11.
 */
import React, {
  Component,
  PropTypes
} from 'react'
import ContactCard from './contactcard'
import './index.less'
import QueueAnim from 'rc-queue-anim'
function callback (key) {
  console.log(key)
}

class ServiceTabsContact extends Component {
  render () {
    return (
      <div className='service-tabs'>
          <ContactCard/>
      </div>
    )
  }
}

ServiceTabsContact.propTypes = {}
ServiceTabsContact.defaultProps = {}

export default ServiceTabsContact
