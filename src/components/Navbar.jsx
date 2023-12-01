import { useState } from "react";
import LogoIcon from "./icons/LogoIcon";
import ThemeIcon from "./icons/ThemeIcon";
import Description from "./Description";
import { useTheme } from "next-themes";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()


  const menuHandler = () => {
      setIsOpen(!isOpen)
  }

  const themeToggle = () => {
      if (theme == 'dark') {
          setTheme('light')
      }
      if (theme == 'light') {
          setTheme('dark')
      }
  }
  
  return (
    <div className="max-w-7xl w-full my-4 ">
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
            <ThemeIcon />
            <button className="dark:bg-white dark:text-gray-900 bg-black text-white py-1.5 px-4 rounded-xl">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
