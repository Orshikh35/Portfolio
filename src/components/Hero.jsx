import Text from "./Text";
import LocationIcon from "./icons/LocationIcon";
import GreenIcon from "./icons/GreenIcon";
import ActionsIcon from "./icons/ActionIcons";
import ProfileImg from "../assets/Picture.png";


export default function Hero() {
  return (
    <div className="max-w-7xl w-full my-24">
      <div className="px-8 flex justify-between gap-12">
        <div className="flex flex-col gap-12">
          <div className="w-[768px] flex flex-col gap-2">
            <span className="dark:text-white font-inter text-6xl non-italic font-bold leading-18 text-gray-900 ">
              Hi, I’m Sagar 👋
            </span>
            <Text context="I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new." />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <LocationIcon />
              <Text context="Ulaanbaatar, Mongolia" />
            </div>
            <div className="flex gap-4 items-center">
              <GreenIcon />
              <Text context="Available for new projects" />
            </div>
          </div>
          <ActionsIcon />
        </div>
        <div>
        <img src={ProfileImg.src} className="h-80 w-70"></img>
        </div>
      </div>
    </div>
  );
}
