import React from 'react'
import { Link, NavLink } from "react-router-dom";

import BurgerMenu from './BurgerMenu'

class Header extends React.Component {
  render () {

    return (
      <header>
        <div className="logo">
          <Link to="/">
            <h1>Danabek</h1>
          </Link>
        </div>
        <div className="spacer"></div>
        <nav className="navbar">
          <ul>
            <NavLink  to="/Projects" activeClassName='active'>
              <li>Портфолио</li>
            </NavLink>
            <NavLink  to="/Resume" activeClassName='active'>
              <li>Резюме</li>
            </NavLink>
            <NavLink  to="/About" activeClassName='active'>
              <li>Обо мне</li>
            </NavLink>
          </ul>
        </nav>
        <BurgerMenu styledClose={this.props.styledClose} click={this.props.MenuClickHandler}/>
      </header>
    )
  }
}

export default Header;
