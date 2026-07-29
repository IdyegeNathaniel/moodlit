const LoadingSpinner: React.FC = () => {
  return (
    <div
      aria-label="laodingspinner"
      role="status"
      className="w-12 h-12 rounded-full border-r-3 border-t-3 border-b-3 border-plum animate-[spin_0.6s_linear_infinite]"
    />
  );
};

export default LoadingSpinner;
