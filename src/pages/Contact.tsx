import { Linkedin, Twitter, Instagram, Github, Youtube, Facebook, Mail, Phone, Video } from "lucide-react";
import { FaWhatsapp, FaDiscord, FaTelegram } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

function Contact() {
  // const navigate = useNavigate()
  const socials = [
    { name: "Linkedin", icon: <Linkedin size={40} color="#0A66C2" />, link: "https://www.linkedin.com/in/ritesh-prajapati-7830582a7/" },
    { name: "Twitter", icon: <Twitter size={40} color="#1DA1F2" />, link: "https://x.com/RITESHP7672351" },
    { name: "Instagram", icon: <Instagram size={40} color="#E1306C" />, link: "https://www.instagram.com/ritesh_0006r/" },
    { name: "Whatsapp", icon: <FaWhatsapp size={40} color="#25D366" />, link: "https://wa.me/917218548912?text=Hi got your number from RiteshJS" },
    { name: "Mail", icon: <Mail size={40} color="#0078FF" />, link: "mailto:prajapatiritesh381@gmail.com?subject=Hello%20Ritesh&body=Hi%20Ritesh%2C%0A%0AI%20saw%20your%20portfolio..." },
    { name: "Github", icon: <Github size={40} color="#f9f9f9ff" />, link: "https://github.com/Ritesh381" },
    { name: "Youtube", icon: <Youtube size={40} color="#FF0000" />, link: "https://www.youtube.com/@ritesh-pra" },
    { name: "Facebook", icon: <Facebook size={40} color="#1877F2" />, link: "https://www.facebook.com/profile.php?id=100058411183441" },
    { name: "Discord", icon: <FaDiscord size={40} color="#5865F2" />, link: "https://www.discordapp.com/users/795242385000759297" },
    { name: "Call me", icon: <Phone size={40} color="#25D366" />, link: "tel:+917218548912" },
    { name: "FaceTime", icon: <Video size={40} color="#007AFF" />, link: "facetime:prajapatiritesh381@gmail.com" },
    { name: "Telegram", icon: <FaTelegram size={40} color="#0088cc" />, link: "https://t.me/ritesh2006" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white space-y-10 px-4">
      {/* Social icons grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <div className="mb-2">{s.icon}</div>
            <span className="text-sm">{s.name}</span>
          </a>
        ))}
      </div>

      {/* Action buttons */}
      {/* <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors">
          Download VCard
        </button>
        <button onClick={()=>navigate("/")} className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors">
          Go to Home Page
        </button>
      </div> */}
    </div>
  );
}

export default Contact;
