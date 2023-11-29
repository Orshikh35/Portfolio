import Tag from "./Props.jsx/Tag";
import Subheading from "./Props.jsx/Subheading";
import Mail from "./Icons.jsx/Mail";
import Copy from "./Icons.jsx/CopyIcon";
import Phone from "./Icons.jsx/PhoneIcon";
import ActionsIcon from "./Icons.jsx/ActionIcons";

export default function Contact() {
  return (
    <div className="max-w-7xl w-[1280px] my-24 px-8">
      <div className="flex flex-col gap-12">
        <div className="px-[340px] flex flex-col justify-center items-center text-center gap-4">
          <Tag context="Get in touch" />
          <Subheading context="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div className="flex gap-5 items-center">
            <Mail />
            <h1 className=" text-black text-4xl font-semibold">
              reachsagarshah@gmail.com
            </h1>
            <Copy />
          </div>
          <div className="flex gap-5 items-center">
            <Phone />
            <h1 className=" text-black text-4xl font-semibold">
              +91 8980500565
            </h1>
            <Copy />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
            <p className="text-gray-600 text-base font-normal">You may also find me on these platforms!</p>
            <ActionsIcon/>
          </div>
      </div>
    </div>
  );
}
