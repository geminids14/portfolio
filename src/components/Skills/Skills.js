import uniqid from 'uniqid'
import HandymanIcon from '@mui/icons-material/Handyman';
import { skills } from '../../portfolio'
import './Skills.css'

function Skills() {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>
        <HandymanIcon className='scaled_icon'/>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
