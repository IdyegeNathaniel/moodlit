import React from "react";
import Eyebrow from "../shared/eyebrow";
import { FeaturesTypes } from "@/types";
import { features } from "@/Const";

const FeatureCard: React.FC<{ index: number, F: FeaturesTypes }> = ({
  index,
  F,
}) => {
  return (
    <div
      className={`rounded-xl h-[250px] border border-coral/20 hover:border hover:border-plum/70 transition-all duration-300 px-7 py-9 bg-light-card`}
    >
      <div className="w-16 h-16 flex items-center shrink-0 text-plum border border-plum/30 font-semibold p-3 bg-plum/10 rounded-lg mb-6">
        {F.icon}
      </div>

      <h3 className="text-lg md:text-2xl font-bold font-syne">{F.title}</h3>

      <p className="text-base leading- text-light-muted">{F.desc}</p>
    </div>
  );
};

const Advantage: React.FC = () => {
  return (
    <section className="w-full py-14 md:py-24 px-4 md:px-12">
      <div className="w-full md:min-w-6xl flex flex-col items-center mx-auto">
        <div className="w-full flex flex-col justify-start items-">
          <Eyebrow text="why moodlit" />
          <h2 className=" text-coral font-bold text-3xl sm:text-5xl lg:text-6xl mb-3 font-syne">
            Why Readers Love <br />
            <span className="text-plum">MoodLit.</span>
          </h2>
        </div>

        <div className="w-full grid md:grid-cols-3 gap-3 my-8">
          {features.map((F, index) => (
            <div key={index}>
              <FeatureCard index={index} F={F} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
