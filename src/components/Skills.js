import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="grid grid-cols-1 md:grid-cols-8 md:grid-flow-row py-10 px-6 bg-gradient-to-l from-hoverColor via-primary to-hoverColor">
      <span className="col-span-8 text-xl text-left pl-6 font-bold text-white">
        Skills
      </span>
      <div className="col-span-full mt-5 md:mt-0 md:col-span-4 text-white">Frontend</div>
      <div className="hidden col-span-full md:grid md:col-span-4 text-white">Backend</div>
      <div className="md:row-span-1 md:col-span-1"></div>
      <div className="col-span-full md:row-span-1 md:col-span-2 text-white font-extralight bg-secondary bg-opacity-20 rounded-lg mt-2 py-10 px-6 flex flex-col items-start justify-start">
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            className="h-14 w-14"
          />
          <span className="flex items-center justify-center ml-5 italic">
            Hypertext Markup Language
          </span>
        </div>

        <div className="flex mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            className="h-14 w-14"
          />
          <span className="flex items-center justify-center ml-5 italic">
            TailwindCSS
          </span>
        </div>
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            className="h-14 w-14 mt-10"
          />
          <span className="flex items-center justify-center mt-10 ml-5 italic">
            Javascript
          </span>
        </div>
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="h-14 w-14 mt-10"
          />
          <span className="flex items-center justify-center mt-10 ml-5 italic">
            React
          </span>
        </div>
      </div>
      <div className="row-span-1 col-span-1 md:row-span-1 md:col-span-2"></div>
      <div className="mt-7 md:hidden col-span-full md:row-span-1 md:col-span-4 text-white">Backend</div>
      <div className="col-span-full md:row-span-1 md:col-span-2 text-white font-extralight bg-secondary bg-opacity-20 rounded-lg mt-2 py-10 px-6 flex flex-col items-start justify-start">
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="h-14 w-14"
          />
          <span className="flex items-center justify-center ml-5 italic">
            NodeJS
          </span>
        </div>

        <div className="flex mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            className="h-14 w-14"
          />
          <span className="flex items-center justify-center ml-5 italic">
            ExpressJS
          </span>
        </div>
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            className="h-14 w-14 mt-10"
          />
          <span className="flex items-center justify-center mt-10 ml-5 italic">
            PostgreSQL
          </span>
        </div>
        <div className="flex">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            className="h-14 w-14 mt-10"
          />
          <span className="flex items-center justify-center mt-10 ml-5 italic">
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
