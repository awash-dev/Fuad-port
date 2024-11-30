import React from "react";

const ABout = () => {
  return (
    <div className="px-10 dark:bg-gray-700 dark:text-white flex h-full xl:h-[calc(100vh-80px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-20">
        {/* About Me */}
        <div className="flex items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl w-full  p-6">
            <h2 className="text-[30px]">I'M Fuad seid</h2>
            <p className="text-start font-sans text-xl">
              I am a 4th-year Software Engineering student at Debre Berhan
              University. I can work with React as a frontend framework, which
              is a JavaScript library. I am also proficient in C++ and Node.js
              for backend development. Additionally, I am a Flutter mobile app
              developer for cross-platform applications. I love to solve
              problems through coding.
            </p>
          </div>
        </div>
        {/* Skills */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl w-full  p-6">
            <h1 className="text-[30px]">My Skills</h1>
            <div className="flex flex-col md:flex-row   xl:gap-x-14">
              <div className="flex-col flex">
                <h2 className="font-bold">Programming</h2>
                <p>Python</p>
                <p>JavaScript</p>
                <p>Dart</p>
                <p>C++</p>
                <p>Java</p>
              </div>
              <div>
                <h2 className="font-bold">Frameworks</h2>
                <p>React.js</p>
                <p>Flutter</p>
                <p>Flask</p>
                <p>Next.js</p>
                <p>Native JS</p>
              </div>
              <div>
                <h2 className="font-bold">Database Languages</h2>
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABout;
