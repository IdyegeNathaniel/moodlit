"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import type { GoogleBookVolume } from "@/types/book";

const BookResultCard = ({ book }: { book: GoogleBookVolume }) => {
  const { title, authors, imageLinks, description } = book.volumeInfo;
  const thumbnail = imageLinks?.thumbnail?.replace("http://", "https://");

  return (
    <div className="bg-bg-light border border-border-light rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
      <div className="w-full aspect-2/3 relative rounded-lg overflow-hidden bg-gray-100 mb-3 flex items-center justify-center">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
            unoptimized
          />
        ) : (
          <BookOpen className="w-10 h-10 text-light-muted" />
        )}
      </div>

      <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
      <p className="text-sm text-light-muted mb-2 line-clamp-1">
        {authors?.join(", ") ?? "Unknown author"}
      </p>
      {description && (
        <p className="text-sm text-light-muted line-clamp-3">{description}</p>
      )}
    </div>
  );
};

export default BookResultCard;
