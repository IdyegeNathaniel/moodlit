"use client";

import { ChevronLeft } from "lucide-react";

interface PageShellProps {
  mood?: {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    books: number;
  };
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const PageShell = ({
  mood,
  title,
  subtitle,
  children,
}: PageShellProps) => {
  return (
    <section className="h-screen w-full space-y-4">
        <div className="py-8 px-10">
          <button
            className="flex items-center gap-2 border-none hover:text-blue-500 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-6 h-6font-bold" />
            Back
          </button>
        </div>
      <div className="container max-w-7xl mx-auto flex flex-col gap-7 px-4 md:px-6 py-6">

        <div className="flex flex-col items-start justify-center gap-3 mb-8">
          <div className="flex items-center justify-center gap-3">
            {mood && (
              <span className="text-4xl">{mood.icon}</span>
            )}
            <div>
              <h1 className="text-2xl md:text-4xl text-plum-dark font-extrabold font-raleway tracking-tight leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-light-muted font-normal tracking-tight mt-0.5 ">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
