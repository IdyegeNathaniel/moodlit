import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Replace with your actual type
type MoodId = string;

interface MoodLitState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;

  // Moods
  selectedMood: MoodId | null;
  setSelectedMood: (mood: MoodId | null) => void;
  clearSelectedMood: () => void;

  // Filters
  filters: {
    minRating: number;
    genres: string[];
    sortBy: "rating" | "recent" | "popular";
  };

  setMinRating: (rating: number) => void;
  toggleGenre: (genre: string) => void;
  setSortBy: (sortBy: "rating" | "recent" | "popular") => void;
  clearFilters: () => void;

  // Reset
  resetAll: () => void;
}

const initialState = {
  searchQuery: "",
  selectedMood: null,

  filters: {
    minRating: 0,
    genres: [],
    sortBy: "popular" as const,
  },
};

export const useMoodLitStore = create<MoodLitState>()(
  persist(
    (set) => ({
      ...initialState,

      // SEARCH
      setSearchQuery: (query) =>
        set({ searchQuery: query }),

      clearSearch: () =>
        set({ searchQuery: "" }),

      // MOODS
      setSelectedMood: (mood) =>
        set({ selectedMood: mood }),

      clearSelectedMood: () =>
        set({ selectedMood: null }),

      // FILTERS
      setMinRating: (rating) =>
        set((state) => ({
          filters: {
            ...state.filters,
            minRating: rating,
          },
        })),

      toggleGenre: (genre) =>
        set((state) => {
          const exists = state.filters.genres.includes(genre);

          return {
            filters: {
              ...state.filters,
              genres: exists
                ? state.filters.genres.filter((g) => g !== genre)
                : [...state.filters.genres, genre],
            },
          };
        }),

      setSortBy: (sortBy) =>
        set((state) => ({
          filters: {
            ...state.filters,
            sortBy,
          },
        })),

      clearFilters: () =>
        set({
          filters: initialState.filters,
        }),

      resetAll: () =>
        set(initialState),
    }),
    {
      name: "moodlit-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);