import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../assets/ShoeShop4.png";
import project2 from "../assets/LittleLemon3.png";
import project3 from "../assets/LittleLemon4.png";
import project4 from "../assets/Haiku_app1.png";

const projects = [
  {
    image: project1,
    title: "ShoeShop",
    description: "E-commerce One-Page Web Application",
    link: "https://internet-shop-pink.vercel.app/",
    github: "https://github.com/DiDubovyk/internet_shop",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    tags: ["HTML", "React.js", "TailwindCSS"],
  },
  {
    image: project2,
    title: "Little Lemon Reservation",
    description: "Restaurant reservation form",
    link: "https://little-lemon-virid-gamma.vercel.app/",
    github: "https://github.com/DiDubovyk/Little_Lemon",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    tags: ["React.js", "CSS"],
  },
  {
    image: project3,
    title: "Little Lemon",
    description: "Responsive landing page for Little Lemon restaurant",
    link: "https://little-lemon-virid-gamma.vercel.app/",
    github: "https://github.com/DiDubovyk/Little_Lemon",
    colSpan: "col-span-1",
    rowSpan: "md:row-span-2 row-span-1",
    tags: ["React.js", "CSS"],
  },
  {
    image: project4,
    title: "Haiku APP",
    description: "AI-powered haiku generator app",
    link: "https://haiku-app-tau.vercel.app/",
    github: "https://github.com/DiDubovyk/haiku-app",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
    tags: ["React.js", "Next.js", "TailwindCSS", "MongoDB", "cookies"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-4">
      <h2
        className="font-cormorant font-medium text-[64px] leading-[70px] 
            tracking-[0.03em] [font-variant:small-caps] 
            text-[#A67763] flex justify-center my-10"
      >
        My projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`group relative border-1 border-[#A67763] rounded-3xl flex flex-col min-h-[120px] p-2 overflow-hidden ${proj.colSpan} ${proj.rowSpan} ${proj.tags}`}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="object-cover w-full h-full transition-all duration-300
                         blur-[1px] group-hover:blur-none"
            />
            <div className="absolute inset-0 bg-[#eda88a] opacity-30 pointer-events-none rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.7)] text-white p-4 pt-2 rounded-b-2xl opacity-80 hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-dmsans text-base md:text-xl xl:text-2xl">
                    {proj.title}
                  </h3>
                  <p className="text-sm xl:text-lg 2xl:text-xl font-light mt-1">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1
                               bg-gray-200 text-gray-800
                               rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-[#A67763] hover:text-white font-dmsans"
                  >
                    <BiLinkExternal />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
