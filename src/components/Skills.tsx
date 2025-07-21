import { PiFigmaLogoThin } from "react-icons/pi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line, RiNextjsLine } from "react-icons/ri";
import { MdOutlineJavascript} from "react-icons/md";
import { FaReact, FaNode } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import {
  TbBrandTypescript,
  TbBrandOauth,
  TbBrandThreejs,
} from "react-icons/tb";
import {
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiJquery,
} from "react-icons/si";
import { HiOutlineLink } from "react-icons/hi";
import { FaGitAlt, FaGithub, FaDocker, FaSass } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GoTools } from "react-icons/go";

const skills = [
  {
    label: "UI & UX Tech",
    icons: [
      { icon: <PiFigmaLogoThin />, name: "Figma" },
      { icon: <AiOutlineHtml5 />, name: "HTML5" },
      { icon: <RiCss3Line />, name: "CSS" },
      { icon: <MdOutlineJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <BiLogoTailwindCss />, name: "TailwindCSS" },
    ],
  },
  {
    label: "Server-side Logic",
    icons: [
      { icon: <FaNode />, name: "NodeJs" },
      { icon: <TbBrandTypescript />, name: "TypeScript" },
      { icon: <SiExpress />, name: "ExpressJs" },
      { icon: <RiNextjsLine />, name: "NextJs" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <TbBrandOauth />, name: "Authentification" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <HiOutlineLink />, name: "REST Api" },
    ],
  },
  {
    label: "My Toolkit",
    icons: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <VscVscodeInsiders />, name: "VsCode" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <GoTools />, name: "DevTools" },
      { icon: <FaDocker />, name: "Docker" },
    ],
  },
  {
    label: "Learning",
    icons: [
      { icon: <SiJquery />, name: "jQuery" },
      { icon: <TbBrandThreejs />, name: "ThreeJs" },
      { icon: <FaSass />, name: "Sass" },
      ],
  },
];

const Skills: React.FC = () => {
  return(
    <div className="bg-white p-10">
          <h2
            className="font-cormorant font-medium text-[64px] leading-[70px] 
            tracking-[0.03em] [font-variant:small-caps] 
            text-[#A67763] flex justify-center m-10"
          >
            My skillset
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {skills.map(({ label, icons }, idx) => {
              const isLastCol = idx % 2 === 1;
              const isLastRow = idx >= skills.length - 2;
              return (
                <div
                  key={label}
                  className={`
                    skill-flip
                    flex items-center justify-center aspect-square bg-transparent
                    ${!isLastCol ? "border-r" : ""}
                    ${!isLastRow ? "border-b" : ""}
                    border-[#B09382]
                  `}
                >
                  <div className="skill-flip-inner">
                    <div className="skill-flip-front flex items-center justify-center w-full h-full bg-[#B09382]/15 hover:bg-gray-200 transition">
                      <span className="font-dmsans font-extralight text-lg md:text-4xl text-[#83482e]">
                        {label}
                      </span>
                    </div>
                    <div className="skill-flip-back flex items-center justify-center w-full h-full">
                      <div className="grid grid-cols-3 gap-2 md:gap-6 mb-4">
                        {icons.map(({ icon, name }) => (
                          <div
                            key={name}
                            className="flex flex-col items-center"
                          >
                            <span className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl">{icon}</span>
                            <span className="mt-2 text-[0.95rem] text-white">
                              {name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>)
};

export default Skills;