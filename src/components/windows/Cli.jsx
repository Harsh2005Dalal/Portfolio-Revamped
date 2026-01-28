import React from 'react'
import MacWindow from './MacWindow'
import './cli.scss'
import Terminal from 'react-console-emulator'

const Cli = ({windowName}) => {

    const COMMANDS = {
        help: {
          description: 'List available commands.',
          usage: 'help',
          fn: () =>
            [
              'Available commands:',
              '',
              'about        — Quick intro',
              'skills       — Tech stack',
              'projects     — Featured projects',
              'experience   — Work experience',
              'education    — Education background',
              'socials      — Social links',
              'resume       — Resume info',
              'email        — Contact email',
              'whoami       — Current user',
              'date         — Current date/time',
              'clear        — Clear the terminal',
              'echo <text>  — Print text',
              '',
              'Tip: Commands are case-sensitive.',
            ].join('\n'),
        },
      
        about: {
          description: 'Quick intro about me.',
          usage: 'about',
          fn: () =>
            [
              'Hi, I’m Harsh Dalal 👋',
              '',
              'I’m a frontend-focused developer who enjoys building',
              'clean, interactive UIs with solid engineering underneath.',
              '',
              'This portfolio is built like an OS — try opening apps!',
            ].join('\n'),
        },
      
        skills: {
          description: 'List my skills and tools.',
          usage: 'skills',
          fn: () =>
            [
              'Tech Stack:',
              '',
              'Frontend:',
              '- JavaScript (ES6+)',
              '- React, Next.js',
              '- HTML5, CSS3, SCSS',
              '- Tailwind CSS',
              '',
              'Tools:',
              '- Git & GitHub',
              '- Vite',
              '- npm',
              '',
              'Currently exploring:',
              '- Animations & UI systems',
              '- Better DX & performance',
            ].join('\n'),
        },
      
        projects: {
          description: 'Show featured projects.',
          usage: 'projects',
          fn: () =>
            [
              'Featured Projects:',
              '',
              '1. Portfolio OS',
              '   - macOS-style UI with draggable windows',
              '   - Dock, notes, terminal, music player',
              '',
              '2. Notes App',
              '   - Markdown-based notes',
              '   - Clean, distraction-free UI',
              '',
              '3. Music UI',
              '   - Spotify-inspired mini player',
              '   - Smooth animations',
              '',
              'Type `socials` to view links.',
            ].join('\n'),
        },
      
        experience: {
          description: 'Work experience summary.',
          usage: 'experience',
          fn: () =>
            [
              'Experience:',
              '',
              '- Frontend Developer',
              '  Built responsive interfaces and reusable components.',
              '',
              '- Freelance Projects',
              '  Delivered small websites and landing pages.',
              '',
              '(Details available on request.)',
            ].join('\n'),
        },
      
        education: {
          description: 'Education background.',
          usage: 'education',
          fn: () =>
            [
              'Education:',
              '',
              '- Bachelor’s degree / Diploma / Bootcamp',
              '- Focus on web development and software fundamentals',
            ].join('\n'),
        },
      
        socials: {
          description: 'Social links.',
          usage: 'socials',
          fn: () =>
            [
              'Find me online:',
              '',
              'GitHub   : https://github.com/your-username',
              'LinkedIn : https://linkedin.com/in/your-handle',
              'Twitter : https://x.com/your-handle',
            ].join('\n'),
        },
      
        resume: {
          description: 'Resume information.',
          usage: 'resume',
          fn: () =>
            [
              'Resume:',
              '',
              'Open the Resume app from the dock',
              'or visit:',
              'https://your-site.com/resume.pdf',
            ].join('\n'),
        },
      
        email: {
          description: 'Show contact email.',
          usage: 'email',
          fn: () => 'harsh2005dalalwork@gmail.com',
        },
      
        whoami: {
          description: 'Display current user.',
          usage: 'whoami',
          fn: () => 'guest@harsh-portfolio',
        },
      
        date: {
          description: 'Show current date and time.',
          usage: 'date',
          fn: () => new Date().toString(),
        },
      
        clear: {
          description: 'Clear the terminal.',
          usage: 'clear',
          fn: () => '',
        },
      
        echo: {
          description: 'Echo input text.',
          usage: 'echo <text>',
          fn: (...args) => args.join(' '),
        },

        Anushka: {
            description: 'Hello There!!',
            usage: 'Anushka',
            fn: () =>
                [
                  'Dayummm:',
                  '',
                  'You really are smart enough to find it',
                ].join('\n'),
          },
      };
      

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
                noDefaults
            />
        </div>
    </MacWindow>
  )
}

export default Cli
