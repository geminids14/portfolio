import uniqid from 'uniqid'
import SchoolIcon from '@mui/icons-material/School';
import { educations } from '../../portfolio'
import EducationContainer from '../EducationContainer/EducationContainer'
import './Educations.css'

function Educations() {
    if (!educations.length) return null

    return (
      <section id='education' className='section educations'>
        <h2 className='section__title'>
          <SchoolIcon className='big_icon'/>Education</h2>

        <div className='educations__grid'>
          {educations.map((education) => (
            <EducationContainer key={uniqid()} education={education} />
          ))}
        </div>
      </section>
    )
}

export default Educations