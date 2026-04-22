"use client";

import { moods } from "@/Const";
import { BookOpen, Clock, Heart, Sparkles, TrendingUp } from "lucide-react";
import BookCard from "./books/BookCard";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { useState } from "react";
import { motion } from "motion/react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<string>("Moods");

  const TextStyle = {
    background: "linear-gradient(135deg, #6B4E71 0%, #E8927C 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section className="w-full min-h-50 py-10">
      <div className="w-full md:max-w-7xl flex flex-col items-center justify-center mx-auto">
        {/* Input Box */}

        <div className="w-full md:w-xl px-4 mt-5 mb-10">
          <Input placeholder="search for books, authors, or moods" />
        </div>

        <div className="bg-linear-150 from-gray-200 to-gray-100 flex items-center rounded-full px-4 py-2 mb-3 border border-border-light">
          <Sparkles className="w-4 h-4 mr-2 text-plum" />
          <p className="text-sm text-plum">Find your perfect read</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center mt-5">
          <h2 className="text-3xl md:text-5xl font-bold">
            What are you in the <br />
            <span className="" style={TextStyle}>
              mood for?
            </span>
          </h2>
          <p className="max-w-[250px] md:max-w-full text-sm md:text-xl text-light-muted my-0 mx-auto">
            Discover your next favourite book based on how you're feeling right
            now
          </p>
        </div>

        {/* TABS */}

        <div className="w-full my-12 flex flex-col items-center space-y-7">
          <motion.div animate={{}} className="w-full flex items-center justify-center gap-10 ">
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

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6">
            {moods.map((mood) => (
              <BookCard key={mood.id} mood={mood} />
            ))}
          </div>
        ) : activeTab === "Trending" ? (
          <div>trending empty</div>
        ) : (
          <div>recent empty</div>
        )}

        {/* Explore */}

        {/* CTA */}
        <div className="w-full bg-linear-150 from-red-100 to-green-100 text-center rounded-2xl py-12 px-8 border border-border-light mt-6">
          <Sparkles className="text-plum mb-4 stroke-1 w-8 h-8 md:w-12 md:h-12" />
          <h3 className="text-2xl md:text-4xl font-bold ml-">
            Ready to find your next read?
          </h3>
          <p className="text-light-muted text-xs md:text-lg md:my-8 my-4">
            Join thousands of readers discovering books that match their mood
          </p>
          <Button asChild className="cursor-pointer" size={"xl"}>
            <Link href={"/"}>Get Started Free</Link>
          </Button>
        </div>
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
