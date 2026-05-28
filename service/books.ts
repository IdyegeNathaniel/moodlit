import { api } from "@/lib/api/google-books";



export const getBooks = async() => {
    try {
        const response = await fetch('/volumes?q=javascript');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
}