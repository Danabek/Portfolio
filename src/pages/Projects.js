import { Link } from "react-router-dom";
import React from 'react'

import PROJECTS from '../components/assets/data/WorkData.js'
// import Work from '../components/Work.js'


//Components
import ProjectItem from '../components/ProjectItem'
import ButtonCategories from '../components/ButtonCategories'


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
            <div className="main-title">
              <h1>Потрфолио</h1>
              <p>8 статичных сайтов, 2 react приложений</p>
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
