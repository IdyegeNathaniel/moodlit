"use client";

import { BookOpen } from "lucide-react";

const BookCard = ({mood}) => {
  return (
    <div
      className="bg-bg-light border border-border-light rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-8 cursor-pointer group"
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = mood.color)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
    >
      <div className="items-center space-y-3">
       <div className="text-5xl group-hover:scale-105 transition duration-300">{mood.icon}</div>
        <h2 className="font-bold text-2xl mt-4">{mood.name}</h2>
        <p className="text-light-muted mb-3">{mood.description}</p>

        <div className="flex justify-between items-center">

        <span className="inline-flex items-center gap-2 bg-gray-200 text-light-muted rounded-full py-1.5 px-4 text-sm">
          <BookOpen size={14} />
          {mood.books} books 
        </span>
        <span className="opacity-0 group-hover:opacity-100 w-2 h-2 rounded-xl z-1  transition-colors duration-300" style={{backgroundColor: mood.color}}/>
        </div>
      </div>
    </div>
  );
};

export default BookCard;


