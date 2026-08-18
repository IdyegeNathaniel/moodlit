import { api } from "@/lib/api/google-books"
import type { GoogleBooksResponse } from "@/types/book";

export const getBooks = async (query: string): Promise<GoogleBooksResponse> => {

    if(!query.trim()){
        return { items: [], totalItems: 0 }
    }
    const { data } = await api.get(`/volumes?q=${encodeURIComponent(query)}&maxResults=20`);

    return data
}
