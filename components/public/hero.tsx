"use client";

import Image from "next/image";
import HeroImage from "@/public/images/books-collage.png";
import HeroIcon from "@/public/svg/Reader.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PublicHero: React.FC = () => {

  const router = useRouter()
  return (
    <section className="relative w-full bg-cover py-20">
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

      <div className="relative container max-w-7xl flex flex-col gap-5 items-center text-center px-5 py-10 mx-auto">
        <div className="flex flex-col gap-5 mb-6">
          <h2 className="md:text-6xl text-3xl font-bold bg-linear-to-r from-coral-light to-coral-dark bg-clip-text text-transparent">
            How are you feeling today?{" "}
          </h2>
          <p className="text-sm md:text-xl text-light">Let your mood pick the book, or go find one yourself</p>
        </div>

        <div className="py-10 md:py-0">
          <Image
            src={HeroIcon}
            width={100}
            height={100}
            className="w-80 "
            alt="Hero-Icon"
            priority
          />
        </div>

        {/* BUTTONS */}

        <div className="flex gap-3 md:gap-8">
          <Button size="xl" className="bg-linear-to-r from-coral-light to-coral-dark" onClick={() => router.push("/moods")}>
            Moods
          </Button>

          <Button size="xl" variant="outline" onClick={() => router.push("/books")}>
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicHero;
