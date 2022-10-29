import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import './EducationContainer.css'

function EducationContainer({ education }) {
  return (
    <div className='education'>
      <h3 className="education__name">
          <LightbulbIcon className='big_icon'/>{education.name}</h3>

      <p className='education__description'>
        <CalendarMonthIcon className='small_icon'/>{education.time}</p>
      <p className='education__description'>
        <LocationOnIcon className='small_icon'/>{education.place}</p>
      <p className='education__description'>
        <VerifiedIcon className='small_icon'/>{education.cert}</p>
      <p className='education__description'>
        <StarIcon className='small_icon'/>GPA: {education.gpa}</p>
    </div>
  )
}

export default EducationContainer
