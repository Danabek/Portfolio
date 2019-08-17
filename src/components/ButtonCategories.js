import React,{Component} from 'react'

class ButtonCategories extends Component {
  render(){
    return(
        <button
          className={`btn-${this.props.data}`}
          onClick={() => this.props.setCategory(this.props.data)}
          key={this.props.data}
        >
          {this.props.data}
        </button>

    )
  }
}

export default ButtonCategories
