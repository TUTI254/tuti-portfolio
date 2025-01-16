import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Collins',
    lastName:  'Tuti',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Africa/Nairobi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Swahili']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/TUTI254',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/collinsamwayituti/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:collinsamwayi254@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Software Engineer </>,
    subline: <>I'm Tuti, an Innovative Full stack Software Engineer with over <InlineCode>3 Years of Experience</InlineCode>, in building scalable enterprise applications and streamlining business processes both Locally and Internationally .<br/> I specialize in creating high-performance applications that enhance workflows and user experiences.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Tuti is a Nairobi-based Softwre engineer with a passion for transforming complex challenges into simple, elegant solutions. His work  spans frontend and backend development, cloud technologies like AWS, and DevOps practices such as CI/CD, delivering optimized and sustainable solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'SOUQ',
                timeframe: 'Oct 2023 - Dec 2024',
                role: 'Fullstack Software Engineer',
                achievements: [
                    <> Architected internal service automation platform using React and TypeScript, resulting in 47% improvement in team workflow efficiency</>,
                    <> Engineered frontend performance optimizations through advanced caching and lazy loading techniques, resulting in 33% reduction in page load times.</>,
                    <> Engineered AI-powered microservices architecture using Python, Flask, and TensorFlow, incorporating predictive analytics and machine learning models for dynamic resource allocation, resulting in 55% improvement in system scalability and 40% enhanced request handling through intelligent load balancing.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Nomad Lab',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'TapInAfrica',
                timeframe: 'Jun 2023 - Sep 2023',
                role: 'Fullstack Software Engineer',
                achievements: [
                    <>Developed reusable component library using React and TypeScript, resulting in 37% reduction in development time across 5 internal applications.</>,
                    <>Orchestrated data processing pipeline using Python and Django, resulting in successful handling of 100,000+ daily transactions.</>,
                    <>Optimized API performance through implementation of Redis caching, resulting in 21% improvement in data retrieval speed.</>
                ],
                images: [ ]
            },
            {
                company: 'Vell Magazine',
                timeframe: 'Mar 2023 - Aug 2023',
                role: 'Frontend Software Engineer',
                achievements: [
                    <>Spearheaded state management optimization using Redux and Context API, resulting in 40% improvement in application stability.</>,
                    <>Created modular component architecture using Material UI and React, resulting in 35% reduction in codebase complexity.</>,
                ],
                images: [ ]
            },
            {
                company: 'Patazone',
                timeframe: 'May 2021 - Jun 2023',
                role: 'Fullstack Software Engineer',
                achievements: [
                    <>Led development of e-commerce platform modernization using Laravel and Vue.js, resulting in 50% reduction in page load times and 31% increase in customer conversion rates.</>,
                    <> Architected distributed caching system using Redis and Memcached, resulting in handling 3x more concurrent users while maintaining sub-second response times.</>,
                    <> Implemented automated CI/CD pipeline using Jenkins and Docker, resulting in reduction of deployment time from 3 hours to 15 minutes and 73% fewer production bugs.</>
                ],
                images: [ ]
            },
            {
                company: 'Riziki Commodities',
                timeframe: 'Aug 2022 - Dec 2022',
                role: 'Frontend Software Engineer',
                achievements: [
                    <>Integrated Safaricom's Daraja API using Node.js and Express, resulting in 60% increase in successful payment transactions.</>,
                    <> Established automated testing framework using Jest and React Testing Library, resulting in 85% code coverage across critical components.</>,
                    <> Built real-time monitoring dashboard using WebSocket and React, resulting in 45% faster incident response time.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'St. Paul University',
                description: <>Studied a Diploma in Business & IT.</>,
            },
            
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };