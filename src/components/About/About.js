import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {Box} from "@mui/material";
import Me from '../../assets/me.jpg';
import { about } from '../../portfolio'
import './About.css'

function About() {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <Box sx={{ boxShadow: 1, bgcolor: 'primary.main' }} alt='image of developer' component='img' src={Me} width={{xs: '35vh', md: '40vh'}}
        height={{xs: '35vh', md: '40vh'}}
        borderRadius='50%' p='0.75rem' mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
      {name && (
        <h1>
          Hi, I&rsquo;m <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role.match('^[aieouAIEOU].*')?'An':'A'} {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
