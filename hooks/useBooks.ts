
import { useQuery } from '@tanstack/react-query';
import { api } from "@/lib/api/google-books";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks?: {
      thumbnail: string;
    };
    description?: string;
  };
}

interface BooksResponse {
  items: Book[];
  totalItems: number;
}

export const useBooks = (query: string, enabled = true) => {
  return useQuery<BooksResponse>({
    queryKey: ['books', query],
    queryFn: async () => {
      if (!query.trim()) {
        return { items: [], totalItems: 0 };
      }
      
      return api.get(`/volumes?q=${encodeURIComponent(query)}&maxResults=20`);
    },
    enabled: enabled && !!query, // Only fetch if query exists
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
