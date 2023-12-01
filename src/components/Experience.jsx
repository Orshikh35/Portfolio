import Subheading from "./Props/Subheading";
import Tag from "./Tag";
import Upwork from "../assets/logo-upwork.png";
import ExperienceTitle from "./Props/ExperienceTitle";
import ExperinceCardTexte from "./Props/ExperienceCardText";
import Date from "./Props/Date";

export default function Experience() {
  return (
    <div className=" bg-slate-50 w-screen flex justify-center">
      <div className="max-w-7xl w-[1280px] my-24 px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Tag context="Experience" />
          </div>
          <div className="flex justify-center">
            <Subheading context="Here is a quick summary of my most recent experiences:" />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-12 ">


          <div className="flex justify-center ">
            <div className="w-[896px] h-auto py-8 px-8 flex gap-12 justify-between shadow-2xl rounded-xl bg-white">
              <div>
                <img src={Upwork.src} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <ExperienceTitle context="Sr.Frontend Developer" />
                </div>
                <div className="w-[384px] flex flex-col gap-2">
                  <ExperinceCardTexte context="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <ExperinceCardTexte context="Ut pretium arcu et massa semper, id fringilla leo semper." />
                  <ExperinceCardTexte context="Sed quis justo ac magna." />
                  <ExperinceCardTexte context="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
              </div>
              <div>
                <Date context="Nov 2021 - Present" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[896px] h-auto py-8 px-8 flex gap-12 justify-between shadow-2xl rounded-xl bg-white">
              <div>
                <img src={Upwork.src} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <ExperienceTitle context="Sr.Frontend Developer" />
                </div>
                <div className="w-[384px] flex flex-col gap-2">
                  <ExperinceCardTexte context="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <ExperinceCardTexte context="Ut pretium arcu et massa semper, id fringilla leo semper." />
                  <ExperinceCardTexte context="Sed quis justo ac magna." />
                  <ExperinceCardTexte context="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
              </div>
              <div>
                <Date context="Nov 2021 - Present" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[896px] h-auto py-8 px-8 flex gap-12 justify-between shadow-2xl rounded-xl bg-white">
              <div>
                <img src={Upwork.src} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <ExperienceTitle context="Sr.Frontend Developer" />
                </div>
                <div className="w-[384px] flex flex-col gap-2">
                  <ExperinceCardTexte context="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <ExperinceCardTexte context="Ut pretium arcu et massa semper, id fringilla leo semper." />
                  <ExperinceCardTexte context="Sed quis justo ac magna." />
                  <ExperinceCardTexte context="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
              </div>
              <div>
                <Date context="Nov 2021 - Present" />
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
  );
}
