

export interface ProcessTypes{
    step: string;
    tag: string;
    title: string;
    description: string;
    image: string;
}

export const ProcessSteps: ProcessTypes[] = [
    {
        step: "01",
        tag: "Mood Selection",
        title: "Choose Your Mood",
        description: "Tell MoodLit how you're feeling, and let your emotions guide every recommendation.",
        image: "/images/step1.png",
    },
    {
        step: "02",
        tag: "Recommendation",
        title: "Get Personalised Picks",
        description: "Our recommendation engine curates books that align with your mood, blending emotion, genre, and atmosphere into every suggestion.",
        image: "/images/step2.png",
    },
    {
        step: "03",
        tag: "Reading",
        title: "Start Your Next Read",
        description: "Step into a story that feels intentionally chosen for you—because the right book can transform an ordinary moment into an unforgettable one.",
        image: "/images/step3.png"
    },
]