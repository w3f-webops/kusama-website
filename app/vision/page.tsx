"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare, X, ExternalLink, Shield, Eye, Palette } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { MobileNav } from "@/components/mobile-nav"

const bounties = [
  {
    id: "pop",
    title: "PROOF OF PERSONHOOD",
    icon: Shield,
    description:
      "This bounty explores sybil-resilient, decentralized, public good and privacy-preserving ways for humans to prove their unique personhood online, without surveillance or revealing who they are.",
    applyLink: "https://dweb.link/ipns/k51qzi5uqu5dk1h0t1ofq49oww8ykmcnsxl1h3m0d41pb58eog9f9yjjwxnnwh/",
    formsLink: "https://formstr.app/i/kusama-pop",
    color: "#00ffff",
  },
  {
    id: "zkp",
    title: "ZERO KNOWLEDGE PROOFS",
    icon: Eye,
    description:
      "This bounty supports builders on Kusama who want to create the solutions that protect the freedom of privacy that enables verification without compromising privacy. Less trust, more proofs.",
    applyLink: "https://zk.kusama.vision/",
    formsLink: "https://www.notion.so/2f5593191de281d1a4b3e22ac30c6d2f",
    color: "#ff0066",
  },
  {
    id: "art",
    title: "ART & SOCIAL EXPERIMENTS",
    icon: Palette,
    description:
      "This bounty enables artists and creators to contribute to Kusama's cypherpunk philosophy and embody it in traditional art forms, media, avant-garde artifacts, or social on-chain happenings that represent the Web3 values to the existing community and new audiences.",
    applyLink: "https://jasper-guavaberry-3d0.notion.site/2ff2d70977f280bb84c5c9a1313442fd",
    formsLink: "https://www.notion.so/2ff2d70977f280bb84c5c9a1313442fd",
    tcLink: "https://drive.google.com/file/d/1Mp3gDs9IGylRGEdV0vVEx8SABXqogAcH/view",
    color: "#9900ff",
  },
]

