import React from 'react'
import MacWindow from './MacWindow'
import './cli.scss'
import Terminal from 'react-console-emulator'

const Cli = ({windowName}) => {

  const COMMANDS = {

    about: {
      description: 'Quick intro about me.',
      usage: 'about',
      fn: () =>
        [
          'Hi, I’m Harsh Dalal.',
          'I build web apps and love clean UI + solid engineering.',
          '',
          'Run `projects` to see what I’ve built.',
        ].join('\n'),
    },

    skills: {
      description: 'List my skills/stack.',
      usage: 'skills',
      fn: () =>
        [
          'Core: JavaScript, React, HTML, CSS/Sass',
          'Tools: Git/GitHub, Vite, npm',
          'Also: Node.js (basics), APIs, responsive UI',
          '',
          '(Replace this with your real stack anytime.)',
        ].join('\n'),
    },

    projects: {
      description: 'Show highlighted projects.',
      usage: 'projects',
      fn: () =>
        [
          'Highlighted projects (dummy):',
          '',
          '- Portfolio OS: macOS-style portfolio with draggable windows',
          '- Music UI: Spotify-style mini player window',
          '- Notes: quick notes app with clean layout',
          '',
          'Tip: run `socials` to see links.',
        ].join('\n'),
    },

    experience: {
      description: 'Experience summary (dummy).',
      usage: 'experience',
      fn: () =>
        [
          'Experience (dummy):',
          '- Frontend Developer — Built responsive UIs, reusable components, and improved UX.',
          '- Freelancer — Delivered small websites and landing pages.',
          '',
          '(Replace with your real experience.)',
        ].join('\n'),
    },

    education: {
      description: 'Education summary (dummy).',
      usage: 'education',
      fn: () =>
        [
          'Education (dummy):',
          '- Bachelor’s / Diploma / Bootcamp (add yours here)',
        ].join('\n'),
    },

    contact: {
      description: 'How to reach me.',
      usage: 'contact',
      fn: () =>
        [
          'Contact:',
          '- Email: run `email`',
          '- Socials: run `socials`',
        ].join('\n'),
    },

    socials: {
      description: 'Social links (dummy).',
      usage: 'socials',
      fn: () =>
        [
          'Socials (dummy):',
          '- GitHub: https://github.com/your-username',
          '- LinkedIn: https://linkedin.com/in/your-handle',
          '- Twitter/X: https://x.com/your-handle',
          '',
          '(Replace these with your real links.)',
        ].join('\n'),
    },

    resume: {
      description: 'Resume link placeholder.',
      usage: 'resume',
      fn: () =>
        [
          'Resume:',
          '- Add a link to your resume window or hosted PDF here.',
          '  Example: https://your-site.com/resume.pdf',
        ].join('\n'),
    },

    email: {
      description: 'Show email address (dummy).',
      usage: 'email',
      fn: () => 'your.email@example.com',
    },

    whoami: {
      description: 'Display current user.',
      usage: 'whoami',
      fn: () => 'guest@portfolio',
    },

    date: {
      description: 'Show current date/time.',
      usage: 'date',
      fn: () => new Date().toString(),
    },

    echo: {
      description: 'Echo passed a string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' '),
    },

  }

  const WELCOME = [
    'Welcome to My Portfolio CLI',
    '',
    'Type `help` to list available commands.',
    'Try: about | projects | skills | socials',
  ].join('\n')

  return (
    <MacWindow windowName={windowName}>
        <div className="cli-window">
            <Terminal 
                commands={COMMANDS}
                welcomeMessage={WELCOME}
                promptLabel = {"harshdalal:~$"}
                promptLabelStyle = {{color :"#23ac11"}}
            />
        </div>
    </MacWindow>
  )
}

export default Cli
