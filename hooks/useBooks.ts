
import { useQuery } from '@tanstack/react-query';
import { getBooks } from '@/service/books';
import type { GoogleBooksResponse } from '@/types/book';

export const useBooks = (query: string, enabled = true) => {
  return useQuery<GoogleBooksResponse>({
    queryKey: ['books', query],
    queryFn: () => getBooks(query),
    enabled: enabled && !!query, // Only fetch if query exists
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