function BountyCard({
  bounty,
  index,
}: {
  bounty: (typeof bounties)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = bounty.icon

  return (
    <div
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500"
        style={{ backgroundColor: bounty.color }}
      />

      {/* Card */}
      <div className="relative bg-black border border-white/10 group-hover:border-opacity-50 rounded-lg p-8 transition-all duration-300 h-full flex flex-col"
        style={{ borderColor: isHovered ? bounty.color : undefined }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="p-3 rounded-lg transition-colors duration-300 shrink-0"
            style={{
              backgroundColor: `${bounty.color}15`,
              borderColor: `${bounty.color}30`,
              borderWidth: 1,
            }}
          >
            <Icon size={28} style={{ color: bounty.color }} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-mono font-bold tracking-wider" style={{ color: bounty.color }}>
              {bounty.title}
            </h3>
            <div className="h-0.5 w-16 mt-2 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: bounty.color, opacity: 0.5 }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 font-mono text-sm leading-relaxed mb-8 flex-grow">
          {bounty.description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <Link
            href={bounty.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm font-medium tracking-wider transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: bounty.color,
              color: bounty.color === "#00ffff" ? "#000" : "#fff",
            }}
          >
            VISIT WEBSITE
            <ExternalLink size={14} />
          </Link>

          {bounty.formsLink && (
            <Link
              href={bounty.formsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm font-medium tracking-wider border transition-all duration-200 hover:bg-opacity-10"
              style={{
                borderColor: bounty.color,
                color: bounty.color,
                backgroundColor: isHovered ? `${bounty.color}10` : "transparent",
              }}
            >
              SUBMISSION FORM
              <ExternalLink size={14} />
            </Link>
          )}

          {bounty.tcLink && (
            <Link
              href={bounty.tcLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs tracking-wider text-white/50 hover:text-white/80 transition-colors"
            >
              T&C
              <ExternalLink size={12} />
            </Link>
          )}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l transition-colors duration-300"
          style={{ borderColor: isHovered ? bounty.color : "rgba(255,255,255,0.1)" }}
        />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r transition-colors duration-300"
          style={{ borderColor: isHovered ? bounty.color : "rgba(255,255,255,0.1)" }}
        />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l transition-colors duration-300"
          style={{ borderColor: isHovered ? bounty.color : "rgba(255,255,255,0.1)" }}
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-colors duration-300"
          style={{ borderColor: isHovered ? bounty.color : "rgba(255,255,255,0.1)" }}
        />
      </div>
    </div>
  )
}

export default function VisionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-[#ff0066]/20 backdrop-blur-sm bg-black/50 fixed w-full z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kusama-logo-canary-white.png"
              alt="Kusama"
              width={60}
              height={15}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wider">
            <Link href="/smart-contracts" className="text-white/80 hover:text-[#ff0066] transition-colors">
              CONTRACTS
            </Link>
            <Link href="/vision" className="text-[#ff0066] transition-colors">
              BOUNTIES
            </Link>
            <Link href="https://docs.polkadot.com/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              DEVELOPMENT DOCS
            </Link>
            <Link href="https://wiki.polkadot.network/kusama/kusama-getting-started/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              KUSAMA GUIDE
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link href="https://x.com/kusamanetwork" className="text-white/70 hover:text-[#ff0066]">
                <Twitter size={18} />
              </Link>
              <Link href="https://forum.polkadot.network/tag/kusama" className="text-white/70 hover:text-[#ff0066]">
                <MessageSquare size={18} />
              </Link>
              <Link href="https://github.com/paritytech/polkadot-sdk" className="text-white/70 hover:text-[#ff0066]">
                <Github size={18} />
              </Link>
            </div>
          </nav>

          <HoverGlowButton href="https://kusama.subsquare.io/referenda/498" className="hidden md:flex">
            THE NEW VISION
          </HoverGlowButton>

          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      <MobileNav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,0,102,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,0,102,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-[#ff0066]/5 via-transparent to-transparent" />

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff0066]/10 border border-[#ff0066]/30 text-[#ff0066] text-xs font-mono tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ff0066] animate-pulse" />
              KUSAMA VISION PROGRAM
            </div>

            <GlitchText
              text="A CALL TO THE BOLD"
              className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-wider mb-8"
            />

            <p className="text-white/60 text-lg md:text-xl font-mono leading-relaxed max-w-3xl mx-auto mb-6">
              To the builders, dreamers, and restless minds of the decentralized frontier
            </p>

            <div className="max-w-2xl mx-auto space-y-6 text-white/70 font-mono text-sm md:text-base leading-relaxed">
              <p>
                Kusama enters its second age of radical experimentation. A new age enabled by cutting edge tech,
                encryption-first technologies, and the will to protect decentralization, privacy and freedom —
                which are not granted.
              </p>
              <p>
                The Kusama Vision program enables three bounties to fund the tools of a movement that believes
                that <span className="text-[#ff0066]">resistance is built in code</span> and that{" "}
                <span className="text-[#00ffff]">freedom must be engineered, not requested</span>.
              </p>
              <p className="text-[#9900ff]">
                This is a call to build in the open and stay beyond control.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff0066]/50 to-transparent" />
        </div>

        {/* Bounties Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-[#0a0008] to-black">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-center">
              <span className="text-[#ff0066]">VISION</span> BOUNTIES
            </h2>
            <p className="text-white/50 font-mono text-center mb-16 max-w-xl mx-auto">
              Three pillars of the cypherpunk future. Choose your path.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {bounties.map((bounty, index) => (
                <BountyCard key={bounty.id} bounty={bounty} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff0066]/50 to-transparent" />
        </div>

        {/* Call to Action */}
        <section className="py-24 px-4 relative overflow-hidden">
          {/* Animated scanline effect */}
          <div className="absolute inset-0 scanline opacity-30" />

          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <div className="space-y-4 font-mono">
              <p className="text-2xl md:text-3xl text-white/90 tracking-wider">
                Gather your peers.
              </p>
              <p className="text-2xl md:text-3xl text-[#00ffff] tracking-wider">
                Encrypt your intent.
              </p>
              <p className="text-2xl md:text-3xl text-[#ff0066] tracking-wider glitch-text" data-text="Write the next chapter of the cypherpunk movement.">
                Write the next chapter of the cypherpunk movement.
              </p>
            </div>

            <div className="mt-12">
              <HoverGlowButton href="https://kusama.subsquare.io/referenda/498" size="lg">
                READ THE VISION
              </HoverGlowButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ff0066]/20 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/kusama-logo-canary-white.png"
                alt="Kusama"
                width={100}
                height={25}
                className="opacity-70"
              />
            </div>
            <div className="flex space-x-8 text-xs font-mono text-white/50">
              <Link href="/terms" className="hover:text-[#ff0066]">
                LEGAL DISCLOSURES
              </Link>
              <Link href="/privacy" className="hover:text-[#ff0066]">
                PRIVACY POLICY
              </Link>
              <Link href="/disclaimer" className="hover:text-[#ff0066]">
                DISCLAIMER
              </Link>
              <span>© {new Date().getFullYear()} KUSAMA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
