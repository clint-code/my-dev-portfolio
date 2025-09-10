import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text, Icon } from "@once-ui-system/core";

const person: Person = {
  firstName: "Clinton",
  lastName: "Mutinda",
  name: `Clinton Mutinda`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "mutinda1993@gmail.com",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kiswahili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/clint-code",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/clintonmutinda/",
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/kiokoclint#",
  },
  {
    name: "Dribbble",
    icon: "dribbble",
    link: "https://dribbble.com/Clint_Kioko",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/moviefusion",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        {/* <strong className="ml-4">My best work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />  */}
        <Icon name="feature" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Clinton Mutinda, a software developer with 5 years of experience in
      Front-end web development.<br />After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a front-end web developer with a passion for transforming complex challenges
        into simple, elegant design solutions. My work spans digital interfaces built from user interface designs,
        interactive user experiences, and the convergence of design and technology.
        <br />
        I've had 6 years of experience handling complex HTML and CSS alongisde JavaScript frameworks in building
        quality web applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "MFS Technologies",
        timeframe: "May 2021 - Present",
        role: "Front End Web Developer",
        achievements: [
          <>
            Developed a digital marketpalce dubbed InsureMe, within 6 months, enabling users to seamlessly purchase
            policies from a diverse list of insurance providers and get claims.
          </>,
          <>
            Redesigned the company's new official website showcasing the products and solutions offered to clients. This was
            achieved by collaborating with the back-end, front-end and UI teams, building the within 1 month and 2 weeks of testing and debugging
          </>,
          <>
            Developed the loan application form and alongside, the loan dashboard that keeps track of All
            data concerning loans, customers and payments.
          </>,
          <>
            Developed the MyMobi page that shows how to use the loan application product with steps on how to register, apply and FAQs.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/insure-me/insure-me-homepage.jpg",
            alt: "InsureMe",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/mfs/mfs-landing-page.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creative VMYLR",
        timeframe: "November 2016 - May 2021",
        role: "Front End Web Developer",
        achievements: [
          <>
            Spearheaded the development of front-facing websites for major corporates in Kenya
            including <b>Strathmore Business School (SBS), CKL Africa</b> and <b>Ramco Group</b>
            affiliates such as <b>Office Technologies</b> and <b>Sai Office</b>.
          </>,
          <>
            Managing content and upddates for corporate clients using Wordpress and Drupal
            for clients such as <b> Crown Paints, I&amp;M Banks</b>  and <b>Total Kenya</b>
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/office-technologies-landing-page.jpg",
            alt: "Office Technologies Landing Page",
            width: 16,
            height: 10,
          },
          {
            src: "/images/projects/project-01/coopers-africa-faqs.jpg",
            alt: "CKL Africa FAQs Page",
            width: 16,
            height: 10,
          },
        ],
      },
      {
        company: "Bean Interactive",
        timeframe: "May 2016 - October 2016",
        role: "Graphic Designer Intern",
        achievements: [
          <>
            Contributed to the creation of creative posters for social media posts
          </>,
          <>
            Designed motion graphic social media posts in the form of GIFs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Strathmore University - Nairobi, Kenya",
        description: <>Bachelor of Business Information Technology</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development skills",
        description: (
          <>Able to develop user interfaces using these core web technologies and styling frameworks .</>
        ),
        tags: [
          {
            name: "HTML5",
            icon: "html5",
          },
          {
            name: "CSS3",
            icon: "css3",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "Angular Material",
            icon: "angular",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/nerd-interpreter/nerd-interpreter.jpg",
            alt: "Nerd Interpreter Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/my-mobi/mymobi-landing-page.jpg",
            alt: "MyMobi Landing Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web Frameworks and Libraries",
        description: (
          <>Able to build Single Page Applications and web applications using these libraries and frameworks:</>
        ),
        tags: [
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "Vue JS",
            icon: "vuejs",
          },
          {
            name: "React",
            icon: "reactjs",
          },
          {
            name: "Next JS",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/insure-me/insure-me-homepage.jpg",
            alt: "InsureMe",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/my-mobi/mymobi-dashboard.jpg",
            alt: "MyMobi Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps",
        description: (
          <>Building images using Docker, that are pushed to an image repository</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          }
        ],
      },
      {
        title: "UI Design",
        description: (
          <>Designing UI prototypes:</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Adobe XD",
            icon: "adobexd",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/ui-music-app.jpg",
            alt: "Music App UI Design",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ui-404-page.jpg",
            alt: "404 Page UI Design",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   title: "Next.js",
      //   description: (
      //     <>Building next gen apps with Next.js + Once UI + Supabase.</>
      //   ),
      //   tags: [
      //     {
      //       name: "JavaScript",
      //       icon: "javascript",
      //     },
      //     {
      //       name: "Next.js",
      //       icon: "nextjs",
      //     },
      //     {
      //       name: "Supabase",
      //       icon: "supabase",
      //     },
      //   ],
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
