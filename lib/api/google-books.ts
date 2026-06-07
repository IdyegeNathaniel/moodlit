

const GOOGLE_BOOKS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY; 
const BASE_URL = "https://www.googleapis.com/books/v1"

export const api = {
  get: async (endpoint: string) => {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  }
}