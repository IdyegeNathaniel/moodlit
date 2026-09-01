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
    <section className="w-full space-y-4 bg-neutral-100 mb-10">

      {/* NAVIGATE BACK */}
        <div className="py-8 px-10">
          <button
            className="flex items-center gap-2 border-none hover:text-blue-500 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-6 h-6font-bold" />
            Back
          </button>
        </div>

      <div className="max-w-7xl bg-white mx-auto flex flex-col gap-1 px-2 mb-3">

        <div className="flex flex-col items-start justify-center gap-3 p-6">
          <div className="flex items-center justify-center gap-3">
            {mood && (
              <span className="text-4xl md:text-5xl">{mood.icon}</span>
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

        {/* SORT = GENRE */}
        <div className="flex-1 flex gap-3 px-6 py-3">
          {
            ["Sort", "Genre", "Rating"].map((p) => (
              <span key={p} className="border border-neutral-300 py-2 px-4 text-xs md:text-sm rounded-full cursor-pointer">{p}</span>
            ))
          }
        </div>

        {children}
      </div>
    </section>
  );
};
