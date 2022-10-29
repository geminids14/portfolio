import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { contact } from '../../portfolio'
import './Contact.css'

function Contact() {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>
        <AccountCircleIcon className='big_icon'/>
        Contact</h2>
      <div className='contact_container'>
        <h3 className='contact_container__head'><HomeIcon className='mid_icon'/>
        Address</h3>
        <p className='contact_container__description_indent'>{contact.address}</p>
      </div>
      <div className='contact_container'>
        <h3 className='contact_container__head'><PhoneIcon className='mid_icon'/>
        Phone Number</h3>
        <p className='contact_container__description'>{contact.phone}</p>
      </div>
      <div className='contact_container_last'>
        <h3 className='contact_container__head'><ContactMailIcon className='mid_icon'/>
        E-Mail</h3>
        <p className='contact_container__description'>{contact.email}</p>
      </div>
    </section>
  )
}

export default Contact
