import React from "react";
import { Typography } from "@material-tailwind/react";
import Separator from "./Separator";
const Skills = () => {
  return (
    <div id="skills" className="grid grid-flow-row grid-cols-2 md:grid-cols-8 md:grid-flow-row py-10 bg-gradient-to-l from-hoverColor via-primary to-hoverColor content-center">
      <div className="w-auto h-9 col-span-full">
      <Typography variant="h3" className="text-center text-4xl font-montserrat text-white font-bold mt-1">
                S K I L L S
      </Typography>
      </div>
      
      <div className="col-span-1 row-span-1 text-xl mt-10 md:col-span-4 text-white">Frontend
      
      <div className="col-span-1  md:row-span-1 md:col-span-2 text-white font-extralight py-5 px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
            <span>HTML</span>
        </div>

        <div className="flex flex-col mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
            <span>TailwindCSS</span>
        </div>
        <div className="flex flex-col mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
            <span>JavaScript</span>
        </div>
        <div className="flex flex-col mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
            <span>React</span>
        </div>
      </div></div>
      <div className="text-xl mt-10 col-span-1 md:row-span-1 md:col-span-4 text-white">Backend
      <div className="col-span-1 md:row-span-1 md:col-span-2 text-white font-extralight py-5 px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col mt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
            <span>NodeJS</span>
        </div>

        <div className="flex flex-col mt-10">
          <img
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
            <span>ExpressJS</span>
        </div>
        <div className="flex flex-col mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
          
          <span>PostgreSQL</span>
         
        </div>
        <div className="flex flex-col mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            className="h-24 w-24 mb-3 bg-white p-3 rounded-lg"
          />
           <span>MongoDB</span>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Skills;
