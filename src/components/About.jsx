import ProImg from "../assets/Pic.png";
import Tag from "./Tag";
import AboutText from "./AboutText";
import Round from "./icons/Round";
import RoundTwo from "./icons/RoundTwo";

export default function About() {
  return (
    <div className="dark:bg-gray-900 bg-slate-50 w-screen flex justify-center">
      <div className="max-w-7xl  my-24 px-8">
        <div className="flex justify-center items-center">
          <Tag context="About me" />
        </div>
        <div className="flex gap-12 mt-12">
          <div className="w-[584px]">
            <img src={ProImg.src} className="w-[400px] h-[480px]" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-gray-900 text-3xl">
                Curious about me? Here you have it:
              </h1>
            </div>
            <div>
              <div className="flex flex-col w-[592px] gap-4 ">
                <AboutText context="I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me." />
                <AboutText context="I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more." />
                <AboutText context="I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development." />
                <AboutText context="When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub." />
                <AboutText context="Finally, some quick bits about me." />
                <div className="flex justify-between">
                  <ul className="flex flex-col gap-3">
                    <Round />
                    <RoundTwo />
                  </ul>
                  <ul className="flex flex-col gap-3">
                    <Round />
                    <RoundTwo />
                  </ul>
                </div>
                <AboutText context="One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
