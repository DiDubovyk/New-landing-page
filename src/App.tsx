import "./App.css";
import Diana from "./assets/diana.jpg";
import { PiFigmaLogoThin } from "react-icons/pi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line, RiNextjsLine } from "react-icons/ri";
import { MdOutlineJavascript, MdDevices } from "react-icons/md";
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
      { icon: <PiFigmaLogoThin size={70} />, name: "Figma" },
      { icon: <AiOutlineHtml5 size={70} />, name: "HTML5" },
      { icon: <RiCss3Line size={70} />, name: "CSS" },
      { icon: <MdOutlineJavascript size={70} />, name: "JavaScript" },
      { icon: <FaReact size={70} />, name: "React" },
      { icon: <BiLogoTailwindCss size={70} />, name: "TailwindCSS" },
    ],
  },
  {
    label: "Server-side Logic",
    icons: [
      { icon: <FaNode size={70} />, name: "NodeJs" },
      { icon: <TbBrandTypescript size={70} />, name: "TypeScript" },
      { icon: <SiExpress size={70} />, name: "ExpressJs" },
      { icon: <RiNextjsLine size={70} />, name: "NextJs" },
      { icon: <SiPrisma size={70} />, name: "Prisma" },
      { icon: <TbBrandOauth size={70} />, name: "Authentification" },
      { icon: <SiPostgresql size={70} />, name: "PostgreSQL" },
      { icon: <SiMongodb size={70} />, name: "MongoDB" },
      { icon: <HiOutlineLink size={70} />, name: "REST Api" },
    ],
  },
  {
    label: "My Toolkit",
    icons: [
      { icon: <FaGitAlt size={70} />, name: "Git" },
      { icon: <FaGithub size={70} />, name: "GitHub" },
      { icon: <VscVscodeInsiders size={70} />, name: "VsCode" },
      { icon: <SiPostman size={70} />, name: "Postman" },
      { icon: <GoTools size={70} />, name: "DevTools" },
      { icon: <FaDocker size={70} />, name: "Docker" },
    ],
  },
  {
    label: "Learning",
    icons: [
      { icon: <SiJquery size={70} />, name: "jQuery" },
      { icon: <TbBrandThreejs size={70} />, name: "ThreeJs" },
      { icon: <FaSass size={70} />, name: "Sass" },
      ],
  },
];

export default function App() {
  return (
    <div>
      <aside
        className={`
          w-full
          bg-[#A67763] p-8 text-white
          flex flex-col justify-center items-center h-screen pt-0

          md:fixed
          md:top-0 md:left-0
          md:w-2/5 md:h-screen
        `}
      >
        <div className="mt-8 md:mt-16">
          <h1 className="text-[64px] font-semibold tracking-wide font-cormorant [font-variant:small-caps]">
            Diana Dubovyk
          </h1>
          <p
            className="font-dmsans font-extralight
    text-[32px]
    leading-[40px] tracking-wider
    text-[#D4D4D4]"
          >
            A passionate{" "}
            <span className="text-white font-light">Front-End Developer</span>
            <br />
            crafting modern, responsive websites.
            <br />
            <span className="text-white font-light">
              Let’s build something amazing together.
            </span>
          </p>
          <button className="mt-10 font-dmsans text-[25px] inline-flex items-center bg-white text-gray-900 text-lg px-10 py-5 rounded-full shadow">
            <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mr-10" />
            Get in Touch
          </button>
        </div>
      </aside>

      <main
        className={`
          flex flex-col
          ml-0
          md:ml-[40%]
          h-screen overflow-y-auto
        `}
      >
        <div className="h-full">
          <img
            src={Diana}
            alt="Diana Dubovyk"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Skills */}
        <section className="bg-white p-4">
          <h2
            className="font-cormorant font-medium text-[64px] leading-[70px] 
            tracking-[0.03em] [font-variant:small-caps] 
            text-[#A67763] flex justify-center"
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
                            {icon}
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
        </section>
        {/* Projects */}
        <section className="p-4">
          <h2
            className="font-cormorant font-medium text-[64px] leading-[70px] 
            tracking-[0.03em] [font-variant:small-caps] 
            text-[#A67763] flex justify-center"
          >
            My projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 h-full w-full aspect-video">
            <div className="bg-blue-400 rounded-3xl col-span-1 row-span-1 flex justify-center items-center min-h-[120px]">
              project 1
            </div>
            <div className="bg-gray-500 rounded-3xl col-span-1 row-span-1  flex justify-center items-center min-h-[120px]">
              project 2
            </div>
            <div className="bg-amber-400 rounded-3xl col-span-1 row-span-1 md:row-span-2  flex justify-center items-center min-h-[120px]">
              project 3
            </div>
            <div className="bg-rose-500 rounded-3xl row-span-1  flex justify-center items-center min-h-[120px] col-span-1 md:col-span-2">
              project 4
            </div>
          </div>
        </section>

        {/* Future content */}
        <section className="p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-4">More coming soon!</h2>
          <p>Here you’ll see projects, blog posts, and more.</p>
        </section>
      </main>
    </div>
  );
}
