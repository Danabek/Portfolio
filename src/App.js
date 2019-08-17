import React, {Component} from 'react';
import 'normalize.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import ModulMenu from './components/ModulMenu'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume/Resume'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'

class App extends Component {
  state = {
    burgerMenuOpen: false
  }
  MenuClickHandler = () => {
    this.setState((prevState) => {
      return {burgerMenuOpen: !prevState.burgerMenuOpen}
    })
  }
  render(){
    let burgerMenu
    let root = document.getElementById('root')
    root.classList.toggle('show')

    let styledClose = {
      background: 'white'
    }
    if (this.state.burgerMenuOpen) {
      burgerMenu = <ModulMenu MenuClickHandler={this.MenuClickHandler}/>
      styledClose = {
        firstLine: {
          background: 'red',
          position: 'absolute',
          transform: 'rotate(45deg)'
        },
        middleLine: {
          position: 'absolute',
          display: 'none',
        },
        lastLine: {
          background: 'red',
          position: 'absolute',
          transform: 'rotate(-45deg)'
        }

      }
    }
    return (
      <Router>
        <div className="App" style={{height: '100%'}}>
          {burgerMenu}
          <Header  styledClose={styledClose}  MenuClickHandler={this.MenuClickHandler}/>
          <main>
            <Switch>
              <Route path="/" exact render={()=> <Home />} />
              <Route path="/Projects" exact component={Projects} />
              <Route path="/Resume" params={'work'} component={Resume} />
              <Route path="/About" component={About} />
              <Route path="/Projects/:projectId" exact component={ProjectDetail} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
