"use client";

import Image from "next/image";
import HeroImage from "@/public/images/books-collage.png";
import HeroIcon from "@/public/svg/Reader.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const PublicHero: React.FC = () => {
  return (
    <section className="relative w-full bg-cover">
      <Image
        src={HeroImage}
        alt="Hero background"
        fill
        priority
        quality={80}
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
      />
    
    <div className="absolute inset-0 bg-plum/90" />

      <div className="relative container max-w-7xl h-screen flex flex-col md:flex-row gap-24 justify-center items-center py-20">
        <div className="w-full md:w-[50%] flex flex-col gap-5 py-20">
          <h2 className="text-5xl sm:text-8xl font-extrabold font-sans text-white">MoodLit</h2>
          <p className="max-w-{550px} text-lg md:text-2xl leading-snug tracking-wider text-gray-300 font-bold font-playfair mb-5">
            Stop browsing endless lists. Tell us how you're feeling, and we'll
            find the perfect book that resonates with your current Mood.
          </p>

          <div className="">
            <Button size={"xl"} variant={"outline"} asChild>
                <Link href={"/moods"}>Get Started Free</Link>
            </Button>
          </div>
        </div>
        
        <div className="hidden md:block w-[50%]">
          <Image src={HeroIcon} height={100} className="w-[80%]" alt="Hero-Icon" />
        </div>
      </div>
    </section>
  );
};

export default PublicHero;
