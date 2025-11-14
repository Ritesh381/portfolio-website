import ScrambledText from "../ui/ScrambledText";
import ProfileCard from "../ui/ProfileCard";
import me from "../assets/me.png";
import { FolderGit2, Mail } from "lucide-react";

function Home() {
  const about =
    "Hi, I'm Ritesh Prajapati — a computer science student passionate about competitive programming, full-stack development, and AI. I enjoy solving problems and turning ideas into real projects, from web apps to AI-powered tools. Always curious and eager to learn, I'm working towards building impactful products that people love to use.";

  return (
    <div className="w-full text-white">
      <div className="min-h-[20vh] mt-20 lg:mt-30 flex flex-col items-center gap-10 lg:flex-row lg:justify-center">

        <ProfileCard
          name="Ritesh Prajapati"
          title="Full Stack Dev | CP"
          handle="Ritesh381"
          status="Online"
          contactText="Contact Me"
          avatarUrl={me}
          showUserInfo={false}
          enableTilt={true}
          onContactClick={() => alert("Contact button clicked!")}
        />

        <div className="flex flex-col max-w-[800px] p-5 gap-6 text-center md:text-left">

          <ScrambledText
            className="scrambled-text-demo md:text-2xl"
            radius={50}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            {about}
          </ScrambledText>

          <div className="flex gap-4 text-whit justify-center md:justify-start">
            <a
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 transition-all"
            >
              <FolderGit2 size={20} />
              Projects
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 transition-all"
            >
              <Mail size={20} />
              Contact
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
