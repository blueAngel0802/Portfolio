export const data = {
  siteTitle: "My Portfolio",

  hero: {
    name: "James E Moore",
    highlight: "James E Moore",
    roleLine1: "a Senior Software Engineer",
    roleLine2: "building scalable and reliable",
    roleLine3: "web applications.",
    about1:
      "I specialize in frontend and backend development, transforming ideas into functional digital experiences using modern technologies.",
    about2:
      "I’m passionate about JavaScript, React, Node.js, TypeScript, AWS, and building smooth, responsive UIs with performance in mind.",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/james-moore-2940723a1/",
        icon: "in",
      },
      { label: "GitHub", href: "https://github.com/leadstar116", icon: "gh" },
      { label: "Email", href: "mailto:jamesdev920@outlook.com", icon: "mail" },
    ],
    downloadLabel: "Download",
    // Put your resume file under /public and update this path, e.g. "/resume.pdf"
    downloadHref: "/resume.pdf",
    sideEmail: "jamesdev920@outlook.com",
    photo: {
      // Put your photo under /public and update this path, e.g. "/me.jpg"
      src: "",
      alt: "Profile photo",
    },
  },

  journey: {
    title: "My Journey",
    items: [
      {
        title: "Senior Software Engineer",
        org: "PointClearSolutions",
        date: "Oct 2022 – Oct 2025",
        desc: "Owned cloud-native delivery across client engagements; built React + Node apps; implemented AWS microservices and backend services.",
      },
      {
        title: "Senior Software Engineer",
        org: "Legalzoom",
        date: "Jan 2021 – Aug 2022",
        desc: "Led UI development with React + Tailwind; built Node services with MySQL; improved reliability with Docker and Cypress testing.",
      },
      {
        title: "Software Engineer (Mid-Level)",
        org: "Verantos",
        date: "Jun 2018 – Dec 2020",
        desc: "Built backend services and analytics tooling; developed Python components and React/Node internal tools; deployed on AWS.",
      },
      {
        title: "Software Engineer (Junior)",
        org: "Music on Hold",
        date: "Apr 2016 – Apr 2018",
        desc: "Built responsive web UIs and Laravel/PHP backend features; maintained MySQL queries and integrated frontend to backend APIs.",
      },
    ],
  },

  skills: {
    title: "Skills",
    groups: [
      {
        label: "FRONTEND",
        items: [
          { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
          { name: "React", iconClass: "devicon-react-original colored" },
          {
            name: "Tailwind CSS",
            iconClass: "devicon-tailwindcss-original colored",
          },
          { name: "HTML", iconClass: "devicon-html5-plain colored" },
          { name: "CSS", iconClass: "devicon-css3-plain colored" },
          { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
        ],
      },
      {
        label: "BACKEND",
        items: [
          { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
          { name: "Express", iconClass: "devicon-express-original" },
          { name: "NestJS", iconClass: "devicon-nestjs-original colored" },
          { name: "Python", iconClass: "devicon-python-plain colored" },
          { name: ".NET", iconClass: "devicon-dotnetcore-plain colored" },
        ],
      },
      {
        label: "DATABASE",
        items: [
          { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
          { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
          { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
          { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
        ],
      },
      {
        label: "TOOLS",
        items: [
          { name: "Git", iconClass: "devicon-git-plain colored" },
          { name: "GitHub", iconClass: "devicon-github-original" },
          { name: "Docker", iconClass: "devicon-docker-plain colored" },
          {
            name: "AWS",
            iconClass: "devicon-amazonwebservices-plain-wordmark colored",
          },
        ],
      },
    ],
  },

  projects: {
    title: "Upcoming Projects",
    subtitle: "Some exciting ideas I'm currently working on.",
    cards: [
      {
        title: "CareerOS",
        desc: "Job tracking + browser extension to save applications, store job descriptions, and manage stages with an AI assistant.",
        badge: "Coming Soon",
      },
      {
        title: "AI Chatbot Builder",
        desc: "A customizable chatbot that can be embedded on websites, trained on docs/FAQs, with admin tools for conversation logs and analytics.",
        badge: "Coming Soon",
      },
      {
        title: "School Management Dashboard",
        desc: "A modern dashboard for students, teachers, and admins: attendance, grades, scheduling, messaging, and role-based access control.",
        badge: "Coming Soon",
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project or just say hello!",
    leftTitle: "Let's Connect",
    leftText:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.",
    info: [
      { label: "Email", value: "jamesdev920@outlook.com" },
      { label: "Location", value: "Remote / USA" },
      { label: "Response Time", value: "Within 24 hours" },
    ],
  },
};
