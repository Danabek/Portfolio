import { Link } from "react-router-dom";
import React from 'react'

import PROJECTS from '../components/assets/data/WorkData.js'

//Components
import ProjectItem from '../components/ProjectItem'
import ButtonCategories from '../components/ButtonCategories'
import Contacts from '../components/Social'

//Data
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PROJECT_CATEGORIES = PROJECTS.map(prod => prod.category).filter(uniqueItems)

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayCategory: 'All',
      projects: PROJECTS,
      projectsCategories: PROJECT_CATEGORIES
    }
    this.setCategory = this.setCategory.bind(this)
  }
  setCategory(category) {
    this.setState({
      displayCategory: category
    })

  }
  render() {
    const PROJECTS_ITEMS = this.state.projects.filter(({ category }) => this.state.displayCategory === category || this.state.displayCategory === "All").map((prod, {match}) => <Link key={prod.id} to={`/Projects/${prod.id}`}> <ProjectItem data={prod} key={prod.id}  setCategory={this.setCategory}  /> </Link> )
    const BUTTON_CATEGORIES = this.state.projectsCategories.map(item => <ButtonCategories data={item} key={item} setCategory={this.setCategory} />)
    return (
      <div>
        <div className="mainTitle">
          <img src={require('../components/assets/img/Almatinka.jpg')} alt=''/>
          <div className='layout'></div>
          <div className="main-text">
            <h1>Front-end Developer</h1>
            <div>
              <Contacts />
            </div>
          </div>
        </div>
        <nav className='buttonCategories'> {BUTTON_CATEGORIES} </nav>
          <section className='Works' >
            {PROJECTS_ITEMS}
          </section>
      </div>
    )
  }
}

PROJECT_CATEGORIES.sort();
PROJECT_CATEGORIES.unshift("All");

export default Home
