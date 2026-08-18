import { Activity, Brain, BrainCircuit, CloudOff, Compass, Frown, LibraryBig, Megaphone, ThumbsDown } from "lucide-react";
import { FeaturesTypes, MoodTypes, ProblemTypes } from "./types";

export const moods: MoodTypes[] = [
  {
    id: "cozy",
    icon: "☕",
    name: "Cozy & Comforting",
    description: "Warm, gentle reads that feel like a hug",
    color: "#D4A574",
    books: 342,
    query: "cozy comfort fiction",
  },
  {
    id: "dark",
    icon: "🌙",
    name: "Dark & Intense",
    description: "Gripping, complex, emotionally heavy",
    color: "#6B5B95",
    books: 289,
    query: "dark psychological thriller",
  },
  {
    id: "light",
    icon: "☀️",
    name: "Light & Funny",
    description: "Fun, upbeat, makes you smile",
    color: "#F9D77E",
    books: 412,
    query: "humor lighthearted fiction",
  },
  {
    id: "thoughtful",
    icon: "🧠",
    name: "Thought-Provoking",
    description: "Deep, philosophical, mind-expanding",
    color: "#5B8A72",
    books: 356,
    query: "philosophical mind-expanding fiction",
  },
  {
    id: "adventure",
    icon: "🗺️",
    name: "Adventurous",
    description: "Epic journeys and thrilling quests",
    color: "#E07A5F",
    books: 298,
    query: "adventure fantasy epic quest",
  },
  {
    id: "romantic",
    icon: "💘",
    name: "Romantic",
    description: "Heartfelt, passionate love stories",
    color: "#C97B84",
    books: 387,
    query: "romance novel love story",
  },
];

export const problems: ProblemTypes[] = [
  {
    icon: <ThumbsDown size={32} />,
    title: "Endless Scrolling",
    desc: "Browse countless lists and recommendations without finding a book that truly grabs your attention.",
  },
  {
    icon: <Frown size={32} />,
    title: "Wrong Recommendations",
    desc: "Generic suggestions miss the mark because they don't consider your current mood or reading needs.",
  },
  {
    icon: <CloudOff size={32} />,
    title: "Decision Fatigue",
    desc: "Too many options and conflicting reviews make choosing your next book feel like a chore.",
  },
];

export const features: FeaturesTypes[] = [
  {
    icon: <Brain size={32} />,
    title: "6 Mood Categories",
    desc: "Find books that match exactly how you feel.",
  },

  {
    icon: <BrainCircuit size={32} />,
    title: "Smart Recommendations",
    desc: "Matches your mood and taste, not just what's trending.",
  },

  { 
    icon: <LibraryBig size={32} />,
    title: "Personal Library", 
    desc: "Track your reading across all moods" 
  },

  {
    icon: <Activity size={32} />,
    title: "Reading Insights",
    desc: "Discover patterns in your emotional reading",
  },

  { 
    icon: <Compass size={32} />,
    title: "Quick Discovery", 
    desc: "30 seconds from mood to your next book." 
  },

  { 
    icon: <Megaphone size={32} />,
    title: "Community Vibes", 
    desc: "See what readers in your mood are picking up." 
  },
];
