import React from "react";

// Define the types for the props that ProjectCard will accept
interface ProjectCardProps {
  projectName: string;
  projectDesc: string;
  imageUrl: string;
  githubLink: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDesc,
  imageUrl,
  githubLink,
  demoLink,
}) => {
  return (
    <div
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-between
        p-6
        border
        border-gray-700
        rounded-lg
        shadow-lg
        overflow-hidden
        bg-opacity-20
        backdrop-filter
        backdrop-blur-lg

        text-white
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-xl
        hover:scale-105
      "
      style={{
        // Add a subtle glossy overlay with a linear gradient
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.0))",
      }}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={`Screenshot of ${projectName}`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Optional: Add an overlay on hover for better readability of text on image */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Project Name */}
      <h3 className="text-2xl font-bold mb-2 text-center">{projectName}</h3>

      {/* Project Description */}
      <p className="text-gray-300 text-center mb-4 flex-grow">{projectDesc}</p>

      {/* Links */}
      <div className="flex justify-center gap-4 w-full mt-auto">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            px-4
            py-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-md
            transition-colors
            duration-200
            text-sm
            font-medium
          "
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.085.671-.2.671-.447 0-.22-.007-.755-.011-1.488-2.782.601-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.607.069-.607 1.004.072 1.53 1.029 1.53 1.029.892 1.543 2.341 1.096 2.91.839.09-.65.35-1.096.634-1.347-2.22-.251-4.555-1.116-4.555-4.931 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.704.116 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.65.64.7 1.028 1.596 1.028 2.688 0 3.822-2.339 4.675-4.562 4.921.357.309.671.916.671 1.849 0 1.341-.012 2.428-.012 2.753 0 .249.192.535.676.447C21.137 20.198 24 16.442 24 12.017 24 6.484 19.523 2 14 2h-2z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>

        {/* Conditionally render Demo Link */}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              px-4
              py-2
              bg-green-600
              hover:bg-green-700
              text-white
              rounded-md
              transition-colors
              duration-200
              text-sm
              font-medium
            "
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
