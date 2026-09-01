"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import type { GoogleBookVolume } from "@/types/book";

interface BookResultCardProps {
  book: GoogleBookVolume;
  onClick?: () => void;
}

const BookResultCard = ({
  book,
  onClick,
}: BookResultCardProps) => {
  const {
    title,
    authors,
    imageLinks,
    description,
  } = book.volumeInfo;

  const thumbnail = imageLinks?.thumbnail?.replace(
    "http://",
    "https://"
  );

  const isClickable = Boolean(onClick);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (!onClick) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={`
        group
        bg-bg-light
        border border-border-light
        rounded-2xl
        shadow-sm
        overflow-hidden
        transition-all
        duration-300
        flex
        flex-col
        h-full
        ${
          isClickable
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            : ""
        }
      `}
    >
      {/* Cover */}
      <div className="relative w-full aspect-2/3 overflow-hidden bg-gray-100">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`Cover of ${title}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <BookOpen className="w-10 h-10 text-light-muted" />
            <span className="text-xs text-light-muted">
              No cover available
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-bold text-base md:text-lg leading-snug line-clamp-2"
          title={title}
        >
          {title}
        </h3>

        <p className="text-sm text-light-muted mt-1 line-clamp-1">
          {authors?.join(", ") || "Unknown author"}
        </p>

        {description && (
          <p className="text-sm text-light-muted mt-3 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default BookResultCard;
