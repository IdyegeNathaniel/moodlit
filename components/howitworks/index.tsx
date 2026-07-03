import { ProcessSteps, ProcessTypes } from "./data";
import ImagePanel from "./images";

interface ProcessRowProps {
  step: ProcessTypes;
  index: number;
}

const GhostSteps: React.FC<{ num: string }> = ({ num }) => {
  <p className="block text-4xl font-playfair text-coral/50 font-bold opacity-">{num}</p>;
};

const ProcessRows: React.FC<ProcessRowProps> = ({ step, index }) => {
  const textLeft = index % 2 === 0;

  const TextBlock = (
    <div className="flex-1">
      <GhostSteps num={step.step} />
      <p className={`text-4xl md:text-6xl ${index % 2 === 1 ? "text-coral" : "text-plum"} font-semibold font-inter mb-2.5`}>
        {step.title}
      </p>
      <div className="w-9 h-px bg-muted-foreground opacity-5 mb-2.5" />
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent last:hidden" />
    </div>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section className="w-full py-10">
      <div className="container max-w-7xl flex flex-col items-center justify-center mx-auto">
          <div className="mb-16 text-center">
          <h2 className="
            font-semibold text-4xl sm:text-5xl lg:text-6xl mb-3 bg-linear-to-r from-plum to-coral bg-clip-text text-transparent"
          >
            How MoodLit Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
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
