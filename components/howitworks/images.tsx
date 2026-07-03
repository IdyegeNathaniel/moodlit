import Image from "next/image";

const ImagePanel: React.FC<{ src: string; alt: string; step: string }> = ({ src, alt, step }) => {
  return (
    <div className="relative h-[280px] sm:h-[360px] md:h-[460px] w-full overflow-hidden ">
      {/* Corner coral-lights */}
      <div className="absolute top-0 left-0 z-10 h-5 w-5 border-l-4 border-t-4 border-coral-light/80" />
      <div className="absolute top-0 right-0 z-10 h-5 w-5 border-r-4 border-t-4 border-coral-light/80" />
      <div className="absolute bottom-0 left-0 z-10 h-5 w-5 border-b-4 border-l-4 border-coral-light/80" />
      <div className="absolute bottom-0 right-0 z-10 h-5 w-5 border-b-4 border-r-4 border-coral-light/80" />

      {/* Step badge */}
      <div className="absolute bottom-5 right-5 z-10 rounded-sm border border-coral-light/40 bg-bg-dark/85 px-3 py-4 backdrop-blur-md">
        <span className="font-playfair text-[9px] uppercase tracking-[0.25em] text-coral-light">
          Step {step}
        </span>
      </div>

      {/* Image */}
      <Image
      width={500}
        height={500}
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
    </div>
  );
};

export default ImagePanel;