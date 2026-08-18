"use client";

import BookResultCard from "@/components/books/BookResultcard";
import LoadingSpinner from "@/components/shared/loadingSpinner";
import { PageShell } from "@/components/shared/sharedUi";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { moods } from "@/Const";
import { useBooks } from "@/hooks/useBooks";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function MoodRecommendation() {
  const router = useRouter();
  const params = useParams<{ moodId: string }>();
  const mood = moods.find((item) => item.id === params.moodId);
  const { data, isLoading, isError } = useBooks(mood?.query ?? "", !!mood);
  const books = data?.items ?? [];

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
         {isLoading && (
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
           <div className="text-center py-16">
             <p className="text-light-muted">
               No books found for this mood right now - try another one.
             </p>
           </div>
         )}

        {!isLoading && !isError && books.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {books.map((book) => (
              <BookResultCard key={book.id} book={book} />
            ))}
          </div>
        )}
    </PageShell>

    // <section className="h-screen space-y-4">
    //   <div className="w-full max-w-7xl mx-auto px-4 py-10">
    //     <button
    //       onClick={() => router.push("/moods")}
    //       className="flex items-center gap-2 text-sm text-light-muted hover:text-plum mb-6 cursor-pointer"
    //     >
    //       <ArrowLeft className="w-4 h-4" />
    //       Back
    //     </button>

    //     <div className="flex items-center gap-3 mb-8">
    //       <span className="text-4xl">{mood.icon}</span>
    //       <div>
    //         <h1 className="text-2xl md:text-3xl font-bold">{mood.name}</h1>
    //         <p className="text-light-muted">{mood.description}</p>
    //       </div>
    //     </div>

    //     {isLoading && (
    //       <div className="flex items-center justify-center py-16">
    //         <LoadingSpinner />
    //       </div>
    //     )}

    //     {isError && (
    //       <div className="text-center py-16">
    //         <p className="text-light-muted">
    //           Something went wrong fetching recommendations. Please try again.
    //         </p>
    //       </div>
    //     )}

    //     {!isLoading && !isError && books.length === 0 && (
    //       <div className="text-center py-16">
    //         <p className="text-light-muted">
    //           No books found for this mood right now - try another one.
    //         </p>
    //       </div>
    //     )}

    //     {!isLoading && !isError && books.length > 0 && (
    //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    //         {books.map((book) => (
    //           <BookResultCard key={book.id} book={book} />
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </section>
  );
}
