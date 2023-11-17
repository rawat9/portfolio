import tsgeneric from '$lib/assets/ts.png';

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
      'Collaborated with a developer to implement a data-access abstraction layer using the <a class="underline underline-offset-4 font-semibold" target="_blank" href="https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design#the-repository-pattern">Repository Design Pattern</a>',
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
    title: 'TS Generics',
    description:
      'Repository of type challenges to help me understand the concept of Generics in TypeScript.',
    tags: ['TypeScript'],
    link: 'https://rawat9.github.io/ts-generics/',
    imageUrl: tsgeneric
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
      title: 'Svelte',
      icon: 'svelte-icon'
    },
    {
      title: 'RxJS',
      icon: 'reactivex'
    },
    {
      title: 'NestJS',
      icon: 'nestjs'
    },
    {
      title: 'Django',
      icon: 'django-icon'
    },
    {
      title: 'Playwright',
      icon: 'playwright'
    },
    {
      title: 'Testcafe',
      icon: 'testcafe'
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
    },
    {
      title: 'Kotlin',
      icon: 'kotlin-icon'
    },
    {
      title: 'Scala',
      icon: 'scala'
    }
  ]
} as const;
