import { problems } from "@/Const";
import Eyebrow from "../shared/eyebrow";
import { ProblemTypes } from "@/types";


const ProblemCard: React.FC<{p: ProblemTypes, index: number}> = ({ p, index }) => {
  return(
    <div
              className={`rounded-lg border border-coral/20 hover:border hover:border-coral/70 transition-all duration-300 px-7 py-9 bg-light-card ${index % 2 === 1 && "mt-0 md:mt-20"}`}
             
            >
              <div className="w-10 h-10 flex items-center shrink-0 text-plum border border-plum/30 font-semibold p-3 bg-plum/10 rounded-lg mb-6">
                {p.icon}
              </div>

              <p className="text-plum/20 font-semibold text-[18px] mb-3">
                0{index + 1}
              </p>

              <h3 className="text-lg md:text-xl font-bold font-syne">{p.title}</h3>

              <div className="w-10 h-1 mt-3 mb-5 bg-plum " />

              <p className="text-base leading- text-light-muted">{p.desc}</p>
            </div>
  )
}

const Problem = () => {
  return (
    <section className="w-full py-10 md:py-24">
      <div className="container max-w-7xl flex flex-col items-center justify-center gap-10 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <Eyebrow text="the problem" />
          <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl mb-3 font-syne">
            Why{" "}
            <span className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-3 bg-linear-to-r from-plum to-coral bg-clip-text text-transparent">
              MoodLit
            </span>{" "}
            Exists
          </h2>
        </div>

        <div className="w-full grid md:grid-cols-3 gap-3 md:gap-8">
          {problems.map((p, index) => (
            <div
              key={index}
              className="hover:-etranslate-y-4 transition-all duration-300"
            >
            <ProblemCard p={p} index={index}/>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
