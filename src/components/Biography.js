import { Typography } from "@material-tailwind/react";
import React from "react";

const Biography = () => {
  return (
  
     <div className="py-10 px-6 bg-primary grid-rows-6 grid-flow-col md:grid md:grid-rows-6 md:grid-flow-col md:gap-2">
        <div className="bg-secondary bg-opacity-40 rounded-lg row-span-1 col-span-1">
            <Typography variant="h3" className="text-center text-white font-bold mt-1">
                Biography
            </Typography>
        </div>  
        <div className="bg-secondary bg-opacity-40 rounded-lg w-auto py-10 px-6 mt-2 md:row-span-5 md:col-span-1 ">

        <Typography className="text-left font-extralight text-sm text-white ">
        I started by taking a Professional Course, where I got my passion for programming. I was a intern at a company that maintained the hardware for the entire company of "Os Mosqueteiros".
Then, I joined a Higher Professional Technical Course that would lead me on to Computer Engineering. I participated in a partnership with the company called "Softinsa", from which I learned a lot because I had to keep in contact with it for hours. At the moment, I am professional intern.
        </Typography>  
           
        </div>

        <div className="mt-2 md:row-span-6 md:mt-0 md:col-span-2 w-auto flex items-center justify-center">
        <img
      className="h-auto w-auto md:h-56 md:w-56 rounded-lg object-cover transition-all hover:scale-110"
      src="https://scontent.fopo6-2.fna.fbcdn.net/v/t39.30808-6/344763731_1913356182351631_9019264215445248445_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7DlManvUsX4AX80ELL8&_nc_ht=scontent.fopo6-2.fna&oh=00_AfDmvrJlnDS3y9K1eI76qq8yDtFq34f0PoKz7U-SWjbOwg&oe=64CDB64C"
      alt="Myself"
    />
        </div>
       
     </div>
  
  )
};

export default Biography;
