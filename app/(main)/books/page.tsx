import BookCard from "@/components/books/BookCard";
import { PageShell } from "@/components/shared/sharedUi";
import { moods } from "@/Const";

export default function BooksPage() {
  return (
    <PageShell
      title="Drack & Intense"
      subtitle="Gripping Complex, emotionally heavy"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6">
        {moods.map((mood) => (
          <BookCard key={mood.id} mood={mood} />
        ))}
      </div>
    </PageShell>
  );
}
