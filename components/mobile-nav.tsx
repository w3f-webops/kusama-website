"use client"
import Link from "next/link"
import { Github, Twitter, MessageSquare } from "lucide-react"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-col items-center gap-y-8" onClick={(e) => e.stopPropagation()}>
        <nav className="flex flex-col items-center space-y-6 text-lg font-mono tracking-wider">
          <Link
            href="/smart-contracts"
            className="text-white/80 hover:text-[#ff0066] transition-colors"
            onClick={handleLinkClick}
          >
            CONTRACTS
          </Link>
          <Link
            href="/vision"
            className="text-white/80 hover:text-[#ff0066] transition-colors"
            onClick={handleLinkClick}
          >
            BOUNTIES
          </Link>
          <Link
            href="https://wiki.polkadot.network/kusama/kusama-getting-started/"
            className="text-white/80 hover:text-[#ff0066] transition-colors"
            onClick={handleLinkClick}
          >
            KUSAMA GUIDE
          </Link>
        </nav>

        <HoverGlowButton href="https://kusama.subsquare.io/referenda/498" onClick={handleLinkClick}>
          THE NEW VISION
        </HoverGlowButton>

        <div className="flex items-center space-x-6 pt-4">
          <Link
            href="https://x.com/kusamanetwork"
            className="text-white/70 hover:text-[#ff0066]"
            onClick={handleLinkClick}
          >
            <Twitter size={22} />
          </Link>
          <Link
            href="https://forum.polkadot.network/tag/kusama"
            className="text-white/70 hover:text-[#ff0066]"
            onClick={handleLinkClick}
          >
            <MessageSquare size={22} />
          </Link>
          <Link
            href="https://github.com/paritytech/polkadot-sdk"
            className="text-white/70 hover:text-[#ff0066]"
            onClick={handleLinkClick}
          >
            <Github size={22} />
          </Link>
        </div>
      </div>
    </div>
  )
}

