import uniqid from 'uniqid'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

function Projects() {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>
        <WorkspacePremiumIcon className='scaled_icon'/>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
