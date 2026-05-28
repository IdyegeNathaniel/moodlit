import { moods } from "@/Const";
import BookCard from "../books/BookCard";
import { useMoodLitStore } from "@/stores/useMoodLitStore";

const MoodSelector = () => {

    const {selectedMood, setSelectedMood} = useMoodLitStore();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6">
      {moods.map((mood) => (
        <BookCard key={mood.id} mood={mood} onClick={() => setSelectedMood(mood.id as any)} />
      ))}
    </div>
  );
};

export default MoodSelector;
