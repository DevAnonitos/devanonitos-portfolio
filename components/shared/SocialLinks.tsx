"use client"

import { SOCIAL_LINKS } from "@/constants/socials"
import { cn } from "@/lib/utils"
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Twitter
} from "lucide-react"
import { motion } from "motion/react"

const socialIcons = [
  { name: "GitHub", href: SOCIAL_LINKS.github, icon: Github, color: "hover:text-[#24292e] hover:bg-[#24292e]/10" },
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin, color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10" },
  { name: "Twitter", href: SOCIAL_LINKS.twitter, icon: Twitter, color: "hover:text-[#1da1f2] hover:bg-[#1da1f2]/10" },
  { name: "Telegram", href: SOCIAL_LINKS.telegram, icon: Send, color: "hover:text-[#0088cc] hover:bg-[#0088cc]/10" },
  { name: "Mail", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail, color: "hover:text-primary hover:bg-primary/10" },
]

interface SocialLinksProps {
  className?: string
  iconSize?: number
  variant?: "ghost" | "solid" | "outline"
}

const SocialLinks = ({
  className,
  iconSize = 20,
  variant = "ghost"
}: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialIcons.map((social) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "relative flex items-center justify-center rounded-2xl transition-all duration-300",
              variant === "ghost" && "size-10 text-muted-foreground hover:text-foreground",
              variant === "outline" && "size-12 border border-border bg-card/50 hover:border-primary/50 text-muted-foreground hover:text-primary backdrop-blur-sm",
              variant === "solid" && "size-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
              social.color
            )}
            title={social.name}
          >
            <Icon size={iconSize} />

            {/* Tooltip for desktop */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-lg bg-foreground px-2 py-1 text-[10px] font-bold text-background transition-all group-hover:scale-100 hidden md:block">
              {social.name}
            </span>
          </motion.a>
        )
      })}
    </div>
  )
}

export default SocialLinks
