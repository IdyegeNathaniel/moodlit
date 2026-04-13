import { moods } from "@/Const";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import React from "react";
import BookCard from "./books/BookCard";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const TextStyle = {
    background: "linear-gradient(135deg, #6B4E71 0%, #E8927C 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section className="w-full min-h-50 py-10">
      <div className="container max-w-7xl flex flex-col items-center justify-center mx-auto">
        <div className="bg-[rgba(107, 78, 113, 0.1)] flex items-center rounded-full px-4 py-2 mb-3 border border-border-light">
          <Sparkles className="w-4 h-4 mr-2 text-plum" />
          <p className="text-sm text-plum">Find your perfect read</p>
        </div>
        <div className="flex flex-col gap-3 items-center text-center mt-5">
          <h2 className="text-2xl md:text-5xl font-bold">
            What are you in the <br />
            <span className="" style={TextStyle}>
              mood for?
            </span>
          </h2>
          <p className="max-w-150 text-xl text-light-muted my-0 mx-auto">
            Discover your next favourite book based on how you're feeling right
            now
          </p>
        </div>

        {/* MOODS */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
          {moods.map((mood) => (
            <BookCard key={mood.id} mood={mood} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[linear-gradient(135deg, rgba(107, 78, 113, 0.1) 0%, rgba(232, 146, 124, 0.1) 100%)] text-center rounded-2xl py-12 px-8 border border-border-light mt-6">
            <Sparkles size={48} className="text-plum mb-4 stroke-1 " />
            <h3 className="text-2xl md:text-4xl font-bold ml-">Ready to find your next read?</h3>
            <p className="text-xs md:text-lg mb-4">Join thousands of readers discovering books that match their mood</p>
            <Button asChild className="cursor-pointer" size={"xl"}>
                <Link href={"/"}>Get Started Free</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
