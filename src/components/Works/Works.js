import uniqid from 'uniqid'
import BusinessIcon from '@mui/icons-material/Business';
import { works } from '../../portfolio'
import WorkContainer from '../WorkContainer/WorkContainer'
import './Works.css'

function Works() {
    if (!works.length) return null

    return (
      <section id='work' className='section works'>
        <h2 className='section__title'>
          <BusinessIcon className='big_icon'/>Work</h2>

        <div className='works__grid'>
          {works.map((work) => (
            <WorkContainer key={uniqid()} work={work} />
          ))}
        </div>
      </section>
    )
}

export default Works