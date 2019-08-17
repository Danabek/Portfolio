import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ModulMenu extends Component {

  render() {
    return(
      <nav className="modul-menu">
        <ul>
          <Link onClick={this.props.MenuClickHandler} to="/">
            <li>Главное</li>
          </Link>
          <Link onClick={this.props.MenuClickHandler} to="/Projects">
            <li>Портфолио</li>
          </Link>
          <Link onClick={this.props.MenuClickHandler} to="/Resume" >
            <li>Резюме</li>
          </Link>
          <Link onClick={this.props.MenuClickHandler} to="/About">
            <li>Обо мне</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default ModulMenu
