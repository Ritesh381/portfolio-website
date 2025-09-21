import Galaxy from "./ui/Galaxy";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import ClickSpark from "./ui/ClickSpark";

function App() {
  return (
    <div className="">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* This div will hold your galaxy background */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: -1, // Puts the galaxy behind all other content
          }}
        >
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={0.5}
            glowIntensity={0.1}
            saturation={0.2}
            hueShift={70}
          />
        </div>

        <div className="">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </ClickSpark>
    </div>
  );
}

export default App;
