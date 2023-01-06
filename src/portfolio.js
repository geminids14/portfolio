import amathSvg from './assets/amath.svg'
import lineLogoSvg from './assets/line-logo.svg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://geminids14.github.io/portfolio',
  title: 'SK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Suriya Kuernkuob',
  role: 'electronic software engineer',
  description:
    'Since I was a child, technology has seemed miraculous to me. So I was very determined to study science and math. Until I studied the programming, I felt astonished. It breaks the limits of human memory, accuracy, and computation. It makes everything easier just by putting ideas into it.',
  resume: 'https://github.com/geminids14/portfolio/blob/master/src/assets/Resume.pdf',
  social: {
    github: 'https://github.com/geminids14',
    line: 'https://line.me/ti/p/qvQ3zsvsQK',
    lineLogo: lineLogoSvg,
  },
}

const works = [
  {
    role: 'Backend Developer',
    time: 'January 2023-Present',
    place: 'Baania (Thailand) Co.Ltd.',
    descriptions: [
      'Design, implementation and maintaining backend systems',
    ],
  },
  {
    role: 'Electronic Software Engineer',
    time: 'June 2017-December 2022',
    place: 'Mitsubishi Electric Automation (Thailand) Co.Ltd.',
    descriptions: [
      'Design, implementation and maintaining C code for microcontroller',
      'C# for Windows apps, Java&Kotlin for Android Apps.',
      'Electrical wiring. Hardware testing.',
      'Electronic and electrical circuit analysis.',
    ],
  },
  {
    role: 'Electrical Engineer Trainee',
    time: 'June 2016 - July 2016',
    place: 'MP-MEC Co, Ltd.',
    descriptions: [
      'Auto parking maintenance',
      'Electrical wiring. Hardware testing.',
      'Electronic and electrical circuit analysis.',
      'Electrical drawing with Autodesk AutoCAD',
      'Auto parking user manual'
    ],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'A-Math Online',
    image: amathSvg,
    description:
      'A-Math is like scrabble but it\'s connecting numbers according to mathematical equations. Whether adding, subtracting, multiplying, and dividing onto the board for the best result. At the end of the match, the person with the most point wins.',
    stack: ['Flutter/Dart', 'Golang'],
    livePreview: 'https://play.google.com/store/apps/details?id=com.geminids14.amath',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C/C++',
  'C#',
  'Java',
  'Kotlin',
  'Flutter/Dart',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Golang',
  'Rest API',
  'GRPC',
  'Git',
  'Circuit Analysis',
  'Electronic Measuring',
  'IT technical errors solving'
]

const educations = [
  {
    name: 'King Mongkut\'s Institute of Technology Ladkrabang',
    time: '2013-2017',
    place: 'Bangkok, Thailand',
    cert: 'Bachelor of Engineering in Electrical Engineering',
    gpa: '3.70/4.00',
  },
  {
    name: 'Mahidol Wittayanusorn School',
    time: '2010-2013',
    place: 'Nakhon Pathom, Thailand',
    cert: 'Certificate of Secondary Education',
    gpa: '3.27/4.00',
  },
]

const contact = {
  address: 'No. 2/7, PM. Mansion, Ramkhamhaeng 52/2 alley, Ramkhamhaeng road, Hua Mak sub-district, Bang Kapi district, Bangkok, Thailand',
  phone: '+66963953845',
  // email is optional - if left empty Contact section won't show up
  email: 'geminids14@gmail.com',
}

export { header, about, works, projects, skills, educations, contact }
