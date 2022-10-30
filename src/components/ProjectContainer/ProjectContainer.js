import uniqid from 'uniqid'
import TerminalIcon from '@mui/icons-material/Terminal'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

function ProjectImage({ image }) {
  if (!image) return null;
  return <img className='project__image'
    onError = {e => {e.target.style.display = 'none'}}
    src = {image}
    width = '200'
    height = '200'
    alt='projectPicture'/>;
}

function ProjectContainer({ project }) {
  return (
    <div className='project'>
      <h3 className='project__head'>
        <TerminalIcon className='mid_icon'/>{project.name}</h3>
        <ProjectImage image={project.image} />

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
