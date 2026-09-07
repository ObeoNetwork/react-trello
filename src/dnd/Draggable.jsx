import PropTypes from 'prop-types'
import React, {Component} from 'react'
import * as smoothDnd from 'trello-smooth-dnd'

const smoothDndExports = smoothDnd.default || smoothDnd
const {constants} = smoothDnd.constants ? smoothDnd : smoothDndExports
const {wrapperClass} = constants

class Draggable extends Component {
  render() {
    if (this.props.render) {
      return React.cloneElement(this.props.render(), {className: wrapperClass})
    }

    const clsName = `${this.props.className ? this.props.className + ' ' : ''}`
    return (
      <div {...this.props} className={`${clsName}${wrapperClass}`} onDragStart={e => e.preventDefault()}>
        {this.props.children}
      </div>
    )
  }
}

Draggable.propTypes = {
  render: PropTypes.func
}

export default Draggable
