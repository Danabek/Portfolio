import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from 'react-spring/renderprops'

class ProjectItem extends Component {
  render(){
    return(
      <Transition
        items={this.props.data}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}>
        { (items) => items && (props => ( <div className='Work' style={props}>
          {this.props.data.name}
          {this.props.data.category}
        </div> ))}
      </Transition>

    )
  }
}




export default ProjectItem
