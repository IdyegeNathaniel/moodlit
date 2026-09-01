"use client";

import BookResultCard from "@/components/books/BookResultcard";
import { PageShell } from "@/components/shared/sharedUi";
import { Button } from "@/components/ui/button";
import { moods } from "@/Const";
import { useBooks } from "@/hooks/useBooks";
import { Skeleton } from "@/components/ui/skeleton";
import NoBook from "@/app/assets/images/no-book.png";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
//import { MOCK_DATA_MOODS } from "./data";

export default function MoodRecommendation() {
  const router = useRouter();
  const params = useParams<{ moodId: string }>();

  const moodId = Array.isArray(params.moodId)
    ? params.moodId[0]
    : params.moodId;

  const mood = moods.find((item) => item.id === params.moodId);

  const { data, isLoading, isError, isFetching, refetch } = useBooks(
    mood?.query ?? "",
    !!mood,
  );

  const books = data?.items ?? [];

  //const books = MOCK_DATA_MOODS

  if (!mood) {
    return (
      <div className="w-full max-w-7xl min-h-screen mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Mood not found</h1>
          <p className="text-light-muted">
            Pick a mood first and we&apos;ll find books that match it.
          </p>
          <Button onClick={() => router.push("/moods")}>Choose a mood</Button>
        </div>
      </div>
    );
  }

  return (
    <PageShell mood={mood} title={mood.name} subtitle={mood.description}>
      {/* LOADING */}
      {isLoading && (
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
          aria-label="Loading book recommendations"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="w-full aspect-2/3" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ERROR */}
      {!isLoading && isError && (
        <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
          <div className="space-y-2 max-w-md">
            <h2 className="text-xl font-semibold">
              We couldn&apos;t find any recommendations
            </h2>

            <p className="text-light-muted">
              Something went wrong while fetching books for this mood. Please
              try again.
            </p>
          </div>

          <Button onClick={() => refetch()} disabled={isFetching}>
            {isFetching ? "Trying again..." : "Try again"}
          </Button>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !isError && books.length === 0 && (
        <div className="flex flex-col items-center text-center py-16 gap-5">
          <Image
            src={NoBook}
            width={280}
            height={280}
            alt="No books found"
            className="w-52 h-52 md:w-64 md:h-64 object-contain"
          />

          <div className="space-y-2 max-w-md">
            <h2 className="text-xl font-semibold">Nothing matched this mood</h2>

            <p className="text-light-muted">
              We couldn&apos;t find any books for this mood right now. Try
              another mood and discover something new.
            </p>
          </div>

          <Button onClick={() => router.push("/moods")}>
            Explore other moods
          </Button>
        </div>
      )}

      {/* RECOMMENDATIONS */}
      {!isLoading && !isError && books.length > 0 && (
        <section aria-label={`${mood.name} book recommendations`}>
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-light-muted">
              {books.length} {books.length === 1 ? "book" : "books"} found
            </p>

            {isFetching && (
              <span className="text-xs text-light-muted">
                Updating recommendations...
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {books.map((book) => (
              <BookResultCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
