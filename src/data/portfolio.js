export const personalInfo = {
  name: 'Srikar',
  title: 'Software Developer',
  tagline: 'I build clean, performant web experiences.',
  email: 'srikar0275@gmail.com',
  location: 'Available for remote work',
  photo: '/profile.jpg',
  social: {
    github: 'https://github.com/srikar0275',
    linkedin: 'https://www.linkedin.com/in/srikar-enduvasi-098a25276/',
    instagram: 'https://www.instagram.com/srikar_enduvasi/',
    whatsapp: 'https://wa.me/917569590269',
    twitter: 'https://twitter.com/srikar',
  },
  resumeUrl: '#',
}

export const about = {
  paragraphs: [
    'I am a passionate developer focused on crafting intuitive digital products. I enjoy turning complex problems into simple, elegant solutions.',
    'When I am not coding, you can find me exploring new technologies, contributing to open source, or sharpening my skills through side projects.',
  ],
  highlights: [
    { label: 'Years of experience', value: '3+' },
    { label: 'Projects completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Vite', 'Figma', 'VS Code'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Rock Paper Scissors',
    description:
      'Interactive browser game where you play against the computer. Pick rock, paper, or scissors, track your score, and get instant win/lose/draw feedback.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '/projects/rock-paper-scissors/index.html',
    featured: true,
  },
  {
    id: 2,
    title: 'Tic Tac Toe',
    description:
      'Classic 3×3 tic tac toe game against the computer. Place X marks, track wins and draws, and the board resets automatically after each round.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '/projects/tic-tac-toe/index.html',
    featured: true,
  },
]

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]
