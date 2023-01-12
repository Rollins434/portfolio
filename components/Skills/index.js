import Image from "next/image";
import React from "react";
import { Tech } from "../data";
const Skills = () => {
  return (
    <>
      <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-600 ">
              Tech and Tools
            </p>
            <p className="py-4">
              // These are the technologies I've worked with
            </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {
                Tech.map((data) => {
                    return(
                        <div className='shadow-md shadow-[#08121d] hover:scale-110 duration-500' key={data.id}>
                        <Image className='w-20 mx-auto' height={50} width={50} src={data.path} alt={data.name} />
                        <p className='my-4'>{data.name}</p>
                    </div>
                    )
                })
            }
            
              </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
