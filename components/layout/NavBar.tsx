"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpen, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import MoreOpts from "../moreOpts";
import { useClickOutside } from "@/hooks/useClickOut";

const NavBar: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const menuRef = useClickOutside(() => setShowOptions(false));

  return (
    <nav className="w-full h-20 top-0 sticky z-20 bg-white/5 backdrop-blur-md flex justify-between items-center px-5 py-4 border-b-2 border-gray-200">
      
      <Link href="/" className="flex shrink-0 items-center gap-3">
        <BookOpen size={32} color="#6B4E71" strokeWidth={2} />
        <h1
          className="text-2xl font-bold bg-linear-to-r from-plum to-coral bg-clip-text text-transparent hidden sm:block
        ">
          MoodLit
        </h1>
      </Link>

      <div className="flex items-center gap-4" ref={menuRef}>
        <Button variant={"secondary"} asChild>
          <Link href="/login">Sign In</Link>
        </Button>

        <button
          className="p-2 rounded-md hover:bg-gray-200/50 transition-colors cursor-pointer"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <MoreHorizontal size={24} color="#6B4E71" strokeWidth={2} />
        </button>

        {showOptions ? <MoreOpts /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
