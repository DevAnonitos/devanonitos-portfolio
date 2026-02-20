import { 
  Code2, 
  Terminal, 
  Cpu, 
  Palette, 
  LineChart, 
  ShieldCheck 
} from "lucide-react"

export const SERVICES = [
  {
    id: "ser-1",
    title: "Fullstack Development",
    description: "Building scalable, high-performance web applications using modern stacks like Next.js, TypeScript, and Node.js.",
    icon: Code2,
    features: ["Custom Web Apps", "API Design", "Performance Optimization"],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "ser-2",
    title: "Data Science & AI",
    description: "Leveraging Python and machine learning frameworks to turn complex data into actionable business insights.",
    icon: LineChart,
    features: ["Predictive Modeling", "NLP", "Computer Vision"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: "ser-3",
    title: "System Architecture",
    description: "Designing robust, distributed systems that handle high traffic and ensure maximum availability.",
    icon: Cpu,
    features: ["Microservices", "Cloud Infrastructure", "Database Design"],
    color: "text-violet-500",
    bg: "bg-violet-500/10"
  },
  {
    id: "ser-4",
    title: "UI/UX Engineering",
    description: "Crafting pixel-perfect, accessible, and highly-interactive user interfaces that users love.",
    icon: Palette,
    features: ["Interactive Prototyping", "Design Systems", "Accessibility (A11y)"],
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
]
