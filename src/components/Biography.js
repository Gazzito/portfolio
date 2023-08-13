import { Typography } from "@material-tailwind/react";
import React from "react";
import photo from "../images/myPicture.jpg"
import { motion } from "framer-motion";






const Biography = () => {
  return (
  
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity:1, scale:1, delay:1000, transition: {
      duration: 0.8
    } }}
     id="bio" className="py-8 px-6 bg-secondary grid-rows-6 grid-flow-col md:grid-rows-6 md:grid-flow-col xl:grid xl:grid-rows-1 xl:grid-cols-6 xl:gap-2">
<div className="col-span-1 row-span-1">
      <div className="hidden xl:flex items-center justify-center">
            <Typography variant="h3" className="pl-6 mt-6 text-4xl font-montserrat text-white font-bold text-center leading-tight">
                B <br></br>
                I <br></br>O<br></br> G<br></br> R<br></br> A <br></br>P <br></br>H <br></br>Y
            </Typography>
           
        </div>
        <div className="flex items-center justify-center xl:hidden">
         <Typography variant="h3" className="mt-3 text-4xl font-montserrat text-white font-bold text-center ">
                B I O G R A P H Y
            </Typography>  
            </div>
        </div>
        <div className="bg-opacity-25 mt-3 rounded-lg py-0 px-6 md:col-span-3">

        <Typography className="text-justify text-base font-montserrat font-extralight text-white leading-9">
        
        I started my journey by taking a Professional Course in the HighSchool of Entroncamento and proceeded furthermore to the PolyTechnic Institute of Tomar where I got my passion for programming, and by using technical skills that i gathered over my previous academic experiences I was able to accomplish Higher Technician Diploma in Technology and Programming in Information Systems (Level 5). At the time being i'm finishing my Bachelor's Degree.<br></br> 
        My professional path began during my academic pursuit, when I started an internship at "SSDMI" where i mantained the hardware of a supermarket's network called "Os Mosqueteiros". I gained more software knowledge by joining another academic internship in a company called "Softinsa" where i was a web developer using Agile Methodology, and later on joined them professionally for 9 months where i acquired more soft skills and team building experiences. <b></b> 
        </Typography>  
           
        </div>
        <div className="mt-4 px-6 md:row-span-1 md:mt-0 md:col-span-2 w-auto flex  justify-center">
          <img className="rounded-xl" src={photo}/>
        </div>
     </motion.div>
  
  )
};

export default Biography;
