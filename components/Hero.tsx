"use client";

import { Clock, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import BookSearch from "./books/BookSearch";
import EmptyShelf from "./shelves/EmptyShelf";
import MoodSelector from "./moods/MoodSelector";

const getGreetings = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 17) {
    return "noon";
  } else if (hour >= 17 && hour < 21) {
    return "evening";
  } else {
    return "night";
  }
};

const Hero = () => {
  const [greeting, setGreeting] = useState(getGreetings);
  const [activeTab, setActiveTab] = useState<string>("Moods");

  const TextStyle = {
    background: "linear-gradient(135deg, #6B4E71 0%, #E8927C 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  //GREETINGS UPDATE

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreetings()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-50 py-10">
      <div className="w-full md:max-w-7xl flex flex-col items-center justify-center mx-auto">
        {/* INPUT BOX */}
        <div className="w-full md:w-xl flex items-center px-4 mt-5 mb-10">
          <BookSearch />
        </div>

        <div className="bg-linear-150 from-gray-200 to-gray-100 flex items-center rounded-full px-4 py-2 mb-3 border border-border-light">
          <Sparkles className="w-4 h-4 mr-2 text-plum" />
          <p className="text-sm text-plum">Find your perfect read</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center mt-5">
          <h2 className="text-3xl md:text-5xl font-bold">
            What are you in the <br />
            <span className="" style={TextStyle}>
              mood for this {greeting}?
            </span>
          </h2>
          <p className="max-w-[250px] md:max-w-full text-sm md:text-xl text-light-muted my-0 mx-auto">
            Discover your next favourite book based on how you're feeling right
            now
          </p>
        </div>

        {/* TABS */}

        <div className="w-full my-12 flex flex-col items-center space-y-7">
          <motion.div
            animate={{}}
            className="w-full flex items-center justify-center gap-10 "
          >
            {Tabs.map((tab) => (
              <div
                className={`flex items-center justify-center text-sm md:text-base text-light-muted font-medium gap-2 cursor-pointer pb-2 ${activeTab === tab.name ? "text-plum border-plum border-b-2" : ""}`}
                onClick={() => setActiveTab(tab.name)}
                key={tab.name}
              >
                <span>{tab.icon}</span>
                {tab.name}
              </div>
            ))}
          </motion.div>
        </div>

        {activeTab === "Moods" ? (
          // MOODS
          <>
            <MoodSelector />
          </>
        ) : activeTab === "Trending" ? (
          <EmptyShelf activeTab={activeTab} />
        ) : (
          <EmptyShelf activeTab={activeTab} />
        )}
        
      </div>
      
    </section>
  );
};

export default Hero;

const Tabs = [
  {
    name: "Moods",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    name: "Trending",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    name: "Recent",
    icon: <Clock className="w-4 h-4" />,
  },
];
