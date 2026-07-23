export const personalInfo = {
  name: 'Srikar',
  title: 'Web Developer',
  tagline: 'I build clean, performant web experiences.',
  email: 'srikar0275@gmail.com',
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
    'I\'m Srikar, a web developer who cares about building products that feel simple to use and solid under the hood. I like taking ideas from rough concept to something people can actually open in the browser and enjoy.',
    'Most of my work lives in the web — frontends that are clean and responsive, backends that stay reliable, and the small details in between that make an app feel finished. I learn fast, iterate often, and pay attention to how something feels, not just how it works.',
    'Recently I\'ve been building tools like VoiceForge for voice and video workflows, and Ritora Technologies for project and task management. Those projects reflect what I enjoy: practical software that saves time and helps people get things done.',
    'When I\'m not at the keyboard, I like exploring new tech, improving my craft through side projects, and pushing myself to build things a little better than the last time.',
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
    title: 'VoiceForge',
    description:
      'Voice and video studio for generating natural voiceovers from scripts. Supports tone presets, cloned voices, Telugu-native tuning, and demo mode for quick previews.',
    tags: ['React', 'JavaScript', 'ElevenLabs API'],
    liveUrl: 'https://voice-over-web-xi.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Ritora Technologies',
    description:
      'Workflow dashboard to manage projects, stages, and tasks. Secure sign-in for teams to track work across the full project lifecycle.',
    tags: ['React', 'Dashboard', 'Authentication'],
    liveUrl: 'https://workflow-project-ten.vercel.app/dashboard',
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
