import LogoIcon from "./icons/LogoIcon";
import ThemeIcon from "./icons/ThemeIcon";
import Description from "./Description";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const themeToggle = () => {
    console.log(theme)
    if (theme == 'dark' || theme == "system") {
      setTheme("light");
    }
    if (theme == 'light') {
      setTheme('dark');
    }
  };

  return (
    <div className="dark:bg-gray-950 w-full flex justify-center">
      <div className=" max-w-7xl w-full my-4 ">
        <div className="px-8 flex justify-between items-center ">
          <div>
            <LogoIcon />
          </div>
          <div className="hidden md:flex gap-6 sm:hidden">
            <div className="flex gap-6 items-center">
              <ul className="flex gap-6 items-center">
                <Description context="About" />
                <Description context="Work" />
                <Description context="Testimionals" />
                <Description context="Contact" />
              </ul>
              <hr className="h-6 w-px bg-slate-200 " />
            </div>
            <div className="flex gap-4">
              <button onClick={themeToggle}>
                <ThemeIcon />
              </button>
              <button className="dark:bg-white dark:text-gray-900 bg-black text-white py-1.5 px-4 rounded-xl">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
