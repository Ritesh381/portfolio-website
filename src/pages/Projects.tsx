import ProjectCard from '../components/ProjectCard';
import FIARY from "../assets/projectPics/FIARY.png";
import Notes from "../assets/projectPics/Notes.png";
import MovieHub from "../assets/projectPics/MovieHub.png";
import School from "../assets/projectPics/School.png";
import VM from "../assets/projectPics/VM.png";
import RS from "../assets/projectPics/RS.png";

const projects = [
  {
    name: "FIARY",
    desc: "A diary with a personality crisis — it talks back to you like your sassiest mirror. Still under construction 👷‍♂️",
    img: FIARY,
    github: "https://github.com/Ritesh381/FIARY",
  },
  {
    name: "AI Powered Notes App",
    desc: "Why write notes when AI can do it faster (and neater) than you? Study material in seconds, procrastination in minutes.",
    img: Notes,
    github: "https://github.com/Ritesh381/Simple-Notes",
    demo: "https://smpl-notes.vercel.app/",
  },
  {
    name: "Movie Hub",
    desc: "A paradise for movie nerds 🍿. Stalk films, explore trailers, and chat with PopcornPilot — your overly dramatic AI movie buddy.",
    img: MovieHub,
    github: "https://github.com/Ritesh381/Simple-Notes",
    demo: "https://movie-hub404.vercel.app/",
  },
  {
    name: "School Website",
    desc: "Built this for my school when I was 11. Spoiler: it’s still better than some ‘professional’ websites out there 😂",
    img: School,
    github: "https://github.com/Ritesh381/School-website",
    demo: "https://rspublicschool.vercel.app/#courses",
  },
  {
    name: "Vending Machine",
    desc: "A vending machine that takes QR payments. Sadly, it doesn’t dispense friendship or free WiFi (yet).",
    img: VM,
    github: "https://github.com/Ritesh381/Vending-Machine",
    demo: "https://thesnackpoint.netlify.app/",
  },
  {
    name: "Random Stuff",
    desc: "The internet’s junk drawer — share weird ideas, odd products, or just whatever you had for lunch. People will still look 👀",
    img: RS,
    github: "https://github.com/Ritesh381/Random-Stuff",
    demo: "https://random-stuff-01.netlify.app/",
  },
];


function Projects() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.name}
            projectDesc={project.desc}
            imageUrl={project.img}
            githubLink={project.github}
            demoLink={project.demo} // optional
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
