import Tag from "./Tag";
import Subheading from "./Subheading";
import Mail from "./icons/Mail";
import Copy from "./icons/CopyIcon";
import Phone from "./icons/PhoneIcon";
import ActionsIcon from "./icons/ActionIcons";

export default function Contact() {
  return (
    <div className="dark:bg-gray-950 w-full flex justify-center">
      <div className=" max-w-7xl w-[1280px] my-24 px-8">
        <div className="flex flex-col gap-12">
          <div className="px-[340px] flex flex-col justify-center items-center text-center gap-4">
            <Tag context="Get in touch" />
            <Subheading context="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <div className="flex gap-5 items-center">
              <Mail />
              <h1 className="dark:text-white text-black text-4xl font-semibold">
                reachsagarshah@gmail.com
              </h1>
              <Copy />
            </div>
            <div className="flex gap-5 items-center">
              <Phone />
              <h1 className="dark:text-white text-black text-4xl font-semibold">
                +91 8980500565
              </h1>
              <Copy />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="dark:text-gray-300text-gray-600 text-base font-normal">
              You may also find me on these platforms!
            </p>
            <ActionsIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
