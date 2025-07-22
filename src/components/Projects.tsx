import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import project1 from "../assets/ShoeShop4.png";
import project2 from "../assets/LittleLemon3.png";
import project3 from "../assets/LittleLemon4.png";
import project4 from "../assets/Haiku_app1.png";

const Projects: React.FC = () => {
  return (
    <div className="p-4">
      <h2
        className="font-cormorant font-medium text-[64px] leading-[70px] 
            tracking-[0.03em] [font-variant:small-caps] 
            text-[#A67763] flex justify-center m-10"
      >
        My projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 h-full w-full aspect-video">
        {/* Project 1 */}
        <div className="group relative border-2 border-[#A67763] rounded-3xl col-span-1 row-span-1 flex justify-center items-center min-h-[120px] p-2 overflow-hidden">
          <img
            src={project1}
            alt="Project 1"
            className="object-contain rounded-2xl w-full h-full transition-all duration-300 blur-[0.8px] group-hover:blur-none"
          />
          <div className="absolute inset-0 bg-[#eda88a] opacity-30 pointer-events-none rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-2xl opacity-80 hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-center">
              <h3 className="font-dmsans text-sm font-semibold">Shoe Shop</h3>
              <div className="flex gap-1">
                <a
                  href="https://your-shoeshop-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#A67763] hover:text-white font-dmsans"
                >
                  <BiLinkExternal />
                </a>
                <a>
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="relative group border-2 border-[#A67763] rounded-3xl col-span-1 row-span-1 flex justify-center items-center min-h-[120px] p-2 overflow-hidden">
          <img
            src={project2}
            alt="Project 2"
            className="object-contain rounded-2xl w-full h-full transition-all duration-300 blur-[0.8px] group-hover:blur-none"
          />
          <div className="absolute inset-0 bg-[#eda88a] opacity-30 pointer-events-none rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-2xl opacity-80 hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-center">
              <h3 className="font-dmsans text-sm font-semibold">Little Lemon Reservation</h3>
              <div className="flex gap-1">
                <a
                  href="https://your-shoeshop-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#A67763] hover:text-white font-dmsans"
                >
                  <BiLinkExternal />
                </a>
                <a>
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="relative border-2 border-[#A67763] rounded-3xl col-span-1 row-span-1 md:row-span-2 flex justify-center items-center p-2 overflow-hidden group">
          <img
            src={project3}
            alt="Project 3"
            className="object-contain rounded-2xl w-full h-full transition-all duration-300 filter blur-[0.8px] group-hover:blur-none"
          />
          <div className="absolute inset-0 bg-[#eda88a] opacity-30 pointer-events-none rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-center">
              <h3 className="font-dmsans text-sm font-semibold">Little Lemon</h3>
              <div className="flex gap-1">
                <a
                  href="https://your-shoeshop-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#A67763] hover:text-white font-dmsans"
                >
                  <BiLinkExternal />
                </a>
                <a>
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="relative border-2 border-[#A67763] rounded-3xl p-2 row-span-1 flex justify-center items-center min-h-[120px] col-span-1 md:col-span-2 overflow-hidden group">
          <img
            src={project4}
            alt="Project 4"
            className="object-contain rounded-2xl w-full h-full transition-all duration-300 filter blur-[0.8px] group-hover:blur-none"
          />
          <div className="absolute inset-0 bg-[#eda88a] opacity-30 pointer-events-none rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between items-center">
              <h3 className="font-dmsans text-sm font-semibold">Haiku APP</h3>
              <div className="flex gap-1">
                <a
                  href="https://your-shoeshop-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#A67763] hover:text-white font-dmsans"
                >
                  <BiLinkExternal />
                </a>
                <a>
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
