import React from "react";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-terciary py-8 px-6">
      <div className="flex items-center justify-center">
        <Typography
          variant="h3"
          className="mt-3 text-4xl font-montserrat text-white font-bold text-center "
        >
          P R O J E C T S
        </Typography>
      </div>
<div className="max-w-5xl h-[32rem] my-10">
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full object-fill">
        <img
          src="https://media.discordapp.net/attachments/765883814634717214/1138600662926631023/image.png?width=1202&height=507"
          alt="image 1"
          className="h-full"
        />
        <div className="inset-0 absolute bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className=" bg-black bg-opacity-50 rounded-lg w-6/12 py-10 px-10">
          <Typography
            variant="h1"
            color="white"
            className="font-montserrat py-2 mt-4 text-3xl md:text-3xl lg:text-3xl"
          >
            Robot Friends
          </Typography>

          <Typography
            variant="h1"
            color="white"
            className="py-2 mb-4 text-xl font-montserrat font-light md:text-xl lg:text-xl"
          >
            My first app created with the frontend-skills above mentioned.
            It shows a simple array of objects gathered from this website <span className="font-bold hover:text-secondary transition-colors"><a href="https://robohash.org/">https://robohash.org/</a></span>
          </Typography>
          <div><Button>Find more</Button></div>
          </div>
          
        </div>
        
         

        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
