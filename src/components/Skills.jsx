import Tag from "./Props.jsx/Tag";
import Subheading from "./Props.jsx/Subheading";
import JS from "./Logo.jsx/JS";
import Typescript from "./Logo.jsx/TypeScript";
import React from "./Logo.jsx/React";
import Node from "./Logo.jsx/Node";
import Express from "./Logo.jsx/Express";
import Nest from "./Logo.jsx/Nest";
import Socket from "./Logo.jsx/Socket";
import MongoDB from "./Logo.jsx/MongoDB";
import Sass from "./Logo.jsx/Sass";
import Tailwindcss from "./Logo.jsx/Tailwindcss";
import Figma from "./Logo.jsx/Figma";
import Cypress from "./Logo.jsx/Cypress";
import Storybook from "./Logo.jsx/Storybook";
import Git from "./Logo.jsx/Git";

export default function Skills() {
  return (
    <div className="max-w-7xl w-[1280px] my-24 px-8 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Tag context="Skills" />
        </div>
        <div className="flex justify-center">
          <Subheading context="The skills, tools and technologies I am really good at:" />
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex  justify-between">
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <JS />
            </div>
            <div>
              <Subheading context="Javascript" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Typescript />
            </div>
            <div>
              <Subheading context="Typescript" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <React />
            </div>
            <div>
              <Subheading context="React" />
            </div>
          </div>
          {/* <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <JS />
            </div>
            <div>
              <Subheading context="Next.js" />
            </div>
          </div> */}
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Node />
            </div>
            <div>
              <Subheading context="Node.js" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Express />
            </div>
            <div>
              <Subheading context="Express.js" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Nest />
            </div>
            <div>
              <Subheading context="Nest.js" />
            </div>
          </div>{" "}
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Socket />
            </div>
            <div>
              <Subheading context="Socket.io" />
            </div>
          </div>
        </div>

        <div className="flex  justify-between">
          {/* <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Nest />
            </div>
            <div>
              <Subheading context="PostgreSQL" />
            </div>
          </div> */}
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <MongoDB />
            </div>
            <div>
              <Subheading context="MongoDB" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Sass />
            </div>
            <div>
              <Subheading context="Sass/Scss" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Express />
            </div>
            <div>
              <Subheading context="Tailwindcss" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Figma />
            </div>
            <div>
              <Subheading context="Figma" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Cypress />
            </div>
            <div>
              <Subheading context="Cypress" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Storybook />
            </div>
            <div className="flex justify-center">
              <Subheading context="Storybook" />
            </div>
          </div>{" "}
          <div className="flex justify-center flex-col gap-2">
            <div className="flex justify-center">
              <Git />
            </div>
            <div className="flex justify-center">
              <Subheading context="Git" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
