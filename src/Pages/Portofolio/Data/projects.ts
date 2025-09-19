
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  imageUrls: string[];
  liveUrl?: string;
  repoUrl?: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "CIRCLE",
    description: "Circle is a social media application inspired by Instagram and X (formerly Twitter). It enables users to register, post text or images, like and reply to posts, and follow other users. Built with React.js on the frontend and Express.js on the backend, it uses PostgreSQL and Prisma ORM for robust data management. The app features JWT-based authentication, image upload support, and a responsive design for both mobile and desktop.",
    techStack: "React.Js, Express.Js, Tailwind, PosgreSQL",
    imageUrl: "/prt1.jpg",
    imageUrls: ["/prt1.jpg"],
    liveUrl: "https://circle-sep.vercel.app/",
    repoUrl: "https://github.com/SeptaniaSep/Circle_Fe",
  },
  {
    id: 2,
    title: "TASKIFY",
    description: "Taskify is a simple task management app inspired by todo lists. It allows users to create, manage, and track daily tasks. Built with React.js, Express.js, and PostgreSQL, and styled using Tailwind CSS, the app features a responsive UI and communicates through REST APIs with proper validation and error handling.",
    techStack: "React.Js, Express.Js, Tailwind, PosgreSQL",
    imageUrl: "/prt2.jpg",
    imageUrls: ["/prt2.jpg"],
    repoUrl: "https://github.com/AlexJosua/Taskify",
  },
  {
    id: 3,
    title: "FOODYS",
    description: "E-commerce platform for ordering food, beverages, and desserts, offering a curated selection of traditional Indonesian and modern dishes. Built with Next.js, Vite, Tailwind CSS, and shadcn/ui, Foodys delivers a clean, responsive, and user-friendly interface on both web and mobile, with intuitive navigation and visually enticing presentation. ",
    techStack: "Next.Js, Shadecn, Tailwind",
    imageUrl: "/pf2.jpg",
    imageUrls: ["/pf1.jpg", "/pf2.jpg", "/pf3.jpg", "/pf4.jpg",  ],
    liveUrl: "https://foodys-xi.vercel.app/",
    repoUrl: "https://github.com/SeptaniaSep/Foodys",
  },
    {
    id: 4,
    title: "Personal Web Portfolio",
    description: "Ini adalah sebuah personal web portofolio",
    techStack: "React.js, Tailwind, shadecn",
    imageUrl: "/ptf2.jpg",
    imageUrls: ["/ptf1.jpg", "/ptf2.jpg" ],
    liveUrl: "",
    repoUrl: "",
  },

];

