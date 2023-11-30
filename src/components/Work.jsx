import Tag from "./Props/Tag";
import Subheading from "./Props/Subheading";
import ExperienceTitle from "./Props/ExperienceTitle";
import ExperienceCardText from "./Props/ExperienceCardText";
import Img from "../assets/Column.png"
import Actions from "./icons/Actions";

export default function Work() {
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-7xl  w-[1280px] my-24 px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Tag context="Work" />
          </div>
          <div className="flex justify-center">
            <Subheading context="Some of the noteworthy projects I have built:" />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex rounded-xl shadow-lg">
            <div className=" w-2/4">
                <img src={Img.src} className="h-[520px]"/>
            </div>
            <div className="p-12 flex flex-col gap-6 w-2/4 ">
              <ExperienceTitle context="Fiskill"/>
              <ExperienceCardText context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
              <div className="flex items-center content-center gap-4 self-strech flex-wrap">
                <Tag context="React"/>
                <Tag context="Next.js"/>
                <Tag context="Typescript"/>
                <Tag context="Nest.js"/>
                <Tag context="PostgreSQL"/>
                <Tag context="Tailwindcss"/>
                <Tag context="Figma"/>
                <Tag context="Cypress"/>
                <Tag context="Storybook"/>
                <Tag context="Git"/>
              </div>
              <div className="p-1.5">
              <Actions/>
              </div>
            </div>

          </div>

          <div className="flex rounded-xl shadow-lg">
            <div className="p-12 flex flex-col gap-6 w-2/4 ">
              <ExperienceTitle context="Fiskill"/>
              <ExperienceCardText context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
              <div className="flex items-center content-center gap-4 self-strech flex-wrap">
                <Tag context="React"/>
                <Tag context="Next.js"/>
                <Tag context="Typescript"/>
                <Tag context="Nest.js"/>
                <Tag context="PostgreSQL"/>
                <Tag context="Tailwindcss"/>
                <Tag context="Figma"/>
                <Tag context="Cypress"/>
                <Tag context="Storybook"/>
                <Tag context="Git"/>
              </div>
              <div className="p-1.5">
              <Actions/>
              </div>
            </div>
            <div className="w-2/4">
                <img src={Img.src} className="h-[520px]"/>
            </div>

          </div>

          <div className="flex rounded-xl shadow-lg">
            <div className="w-2/4">
                <img src={Img.src} className="h-[520px]"/>
            </div>
            <div className="p-12 flex flex-col gap-6 w-2/4">
              <ExperienceTitle context="Fiskill"/>
              <ExperienceCardText context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
              <div className="flex items-center content-center gap-4 self-strech flex-wrap">
                <Tag context="React"/>
                <Tag context="Next.js"/>
                <Tag context="Typescript"/>
                <Tag context="Nest.js"/>
                <Tag context="PostgreSQL"/>
                <Tag context="Tailwindcss"/>
                <Tag context="Figma"/>
                <Tag context="Cypress"/>
                <Tag context="Storybook"/>
                <Tag context="Git"/>
              </div>
              <div className="p-1.5">
              <Actions/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
