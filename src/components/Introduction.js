import React from "react";

const Introduction = () => {
  return (
    <div id="home" className="h-screen flex flex-col items-center justify-center bg-primary">
      <div className="w-auto">
        <div className="text-5xl font-bold drop-shadow-md text-white animate-bounce">
           Hello!
          <span className="text-secondary ml-2">I'm Telmo.</span>
        </div>
        <div className="text-right text-white">A FullStack Web Developer</div>
      </div>
    </div>
  );
};

export default Introduction;
