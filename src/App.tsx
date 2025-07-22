import "./App.css";
import ActionButton from "./components/ActionButton";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Diana from "./assets/diana.jpg";

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
          <ActionButton />
        </div>
      </aside>

      <main
        className={`
          flex flex-col
          ml-0
          md:ml-[40%]
          overflow-y-auto
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
        <Skills />
        {/* Projects */}
        <Projects />

        {/* Future content */}
        <section className="p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-4">More coming soon!</h2>
          <p>Here you’ll see projects, blog posts, and more.</p>
        </section>
      </main>
    </div>
  );
}
