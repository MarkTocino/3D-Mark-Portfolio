import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Mcdonald,
    FS,
    JDM,
    Pastabilities,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "Mcdonald's Crew",
      company_name: "Mcdonald's",
      icon: Mcdonald,
      iconBg: "#383E56",
      date: "August 2021 - September 2022",
      points: [
        "Implemented team-building initiatives, resulting in increased morale and a more cohesive work environment.",
        "Maintained a balance between speedy service and accurate order fullfilment, meeting both customer expecations and quality standards.",
        "Adapted to changing work priorities, demonstrating the ability to evolve meet operational needs and customer satisfaction.",
        "Managed a team and built floor plans to optimize workflow, resulting in a increase of overall productivity.",
      ],
    },
    {
      title: "Mcdonald's Manager",
      company_name: "Mcdonald's",
      icon: Mcdonald,
      iconBg: "#383E56",
      date: "July 2022 - June 2023",
      points: [
        "Proficiently handled cash transaction, accurately processed payments, and provided correct change to customers.",
        "Demonstrated attention to detail by monitoring and maintaining the cleanliness of the dining area, restroom, and kitchen equipment.",
        "Actively listened to customer orders and preferences which allowed to make accurate recommendations.",
        "Assisted co-workers with food preperation,assembly, and cooking, contributing to reduced wait times for customers.",
      ],
    },
    {
      title: "Software Engineer(Student)",
      company_name: "Flatiron School",
      icon: FS,
      iconBg: "White",
      date: "June 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborated with colleagues to work in projects to learn how to share and work on projects together",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implemented and Improved Full Stack Web Apps to fit requirements.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nothing Here Yet.",
      name: "Mark Tocino",
      designation: "Nothing Yet",
      company: "Nothing Yet",
      image: "data:image/jpeg;base64,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",
    },
  ];
  
  const projects = [
    {
      name: "Social Media APP",
      description:
        "Social Media App platform based on cars and modifications. Enables users to login, post, and like posts.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: JDM,
      source_code_link: "https://github.com/MarkTocino/PhaseFiveProject",
    },
    {
      name: "Pastabilities Menu Website",
      description:
        "Example menu for a restaurant built with Next.js and Pocketbase. This is Deployed as well. https://marktocino-italianmenu.vercel.app/appetizers",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "pocketbase",
          color: "white-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Pastabilities,
      source_code_link: "https://github.com/MarkTocino/BasicMernMenu",
    },
  ];
  export { services, technologies, experiences, testimonials, projects };