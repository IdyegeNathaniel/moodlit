"use client";

import { moods } from "@/Const";
import BookCard from "../books/BookCard";
import { useMoodLitStore } from "@/stores/useMoodLitStore";
import { useRouter } from "next/navigation";

const MoodSelector = () => {

  const {setSelectedMood} = useMoodLitStore();

  const router = useRouter();

    const handleSelect = (moodId: string) => {
        setSelectedMood(moodId);
        router.push(`/moods/${moodId}`);
    }


  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6">
      {moods.map((mood) => (
        <BookCard key={mood.id} mood={mood} onClick={() => handleSelect(mood.id)}  />
      ))}
    </div>
  );
};

export default MoodSelector;
