import { useState } from "react";
import React from 'react';
// icons
import { FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaServer, FaCoffee, FaPython, FaFileExcel } from 'react-icons/fa';


import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { motion } from 'framer-motion';

//  data
export const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Technical Skills',
        icons: [
          FaDatabase,
          FaCode,
          FaHtml5,
          FaCss3Alt,
          FaJs,
          FaReact,
          FaNode,
          FaServer,
          FaCoffee,
          FaPython,
          FaFileExcel
        ],
      },
      {
        title:'Soft-Skills',
        stage : 'Leadership,   Communication-Skills,   Team-Collaboration,  Problem-Solving',
      },
    ],
  },
  {
    title: 'Achievements',
    info: [
      {
        title: 'Rank 38 in PWSkills coding contest',
        stage: '2022 - 2023',
      },
      {
        title: 'Certification in MERN-stack development course from PWSkills',
        stage: '2023-2024',
      },
      {
        title: 'Assisted 20+ on-campus placement activities',
        stage: '2023-2024',
      },
      {
        title: 'First prize in state-level Speech competition',
        stage: '2017-2018',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'J.C. Bose University of Science and Technology, YMCA (2021-2025)',
        stage: 'B.Tech in Computer Engineering  Data Science — CGPA: 8.5/10',
      },
      {
        title: 'K.L. Arya DAV Public School',
        stage: 'Class 12th (CBSE) — Percentage: 92.8% (2020)',
      },
      {
        title: 'K.L. Arya DAV Public School',
        stage: 'Class 10th (CBSE) — Percentage: 95.4% (2018)',
      },
    ],
  },
  {
    title: 'Position of responsibility',
    info: [
      {
        title: 'Secretary, Udaan - The Training and Placement Society',

        stage: 'Spearheaded 20+ placement drives, fostering connections with top companies and facilitating job opportunities for students, Successfully managed and led multiple events showcasing exceptional organizational and leadership skills',
      },
      
    ],
  },
];

// Components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';

// Counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* {Text} */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2">
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>

          <motion.p
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            
            Hi, I am a consistent learner and a fellow who believes in the practical application of everything that I learn. Currently, I am pursuing my Btech degree from YMCA(Faridabad) and have a keen interest in Data Structures and a plus programming in general.
          </motion.p>

          {/* {counters} */}
          <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* {experience} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              
              {/* {clients} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
                
              {/* {Finished projects} */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* {Info} */}
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className={`${
                  index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} 
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* {title} */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>

                <div>{item.stage}</div>
                {/* {icons} */}
                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconIndex) => (
                    <Icon className="text-2xl text-white" key={iconIndex} />
                  ))}
                </div>    
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;