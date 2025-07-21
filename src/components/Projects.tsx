import project1 from "../assets/ShoeShop4.png";
import project2 from "../assets/LittleLemon3.png";
import project3 from "../assets/LittleLemon4.png";
import project4 from "../assets/Haiku_app1.png";

const Projects:React.FC =() => {
    return(
        <div className="p-4">
          <h2
            className="font-cormorant font-medium text-[64px] leading-[70px] 
            tracking-[0.03em] [font-variant:small-caps] 
            text-[#A67763] flex justify-center m-10"
          >
            My projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 h-full w-full aspect-video">
            <div className="border-4 border-[#A67763] rounded-3xl col-span-1 row-span-1 flex justify-center items-center min-h-[120px] p-2">
              <img src={project1} alt="Project 1" className="object-contain rounded-2xl w-full h-full" />
            </div>
            <div className="border-4 border-[#A67763] rounded-3xl col-span-1 row-span-1  flex justify-center items-center min-h-[120px] p-2">
              <img src={project2} alt="Project 2" className="object-contain rounded-2xl w-full h-full" />
            </div>
            <div className="border-4 border-[#A67763] rounded-3xl col-span-1 row-span-1 md:row-span-2  flex justify-center items-center p-2">
              <img src={project3} alt="Project 3" className="object-contain rounded-2xl w-full h-full" />
            </div>
            <div className="border-4 border-[#A67763] rounded-3xl p-2 row-span-1  flex justify-center items-center min-h-[120px] col-span-1 md:col-span-2">
              <img src={project4} alt="Project 4" className="object-contain rounded-2xl w-full h-full" />
            </div>
          </div>
        </div>

    )
};

export default Projects;