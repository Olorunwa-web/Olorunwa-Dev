
// import Furniturelanding from '../assets/Screenshot (938).png';

// =============================Icons============================

import typescriptIcon from '../assets/icon-typescript.svg';
import reactIcon from '../assets/icon-react.svg';
import tailwindIcon from '../assets/icon-tailwindcss.svg';
import framerIcon from '../assets/framer-svgrepo-com (1).svg';
import NodejsIcon from '../assets/Clip path group.svg';
import mongoDBIcon from '../assets/mongodb-icon.svg';
import expressIcon from '../assets/icon-express.svg';
import emailjsIcon from '../assets/EmailJS_idNWN6e1tz_1.svg';

// ==================================================================

export const nav = [
  {
    id: 1,
    header: 'Home',
    path: 'home'
  },
  {
    id: 2,
    header: 'About',
    path: 'aboutme'
  },
  {
    id: 3,
    header: 'Project',
    path: 'projects'
  }
]

export const navmobile = [
  {
    id: 1,
    header: 'home',
    path: 'home'
  },
  {
    id: 2,
    header: 'about',
    path: 'aboutme'
  },
  {
    id: 3,
    header: 'project',
    path: 'projects'
  }
]

// =============================Projects Data============================

export const projects = [

    {
      id: 1,
      name: "HR MANAGER",
      image: "https://res.cloudinary.com/dyz6uugbr/video/upload/v1758640114/Sign_In_-_Google_Chrome_2025-09-21_06-21-41_psqp2v.mp4",
      description: "A modern HR management app streamlining recruitment, employee tracking, and performance monitoring. It provides an intuitive dashboard for HR personnel to manage records, approvals, and team workflows",
      technologies: [ {title: "ReactJS", icon: reactIcon  }, {title: "NodeJS", icon: NodejsIcon  }, {title: "MongoDB", icon: mongoDBIcon }, {title: "Express", icon: expressIcon  }, {title: "Tailwind CSS", icon: tailwindIcon  }, {title: "Framer Motion", icon: framerIcon }],
      liveLink: "https://mern-app-dp5x.vercel.app/",
      features: [ 'Admin Panel: Manage employees, departments, roles, leave requests, and notifications.','Recruitment & Onboarding: Streamlined hiring workflow with candidate tracking, interview scheduling, and onboarding checklists.', 'Performance & Feedback: Monitor KPIs, collect feedback, and generate reports for employee performance evaluation.'],
    },
    {
      id: 2,
      name: "VENTURESPHERE LANDING PAGE",
      image: "https://res.cloudinary.com/dyz6uugbr/video/upload/v1758642749/Ventsphere_-_Google_Chrome_2025-05-13_15-20-22_syjxgr.mp4",
      description: "A sleek, responsive landing page designed with modern UI principles, delivering seamless user interaction and an engaging frontend experience.Venturesphere’s landing page showcases a modern platform for innovation and collaboration.",
      technologies: [ {title: "ReactJS", icon: reactIcon  }, {title: "TypeScript", icon: typescriptIcon  }, {title: "Tailiwnd CSS", icon: tailwindIcon  }, {title: "Framer Motion", icon: framerIcon  }],
      liveLink: "https://venturesphere-app.vercel.app/",
      features: [ 'Responsive Design: Fully adaptive layout for desktops, tablets, and mobile devices, ensuring a seamless user experience across screen sizes.','Interactive Animations: Smooth hover effects, scroll-triggered animations, and engaging transitions to enhance visual appeal and user engagement.', 'Dynamic Content Rendering: Modular components for showcasing projects, team members, and testimonials with easy updates and efficient reusability'],
    },
    {
      id: 3, 
      name: "FMCG (PZ Cussons Revamp)",
      image: "https://res.cloudinary.com/dyz6uugbr/video/upload/v1758640455/FMGC_-_Google_Chrome_2025-09-21_06-28-50_emckvt.mp4",
      description: "The revamped (PZ Cussons) FMCG is a modernized digital solution designed to showcase products, brands, and customer engagement in real time. The app also enhances visibility into performance with insightful dashboards and reports.",
      technologies: [ {title: "ReactJS", icon: reactIcon  }, {title: "NodeJS", icon: NodejsIcon  }, {title: "MongoDB", icon: mongoDBIcon }, {title: "Express", icon: expressIcon  }, {title: "Tailwind CSS", icon: tailwindIcon  }, {title: "Framer Motion", icon: framerIcon }],
      liveLink: "https://fmgc-client-edat.vercel.app/",
      features: [ 'Interactive Product Catalog: Sleek, responsive UI for browsing products with category filters, real-time search, and detailed product views.', 'Filtering: Filter products by category, price, brand, or availability, for quick access to exactly what you need.'],
    },
    {
      id: 4,
      name: "AGRINEX",
      image: "https://res.cloudinary.com/dyz6uugbr/video/upload/v1758639323/AgriNex_-_Google_Chrome_2025-09-21_06-31-53_ccgpoi.mp4",
      description: "Agrinex is a forward-thinking agribusiness solutions provider dedicated to advancing sustainable farming through innovation, technology, and strategic partnerships. It connects farmers with markets, suppliers, and expert advisory services.",
      technologies: [ {title: "ReactJS", icon: reactIcon  }, {title: "Tailwind CSS", icon: tailwindIcon  }, {title: "EmailJS", icon: emailjsIcon  }],
      liveLink: "https://agri-nex-app.vercel.app/",
      features: [ 'Built with React and Tailwind CSS for a fast, modern, and fully responsive user interface across all devices.', "Forms: Dynamic contact and feedback forms with real-time validation", 'Email Automation: EmailJS integration for instant email notifications, auto-responses, and seamless communication with users'],

    },
    // {
    //   id: 5,
    //   name: "FURNITURE LANDING PAGE",
    //   image: "https://res.cloudinary.com/dyz6uugbr/video/upload/v1758642749/Ventsphere_-_Google_Chrome_2025-05-13_15-20-22_syjxgr.mp4",
    //   description: "A sleek and modern landing page for a furniture store, showcasing products and promotions.",
    //   technologies: [ {title: "ReactJS", icon: reactIcon  }, {title: "Tailwind CSS", icon: tailwindIcon  }],
    //   liveLink: "https://furniture-landing-page-henna.vercel.app/",

    // },
  ];




