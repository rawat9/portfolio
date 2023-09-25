import corpcommentImg from '$lib/assets/corpcomment.png';
import rmtdevImg from '$lib/assets/rmtdev.png';
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
    title: 'BEng (H) Software Engineering',
    company: 'University of Greenwich',
    location: 'London UK',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: 'fluent:hat-graduation-16-regular',
    date: '2020 - present'
  },
  {
    title: 'Software Engineer Intern',
    company: 'GE Digital',
    location: 'Cambridge UK',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: 'fluent-mdl2:work',
    date: '2022 - 2023'
  },
  {
    title: 'Coding Mentor',
    company: 'Code Ninjas',
    location: 'London UK',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
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
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg
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
