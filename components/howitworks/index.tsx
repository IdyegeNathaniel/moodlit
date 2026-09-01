import Eyebrow from "../shared/eyebrow";
import { ProcessSteps, ProcessTypes } from "./data";
import ImagePanel from "./images";

interface ProcessRowProps {
  step: ProcessTypes;
  index: number;
}

const GhostSteps: React.FC<{ num: string, index: number }> = ({ num, index }) => {
  return(
    <p className={`absolute -top-20 left-0 block text-[clamp(80px,12vw,150px)] font-playfair ${index % 2 === 1 ? "text-coral/20" : "text-plum/20"} font-extrabold leading-1 -tracking-wider`}>{num}</p>
  )
};

const ProcessRows: React.FC<ProcessRowProps> = ({ step, index }) => {
  const textLeft = index % 2 === 0;

  const TextBlock = (
    <div className="flex-1 relative">
      <GhostSteps num={step.step} index={index} />
      <p className={`text-4xl md:text-6xl ${index % 2 === 1 ? "text-coral" : "text-plum"} font-semibold font-inter mb-2.5 -tracking-[0.025em] leading-[1.15]`}>
        {step.title}
      </p> 
      <div className="w-9 h-px bg-coral/50 mb-2.5" />
      <p className="font-outfit text-base">{step.description}</p>
    </div>
  );

  const ImgBlock = (
    <div className="flex-1">
      <ImagePanel src={step.image} alt={step.title} step={step.step} />
    </div>
  );

  return (
    <div className="relative flex flex-col items-center gap-10 py-15 md:flex-row md:gap-20 md:py-[90px]">
      {textLeft ? TextBlock : ImgBlock}
      {textLeft ? ImgBlock : TextBlock}

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-secondary/10 to-transparent last:hidden" />
    </div>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section className="w-full py-10 md:py-24 px-6">
      <div className="container max-w-7xl flex flex-col items-center justify-center mx-auto">
          <div className="mb-16 flex flex-col items-center text-center">
            <Eyebrow text="the process" />
          <h2 className="
            font-bold font-syne text-3xl sm:text-5xl lg:text-6xl md:mb-3 bg-linear-to-r from-plum to-coral bg-clip-text text-transparent"
          >
            How MoodLit Works
          </h2>
          <p className="mt-2 md:mt-4 text-base text-light-muted font-playfair font-semibold">
            From mood to masterpiece in three simple steps.
          </p>
        </div>

        <div>
          {ProcessSteps.map((step, index) => (
            <ProcessRows key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
