import uniqid from 'uniqid'
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './WorkContainer.css'

function WorkContainer({ work }) {
  return (
    <div className='work'>
      <h3 className='work__role'>
        <WorkIcon className='big_icon'/>{work.role}</h3>

      <p className='work__description'>
        <LocationOnIcon className='small_icon'/>{work.place}</p>
      <p className='work__time'>
        <CalendarMonthIcon className='small_icon'/>{work.time}</p>
      {work.descriptions && (
        <ul className='work__description'>
          {work.descriptions.map((item) => (
            <li key={uniqid()} className='work__description-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default WorkContainer
