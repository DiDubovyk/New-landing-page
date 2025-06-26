import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Diana from "./assets/diana.png";

const skills = ["UI & UX Tech", "Server-side Logic", "Learning", "My Toolkit"];

export default function App() {
  return (
    <div>
      {/* Sidebar: full-width on mobile, fixed 40% on md+ */}
      <aside
        className={`
          relative                /* default: static in flow */
          w-full                  /* mobile: full width */
          bg-[#A67763] p-8 text-white

          md:fixed                /* from md up: fix to viewport */
          md:top-0 md:left-0
          md:w-2/5 md:h-screen
          flex flex-col
        `}
      >
        <h1 className="font-serif text-4xl md:text-5xl">Diana Dubovyk</h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          A passionate Front-End Developer
          <br />
          crafting modern, responsive websites.
          <br />
          Let’s build something amazing together.
        </p>
        <button className="mt-auto inline-flex items-center bg-white text-gray-900 px-5 py-2 rounded-full shadow hover:bg-gray-100 transition">
          <span className="inline-block w-2 h-2 bg-gray-900 rounded-full mr-2" />
          Get in Touch
        </button>
      </aside>

      {/* Main content: no margin on mobile, pushed right on md+ */}
      <main
        className={`
          flex flex-col
          ml-0               /* mobile: no offset */
          md:ml-[40%]        /* md+: leave room for 40%-wide sidebar */
          h-screen overflow-y-auto
        `}
      >
        {/* Hero image */}
        <div className="h-64 md:h-80 lg:h-96">
          <img
            src={Diana}
            alt="Diana Dubovyk"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Skills */}
        <section className="bg-white p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-rose-300 uppercase">
            My skillset
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((label) => (
              <div
                key={label}
                className="flex items-center justify-center h-32 md:h-36 bg-gray-100 hover:bg-gray-200 transition border border-gray-200"
              >
                <span className="text-lg md:text-xl text-gray-700">
                  {label}
                </span>
              </div>
            ))}
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
