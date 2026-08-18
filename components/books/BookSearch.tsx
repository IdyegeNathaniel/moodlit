"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { useMoodLitStore } from "@/stores/useMoodLitStore";
import { useEffect, useState } from "react";
import { useBooks } from "@/hooks/useBooks";

const BookSearch = () => {
  const { setSearchQuery } = useMoodLitStore();
  const [localQuery, setLocalQuery] = useState<string>("");

  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(localQuery);
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery]);

  const { data, isLoading, isError } = useBooks(debouncedQuery);
  const books = data?.items ?? [];

  const handleSearch = () => {
    setSearchQuery(localQuery);
    setDebouncedQuery(localQuery);
  };

  const handleClear = () => {
    setLocalQuery("");
    setSearchQuery("");
    setDebouncedQuery("");
  };

  return (
    <section className="w-full space-y-4">
      <div className="relative w-full flex items-center">
        <div className="relative flex-1">
          <Input
            placeholder="search for books, authors, or moods..."
            className="rounded-tr-none rounded-br-none"
            name="search-box"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          {/* CLEAR BUTTON */}
          {localQuery && (
            <Button
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-transparent rounded-full"
              size={"icon"}
              onClick={handleClear}
            >
              <X className="w-2 h-2 " />
            </Button>
          )}
        </div>
        {/* SEARCH BUTTON */}
        <Button
          variant="default"
          className="rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
          size={"icon-lg"}
          onClick={handleSearch}
          disabled={!localQuery}
        >
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Results */}
      {isLoading && (
        <p className="text-sm text-muted-foreground">Searching...</p>
      )}
      {isError && (
        <p className="text-sm text-red-500">
          Error occurred while fetching books.
        </p>
      )}

      {books.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {books.map((book) => (
            <div key={book.id} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{book.volumeInfo.title}</h3>
              <p className="text-sm text-muted-foreground">
                {book.volumeInfo.authors?.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BookSearch;
