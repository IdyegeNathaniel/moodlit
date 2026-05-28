"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
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
    }
  };

  return (
   
   <>
      <Input
        placeholder="search for books, authors, or moods..."
        className="rounded-tr-none rounded-br-none"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === "Enter") handleSearch();
        }}
      />

      <Button
        variant="default"
        className="rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
        size={"icon-lg"}
        onClick={handleSearch}
        disabled={!localQuery}
      >
        <Search className="w-4 h-4" /> 
      </Button>
    </>
  );
};

export default BookSearch;
