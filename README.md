

# MoodLit

## Overview


## Project Structure

moodlit/
├── app/
│   ├── (auth)/                          # Auth-related routes (grouped)
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   └── sign-up/
│   │       └── page.tsx
│   │
│   ├── (main)/                          # Main app routes (grouped, shares layout)
│   │   ├── layout.tsx                   # Shared layout with nav
│   │   ├── page.tsx                     # Home/Dashboard
│   │   ├── moods/
│   │   │   └── page.tsx                 # Mood selection page
│   │   ├── books/
│   │   │   ├── page.tsx                 # Book search/browse
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx             # Individual book detail
│   │   │   └── recommendations/
│   │   │       └── page.tsx             # Mood-based recommendations
│   │   ├── shelves/
│   │   │   ├── page.tsx                 # All shelves overview
│   │   │   ├── reading/
│   │   │   │   └── page.tsx             # Currently reading
│   │   │   ├── want-to-read/
│   │   │   │   └── page.tsx             # Want to read
│   │   │   └── finished/
│   │   │       └── page.tsx             # Finished books
│   │   └── profile/
│   │       └── page.tsx                 # User profile & stats
│   │
│   ├── api/                             # API routes
│   │   ├── books/
│   │   │   ├── route.ts                 # GET search books
│   │   │   ├── [id]/
│   │   │   │   └── route.ts             # GET specific book
│   │   │   └── seed/
│   │   │       └── route.ts             # POST seed mood-tagged books
│   │   ├── moods/
│   │   │   ├── route.ts                 # GET all moods
│   │   │   └── [id]/
│   │   │       └── route.ts             # GET specific mood
│   │   ├── recommendations/
│   │   │   └── route.ts                 # POST get recommendations by mood
│   │   ├── shelves/
│   │   │   ├── route.ts                 # GET user's shelves
│   │   │   ├── add/
│   │   │   │   └── route.ts             # POST add book to shelf
│   │   │   └── remove/
│   │   │       └── route.ts             # DELETE remove book from shelf
│   │   └── webhooks/
│   │       └── clerk/
│   │           └── route.ts             # Clerk webhook for user sync
│   │
|   ├── provider.tsx                     #Tanstack query provider
│   ├── layout.tsx                       # Root layout
│   ├── globals.css                      # Global styles + Tailwind
│   └── not-found.tsx                    # Error boundary
│
├── components/
│   ├── ui/                              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Skeleton.tsx
|   |   ├── switch.tsx
│   │   └── Badge.tsx
│   │
│   ├── layout/                          # Layout components
│   │   ├── Navbar.tsx
│   │   ├── AuthNav.tsx
│   │   └── Footer.tsx
│   │
│   ├── books/                           # Book-related components
│   │   ├── BookCard.tsx                 # Book display card
│   │   ├── BookGrid.tsx                 # Grid of books
│   │   ├── BookDetail.tsx               # Detailed book view
│   │   ├── BookSearch.tsx               # Search input + results
│   │   └── AddToShelfButton.tsx         # Quick add to shelf
│   │
│   ├── moods/                           # Mood-related components
│   │   ├── MoodSelector.tsx             # Main mood selection UI
│   │   ├── MoodTag.tsx                  # Individual mood tag/pill
│   │   ├── MoodGrid.tsx                 # Grid of mood options
│   │   └── MoodBadge.tsx                # Small mood indicator
│   │
│   ├── shelves/                         # Shelf components
│   │   ├── ShelfView.tsx                # Display a shelf
│   │   ├── ShelfTabs.tsx                # Navigate between shelves
│   │   └── EmptyShelf.tsx               # Empty state
│   │
│   └── shared/                          # Shared/common components
│       ├── LoadingSpinner.tsx
│       ├── ErrorMessage.tsx
│       ├── SearchBar.tsx
│       └── UserAvatar.tsx
│
├── lib/
│   ├── prisma.ts                        # Prisma client singleton
│   ├── utils.ts                         # Utility functions (cn, etc.)
│   ├── validations.ts                   # Zod schemas for validation
│   │
│   ├── api/                             # External API wrappers
│   │   ├── google-books.ts              # Google Books API functions
│   │   └── open-library.ts              # Open Library API (backup)
│   │
│   ├── db/                              # Database helpers
│   │   ├── books.ts                     # Book queries
│   │   ├── moods.ts                     # Mood queries
│   │   ├── shelves.ts                   # Shelf queries
│   │   └── users.ts                     # User queries
│   │
│   └── recommendations/                 # Recommendation algorithm
│       ├── algorithm.ts                 # Main recommendation logic
│       ├── mood-matcher.ts              # Mood matching logic
│       └── utils.ts                     # Helper functions
│
├── prisma/
│   ├── schema.prisma                    # Database schema
│   ├── seed.ts                          # Seed script (mood-tagged books)
│   └── migrations/                      # Migration files
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── placeholder-book.png
│   │   └── moods/                       # Mood icons/illustrations
│   └── fonts/                           # Custom fonts if needed
│
├── types/
│   ├── index.ts                         # Shared TypeScript types
│   ├── book.ts                          # Book-related types
│   ├── mood.ts                          # Mood-related types
│   └── user.ts                          # User-related types
│
├── hooks/                               # Custom React hooks
│   ├── useBooks.ts                      # Book data fetching
│   ├── useMoods.ts                      # Mood data
│   ├── useShelves.ts                    # Shelf operations
│   └── useRecommendations.ts            # Recommendations
│
├── config/
│   ├── site.ts                          # Site metadata, URLs
│   └── moods.ts                         # Mood definitions & colors
│
├── middleware.ts                        # Next.js middleware (auth checks)
├── .env.example                         # Example environment variables
├── .env.local                           # Actual env vars (gitignored)
├── next.config.js                       # Next.js configuration
├── tailwind.config.ts                   # Tailwind configuration
├── tsconfig.json                        # TypeScript configuration
├── package.json
└── README.md