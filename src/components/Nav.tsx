import { NavLink } from 'react-router-dom';
import { Download } from 'lucide-react';

function Nav() {
  const commonLinkClasses =
    'text-sm md:text-base text-neutral-200 hover:text-white font-medium mx-4 transition-all duration-300 py-2';

  const activeLinkClasses = 'text-white border-b-2 border-blue-500';

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50 
        flex justify-between items-center 
        px-4 py-3 md:px-8 md:py-4  // Responsive padding
        bg-neutral-900/50 backdrop-blur-lg
        font-doto
      "
    >
      {/* Navigation Links */}
      <div>
        <NavLink
          to="/"
          end // 'end' prop ensures this only matches the exact "/" path
          className={({ isActive }) =>
            `${commonLinkClasses} ${isActive ? activeLinkClasses : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${commonLinkClasses} ${isActive ? activeLinkClasses : ''}`
          }
        >
          Project
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${commonLinkClasses} ${isActive ? activeLinkClasses : ''}`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Action Button */}
      <div>
        <button
          className="
            flex items-center gap-2 // Aligns icon and text
            px-3 py-2 md:px-4 md:py-2 // Responsive padding
            text-sm md:text-base // Responsive text size
            bg-blue-600 hover:bg-blue-700 
            text-white font-bold 
            rounded-md 
            transition-colors duration-300
          "
        >
          <Download size={16} />
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Nav;