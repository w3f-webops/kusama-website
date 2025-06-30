"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare, X } from "lucide-react"
import { NetworkMesh } from "@/components/network-mesh"
import { GlitchText } from "@/components/glitch-text"
import { Button } from "@/components/ui/button"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { TerminalOutput } from "@/components/terminal-output"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
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
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <NetworkMesh />
          </div>

          <div className="relative z-10 text-center px-4">
            <GlitchText
              text="UNLEASH CHAOS"
              className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-wider mb-8"
            />

            <p className="text-[#ff0066] font-mono text-sm md:text-base max-w-md mx-auto mb-8 glitch-text">
              Kusama: Web3's untamed frontier. We're fueling the fire for ZK &amp; bleeding-edge tech. 10M DOT for
              builders. No safety nets. No promises.
            </p>

            <HoverGlowButton href="https://docs.polkadot.com/" variant="outline" size="lg">
              DARE TO BUILD
            </HoverGlowButton>
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#110011]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-white">
                  <span className="text-[#ff0066]">REIGNITE</span> THE VOID
                </h2>
                <p className="text-white/70 mb-6 font-mono leading-relaxed">
                  This is Kusama - wild, permissionless, fully sovereign. it’s where code goes to get weird, break
                  stuff, and maybe change everything. We’re tapping back into its unruly spirit to push ZK and bend the
                  tech stack. No rules, just raw consensus. Build what’s next. Expect chaos.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-[#ff0066] text-[#ff0066] hover:bg-[#ff0066]/10 bg-transparent"
                  >
                    THE NEW VISION
                  </Button>
                  <Button className="bg-[#ff0066] hover:bg-[#ff0066]/80 text-black">DEPLOY CODE</Button>
                </div>
              </div>
              <div className="relative h-64 md:h-96">
                <div className="absolute inset-0 bg-black rounded-lg border border-[#ff0066]/50 overflow-hidden scanline">
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#ff0066]/80 to-[#ff0066]/20 h-6 flex items-center px-3">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff0066]/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00ffff]/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#9900ff]/80"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-white/80">kusama@network:~</div>
                  </div>

                  <div className="absolute top-6 bottom-0 left-0 right-0 p-4 overflow-hidden">
                    <TerminalOutput />
                  </div>

                  {/* Overlay effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff0066]/5 to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
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
              <Link href="/contact" className="hover:text-[#ff0066]">
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
