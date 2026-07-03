

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
        description: "Pick the mood that matches how you're feeling right now.",
        image: "/images/step1.png",
    },
    {
        step: "02",
        tag: "Recommendation",
        title: "Get Personalised Picks",
        description: "MoodLit recommends books that perfectly match your chosen mood and reading preferences.",
        image: "/images/step2.png",
    },
    {
        step: "03",
        tag: "Reading",
        title: "Start Your Next Read",
        description: "Relax, turn the first page, and enjoy a book chosen to perfectly match your mood.",
        image: "/images/step3.png"
    },
]