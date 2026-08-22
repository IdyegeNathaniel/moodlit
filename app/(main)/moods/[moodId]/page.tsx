"use client";

import BookResultCard from "@/components/books/BookResultcard";
import LoadingSpinner from "@/components/shared/loadingSpinner";
import { PageShell } from "@/components/shared/sharedUi";
import { Button } from "@/components/ui/button";
import { moods } from "@/Const";
//import { useBooks } from "@/hooks/useBooks";
import NoBook from "@/app/assets/images/no-book.png"; 
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { MOCK_DATA_MOODS } from "./data";

export default function MoodRecommendation() {
  const router = useRouter();
  const params = useParams<{ moodId: string }>();
  const mood = moods.find((item) => item.id === params.moodId);
  //const { data, isLoading, isError } = useBooks(mood?.query ?? "", !!mood);
  //const books = data?.items ?? [];

  const books = MOCK_DATA_MOODS

  if (!mood) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Mood not found</h1>
        <p className="text-light-muted">
          Pick a mood first and we&apos;ll find books that match it.
        </p>
        <Button onClick={() => router.push("/moods")}>Choose a mood</Button>
      </div>
    );
  }

  return (
    <PageShell
      mood={mood}
      title={mood.name}
      subtitle={mood.description}
    >
         {/* {isLoading && (
          <div className="flex items-center justify-center py-16">
            <LoadingSpinner />
          </div>
        )}

         {isError && (
           <div className="text-center py-16">
             <p className="text-light-muted">
               Something went wrong fetching recommendations. Please try again.
             </p>
           </div>
         )}

         {!isLoading && !isError && books.length === 0 && (
           <div className="flex flex-col items-center text-center py-16">
              <Image src={NoBook} width={300} height={10} alt="no-books" />
             <p className="text-light-muted">
               No books found for this mood right now - try another one.
             </p>
           </div>
         )} */}

        {/* {!isLoading && !isError && books.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {books.map((book) => (
              <BookResultCard key={book.id} book={book} />
            ))}
          </div>
        )} */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {books.map((book) => (
              <BookResultCard key={book.id} book={book} onClick={() => router.push(`/${book.id}`) } />
            ))}
          </div>
    </PageShell>
  );
}
