import { Project, Research } from "@/types";

/**
 * Portfolio projects data
 */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoSmart E-Commerce",
    description: "A high-performance organic marketplace built with Next.js 14, focusing on core web vitals and seamless Stripe integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Prisma"],
    links: {
      github: "https://github.com/DevAnonitos/ecommerce",
      demo: "https://demo.devanonitos.com/ecommerce",
    },
    category: "Web App",
    featured: true
  },
  {
    id: "2",
    title: "NeuroVision AI",
    description: "An advanced data visualization dashboard that processes real-time neural network metrics using Python and React.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "Python", "FastAPI", "D3.js", "Pytorch"],
    links: {
      github: "https://github.com/DevAnonitos/ai-vision",
      demo: "https://demo.devanonitos.com/ai-vision",
    },
    category: "AI / Data Science",
  },
  {
    id: "3",
    title: "Pulse Mobile Health",
    description: "A cross-platform mobile application for tracking vital signs and connecting with healthcare providers via secure WebSockets.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99a01?q=80&w=1600&auto=format&fit=crop",
    tags: ["React Native", "Expo", "Node.js", "Socket.io"],
    links: {
      github: "https://github.com/DevAnonitos/pulse-health",
      demo: "https://demo.devanonitos.com/pulse-health",
    },
    category: "Mobile",
  },
  {
    id: "4",
    title: "Zenith UI Kit",
    description: "A premium design system and component library focused on accessibility and ultra-modern glassmorphism aesthetics.",
    image: "https://images.unsplash.com/photo-1613909209435-24a39f3ebd6c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Figma", "Storybook", "Framer Motion", "Tailwind"],
    links: {
      github: "https://github.com/DevAnonitos/zenith-ui",
      demo: "https://demo.devanonitos.com/zenith-ui",
    },
    category: "UI/UX",
  },
  {
    id: "5",
    title: "Vault Crypto Wallet",
    description: "Secure, decentralized finance dashboard for managing multi-chain assets with real-time price tracking and swaps.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
    tags: ["Ethereum", "Web3.js", "React", "Tailwind"],
    links: {
      github: "https://github.com/DevAnonitos/crypto-vault",
      demo: "https://demo.devanonitos.com/crypto-vault",
    },
    category: "Web App",
  },
  {
    id: "6",
    title: "OpenCloud Engine",
    description: "An open-source cloud management engine for orchestrating microservices across hybrid cloud environments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    tags: ["Docker", "Kubernetes", "Go", "Terraform"],
    links: {
      github: "https://github.com/DevAnonitos/opencloud",
      demo: "https://demo.devanonitos.com/opencloud",
    },
    category: "Open Source",
  }
];

export const RESEARCHS: Research[] = [
  {
    id: "r1",
    title: "The Future of Edge Computing",
    description: "A whitepaper on the integration of AI models at the edge for low-latency healthcare applications.",
    tags: ["Research", "Edge Computing", "AI"],
    link: "#"
  }
]

export const PROJECT_CATEGORIES = ["All", "Web App", "AI / Data Science", "Mobile", "UI/UX", "Open Source"];
