"use client";

import BookSearch from "@/components/books/BookSearch";
import { useEffect, useState } from "react";

const getTimings = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Start your morning with a good read";
  } else if (hour >= 12 && hour < 17) {
    return "What better way to relax during noon";
  } else if (hour >= 17 && hour < 21) {
    return "Unwind the evening with a mood calming read..";
  } else {
    return "Nighting again?😂";
  }
};

export default function BooksPage() {
  const [timing, setTiming] = useState(getTimings);

  useEffect(() => {
    const interval = setInterval(() => setTiming(getTimings()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-50 py-10 md:py-20">
      <div className="container max-w-7xl h-full flex flex-col items-center justify-center gap-5 mx-auto ">

        {/* TIME */}
        <div className="flex flex-col gap-3 items-center text-center mt-5">
          <h2 className="text-3xl md:text-5xl font-bold">
            {timing}
          </h2>
        </div>

        {/* SEARCH BOX */}
        <div className="w-full md:w-xl flex items-center px-4 mt-5 mb-10">
          <BookSearch />
        </div>
      </div>
    </section>
  );
}
