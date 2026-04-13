"use client";

import { BookOpen } from "lucide-react";

const BookCard = ({mood}) => {
  return (
    <div
      className="bg-bg-light border border-border-light rounded-2xl shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-500 p-8 cursor-pointer"
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = mood.color)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
    >
      <div className="items-center space-y-3">
        <span className="text-5xl">{mood.icon}</span>
        <h2 className="font-bold text-2xl mt-4">{mood.name}</h2>
        <p className="text-light-muted mb-3">{mood.description}</p>
        <span className="inline-flex items-center gap-2 bg-gray-200 text-light-muted rounded-full py-1.5 px-3.5 px-4 text-sm">
          <BookOpen size={14} />
          {mood.books} books
        </span>
      </div>
    </div>
  );
};

export default BookCard;


