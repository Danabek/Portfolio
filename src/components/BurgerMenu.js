import React, {Component} from 'react'

class BurgerMenu extends Component {

  render() {
    return(
      <button className="burger-menu" onClick={this.props.click}>
        <div style={this.props.styledClose.firstLine} className="burger-menu__line"></div>
        <div style={this.props.styledClose.middleLine} className="burger-menu__line"></div>
        <div style={this.props.styledClose.lastLine} className="burger-menu__line"></div>
      </button>
    )
  }
}

export default BurgerMenu
