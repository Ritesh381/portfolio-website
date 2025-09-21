import SplitText from "../ui/SplitText";
import ProfileCard from "../ui/ProfileCard";
import me from "../assets/me.png";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
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
        <div className="flex flex-col my-5">
          <SplitText
            text="Ey Yo!"
            className="md:text-2xl font-doto text-center text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Thanks for showing interest in getting to know me"
            className="md:text-2xl font-doto text-center text-white"
            delay={10}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-white font-doto px-4 my-5 max-w-200 text-lg">
            Hi, I'm Ritesh Prajapati — a computer science student passionate
            about competitive programming, full-stack development, and AI. I
            enjoy solving tough problems and turning ideas into real projects,
            from web apps to AI-powered tools. Always curious and eager to
            learn, I'm working towards building impactful products that people
            love to use.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
