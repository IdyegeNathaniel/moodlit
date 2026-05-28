
import Image from "next/image";
import NoBook from "@/app/assets/images/no-book.png";

const EmptyShelf = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-sm md:text-base text-center font-bold">No books</p>
            <Image src={NoBook} width={300} height={10} alt="no-books" />
    </div>
  )
}

export default EmptyShelf