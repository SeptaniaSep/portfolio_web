
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
    description: "Circle is a social media application inspired by Instagram and X (formerly Twitter).",
    techStack: "React.Js, Express.Js, Tailwind, PosgreSQL",
    imageUrl: "/prt1.jpg",
    imageUrls: ["/prt1.jpg"],
    liveUrl: "https://circle-sep.vercel.app/",
    repoUrl: "https://github.com/SeptaniaSep/Circle_Fe",
  },
  {
    id: 2,
    title: "TASKIFY",
    description: "Taskify is a simple task management app inspired by todo lists.",
    techStack: "React.Js, Express.Js, Tailwind, PosgreSQL",
    imageUrl: "/prt2.jpg",
    imageUrls: ["/prt2.jpg"],
    repoUrl: "https://github.com/AlexJosua/Taskify",
  },
  {
    id: 3,
    title: "FOODYS",
    description: "Foodys is e-commerce application showcasing a variety of traditional Indonesian dishes and modern cuisine. ",
    techStack: "Next.Js, Shadecn, Tailwind",
    imageUrl: "/prt3.jpg",
    imageUrls: ["/prt3.jpg", "/prt3.jpg", "/prt3.jpg"],
    liveUrl: "https://foodys-xi.vercel.app/",
    repoUrl: "https://github.com/SeptaniaSep/Foodys",
  },
  {
    id: 4,
    title: "Masih Mikir ",
    description: "Masih mikir mau bikin apa lagi besti, coba aku kasih saran dong",
    techStack: "Bahasa apapun selain bahasa wanita",
    imageUrl: "/photo.png",
    imageUrls: ["/photo.jpg"],
    liveUrl: "",
    repoUrl: "",
  },

];

