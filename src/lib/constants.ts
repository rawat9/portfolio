import corpcommentImg from '$lib/assets/corpcomment.png';
import wordanalyticsImg from '$lib/assets/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'GE Digital',
    location: 'Cambridge UK',
    description: [
      'Worked as part of the frontend team on a full-stack geospatial application using Angular, RxDB and NestJS',
      'Collaborated with a developer to implement a data-access abstraction layer using the Repository Design Pattern',
      'Setup and configured Storybook for reusable Angular components'
    ],
    icon: 'fluent-mdl2:work',
    date: '2022 - 2023'
  },
  {
    title: 'Coding Mentor',
    company: 'Code Ninjas',
    location: 'London UK',
    description: [
      'Taught kids how to code (fundamentals of programming), giving regular feedback to their parents about their performance and progress.',
      'Maintain a fun learning environment.',
      "Developed a dynamic website for tracking student's progress with an analytical dashboard using Django and PostgreSQL"
    ],
    icon: 'fluent-mdl2:work',
    date: '2021 - 2022'
  }
] as const;

export const projects = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg
  }
] as const;

export const skills = {
  frameworks: [
    {
      title: 'Angular',
      icon: 'angular-icon'
    },
    {
      title: 'React',
      icon: 'react'
    },
    {
      title: 'RxJS',
      icon: 'reactivex'
    },
    {
      title: 'Svelte',
      icon: 'svelte-icon'
    },
    {
      title: 'NestJS',
      icon: 'nestjs'
    },
    {
      title: 'Jest',
      icon: 'jest'
    }
  ],

  languages: [
    {
      title: 'Python',
      icon: 'python'
    },
    {
      title: 'JavaScript',
      icon: 'javascript'
    },
    {
      title: 'TypeScript',
      icon: 'typescript-icon'
    },
    {
      title: 'Postgresql',
      icon: 'postgresql'
    },
    {
      title: 'Java',
      icon: 'java'
    }
  ]
};
