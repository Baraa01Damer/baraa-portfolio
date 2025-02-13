"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    aReact,
    FaFigma,
    FaNodeJs,
    FaReact
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Baraa Damer",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1) XXX XXXX",
        },
        {
            fieldName: "Experience",
            fieldValue: "12+ Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "skype_username",
        },
        {
            fieldName: "Nationality",
            fieldValue: "American",
        },
        {
            fieldName: "Email",
            fieldValue: "@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Arabic",
        },
    ]
}

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stacxk Developer",
            duration: "2022 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            duration: "Summer 2021",
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            institution: "California State University, Fullerton",
            degree: "B.S. Computer Science",
            duration: "2022 - 2024",
        },
        {
            institution: "Cypress College",
            degree: "Transfer, Computer Science Major",
            duration: "2019 - 2022",
        },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            education
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;