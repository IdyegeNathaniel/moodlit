"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { useMoodLitStore } from "@/stores/useMoodLitStore";
import { useEffect, useState } from "react";

const BookSearch = () => {
  const { setSearchQuery } = useMoodLitStore();

  const [localQuery, setLocalQuery] = useState("");



  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery]);

  const handleSearch = () => {
    if (localQuery.trim()) {
      setSearchQuery(localQuery);
  };

  console.log(setSearchQuery)
}
 
const handleClear = () => {
  setLocalQuery("")
}

  return (
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
        {
          localQuery && (
            <Button
          variant="ghost"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-transparent rounded-full"
          size={"icon"}
          onClick={handleClear}
        >
          <X className="w-2 h-2 " />
        </Button>
          )
        }
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
  );
};

export default BookSearch;
