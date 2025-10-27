import ScrambledText from "../ui/ScrambledText";
import ProfileCard from "../ui/ProfileCard";
import me from "../assets/me.png";

function Home() {
  const about =
    "Hi, I'm Ritesh Prajapati — a computer science student passionate about competitive programming, full-stack development, and AI. I enjoy solving problems and turning ideas into real projects, from web apps to AI-powered tools. Always curious and eager to learn, I'm working towards building impactful products that people love to use.";
  return (
    <div>
      <div className="min-h-[20vh] mt-20 lg:mt-30 xl:mt-30 flex flex-col items-center justify-around lg:flex-row xl:flex-row md:flex-row">
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
        <div className="flex flex-col md:text-2xl md:max-w-200 xl:max-w-600">
          <ScrambledText
            className="scrambled-text-demo md:text-2xl"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".:"}
          >
            {about}
          </ScrambledText>
        </div>
      </div>
    </div>
  );
}

export default Home;
