import React, { useState } from "react";

export default function NameTag() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-white text-xl md:text-3xl text-center mb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="font-sans">&lt;</span>
          <span className="font-doto cursor-pointer" onClick={handleClick}>
            Ritesh
          </span>
          <span className="font-sans">&gt;</span>
        </div>
        <div
          className={`
            mt-4
            transition-all
            duration-500
            ease-in-out
            ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="text-left text-xl p-4 border-2 border-white rounded-lg inline-block">
            <h3 className="font-bold mb-2">Properties of Ritesh:</h3>
            <ul className="list-disc list-inside">
              <li>Skill: React, Next.js, Tailwind CSS</li>
              <li>Role: Front-end Developer</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-sans">&lt;/</span>
          <span className="font-doto cursor-pointer" onClick={handleClick}>
            Prajapati
          </span>
          <span className="font-sans">&gt;</span>
        </div>
      </div>
    </div>
  );
}