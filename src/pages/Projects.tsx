import ProjectCard from "../components/ProjectCard";
import FIARY from "../assets/projectPics/FIARY.png";
import Notes from "../assets/projectPics/Notes.png";
import MovieHub from "../assets/projectPics/MovieHub.png";
import School from "../assets/projectPics/School.png";
import VM from "../assets/projectPics/VM.png";
import RS from "../assets/projectPics/RS.png";

const projects = [
  {
    name: "FIARY",
    desc: "FIARY is your personal life dashboard. It unites Journaling, Habits, Tasks, and Finance into one platform, using your data to provide actionable, holistic self-insights.",
    img: FIARY,
    github: "https://github.com/Ritesh381/FIARY",
    demo: "https://fiary.vercel.app",
  },
  {
    name: "AI Powered Notes App",
    desc: "Create notes and generate AI insights using those notes like Quiz, Flash Cards, Summary etc.",
    img: Notes,
    github: "https://github.com/Ritesh381/Simple-Notes",
    demo: "https://smpl-notes.vercel.app/",
  },
  {
    name: "Movie Hub",
    desc: "Surf and explore trending movies, Watch trailers, read about the movie and Chat with Porcorn Piolot an AI ChatBOT which tells you about movies.",
    img: MovieHub,
    github: "https://github.com/Ritesh381/Simple-Notes",
    demo: "https://movie-hub404.vercel.app/",
  },
  {
    name: "School Website",
    desc: "Built this for my school, when i was learning React.",
    img: School,
    github: "https://github.com/Ritesh381/School-website",
    demo: "https://rspublicschool.vercel.app/#courses",
  },
  {
    name: "Vending Machine",
    desc: "Curiosity hit when I was using a vending machine and this came as result. The working of QR was a challenge but somehow using only HTML, JS I gave it a life.",
    img: VM,
    github: "https://github.com/Ritesh381/Vending-Machine",
    demo: "https://thesnackpoint.netlify.app/",
  },
  {
    name: "Random Stuff",
    desc: "This was my first project, I implemented CRUD operation in vanilla js using supabase.",
    img: RS,
    github: "https://github.com/Ritesh381/Random-Stuff",
    demo: "https://random-stuff-01.netlify.app/",
  },
];

function Projects() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Projects
      </h2>
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
