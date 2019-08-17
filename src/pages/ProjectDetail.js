import React,{Component} from 'react'
import PROJECTS from '../components/assets/data/WorkData.js'

class ProjectDetail extends Component {
  render(){
    return(
      <div>
        <h1>{PROJECTS[this.props.match.params.projectId].name}</h1>
        <p>{PROJECTS[this.props.match.params.projectId].description}</p>
      </div>
    )
  }
}


export default ProjectDetail
