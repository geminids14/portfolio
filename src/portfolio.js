import amathSvg from './assets/amath.svg'

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
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/geminids14',
  },
}

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

const contact = {
  address: 'No. 2/7, PM. Mansion, Ramkhamhaeng 52/2 alley, Ramkhamhaeng road, Hua Mak sub-district, Bang Kapi district, Bangkok, Thailand',
  phone: '+66963953845',
  // email is optional - if left empty Contact section won't show up
  email: 'geminids14@gmail.com',
}

export { header, about, projects, skills, contact }
