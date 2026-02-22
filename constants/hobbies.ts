import {
    BookText,
    Camera,
    Dumbbell,
    Gamepad2,
    Map,
    Music
} from "lucide-react"

export const HOBBIES = [
  {
    title: "Photography",
    description: "Capturing fleeting moments and world perspectives through my 35mm lens.",
    icon: Camera,
    image: "/assets/images/hobbies/photography.jpg",
    color: "from-blue-500/20 to-indigo-500/20",
    tags: ["Nature", "Street", "Street Art"]
  },
  {
    title: "Gaming",
    description: "Exploring immersive worlds and competitive mechanics in strategy and RPG titles.",
    icon: Gamepad2,
    image: "/assets/images/hobbies/gaming.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    tags: ["Strategy", "eSports", "AAA"]
  },
  {
    title: "Traveling",
    description: "Venturing into diverse cultures to broaden my horizons and gain fresh outlooks.",
    icon: Map,
    image: "/assets/images/hobbies/travel.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
    tags: ["Backpacking", "Culture", "Cuisine"]
  },
  {
    title: "Music Production",
    description: "Crafting lo-fi beats and experimental sounds to unwind after deep coding sessions.",
    icon: Music,
    image: "/assets/images/hobbies/music.jpg",
    color: "from-rose-500/20 to-orange-500/20",
    tags: ["Lo-fi", "Ableton", "Synthesizers"]
  },
  {
    title: "Gym & Fitness",
    description: "Maintaining a balanced lifestyle through rigorous training and physical discipline.",
    icon: Dumbbell,
    image: "/assets/images/hobbies/fitness.jpg",
    color: "from-cyan-500/20 to-blue-500/20",
    tags: ["Weightlifting", "Yoga", "Endurance"]
  },
  {
    title: "Tech Reading",
    description: "Staying ahead of the curve by diving into whitepapers and architectural deep dives.",
    icon: BookText,
    image: "/assets/images/hobbies/reading.jpg",
    color: "from-amber-500/20 to-orange-500/20",
    tags: ["Web3", "AI", "Cloud Native"]
  }
]
