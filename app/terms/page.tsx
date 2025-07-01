import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare } from "lucide-react"
import { NetworkMesh } from "@/components/network-mesh"
import { GlitchText } from "@/components/glitch-text"
import { Button } from "@/components/ui/button"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { TerminalOutput } from "@/components/terminal-output"

export default function Home() {
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

            <Link href="/smart-contracts" className="text-[#ff0066] transition-colors">
              CONTRACTS
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

          <button className="md:hidden text-white">
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
          </button>
        </div>
      </header>




      <main className="flex-1 pt-16">

        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#110011]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/70 mb-6 font-mono leading-relaxed">
<p>Legal Disclosures<br />This website is owned and operated by Web 3.0 Technologies Foundation.</p>
<p>Registered Office<br />Web 3.0 Technologies Foundation <br />Gotthardstrasse 3<br />6300 Zug<br />Switzerland</p>
<p>Contact: hello@web3.foundation</p>
<p>Commercial Register Entry<br />The Canton of Zug, registered company name: Web 3.0 Technologies Stiftung, registration no.: CHE-322.596.347</p>
<p>VAT No.<br />CHE-322.596.347</p>
<p>Legal Disclaimer<br />Web 3.0 Technologies Foundation assumes no liability for the correctness, accuracy, timeliness, reliability, and completeness of the information. Any reliance you place on such information is therefore strictly at your own risk. Liability claims against Web 3.0 Technologies Foundation for material or immaterial damage resulting from access to, use or non-use of the published information, misuse of the connection or technical faults are excluded to the extent permissible by mandatory law. Web 3.0 Technologies Foundation expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice or to discontinue publication temporarily or permanently.</p>
<p>Liability for Links<br />Our website may contain links to third-party websites or resources. We provide these links solely for your convenience and do not endorse the content, products, or services offered by these third parties. We do not control these third-party websites or resources and are not responsible for their availability, content, or accuracy. We also do not guarantee the security of any information that you may provide to these third parties. You access and use these third-party websites and resources at your own risk. Web 3.0 Technologies Foundation shall not be liable for any damages or losses arising from your use of these third-party websites or resources.</p>
<p>Copyrights<br />The copyright and all other rights to content, images, photos, or other files on the website belong exclusively to Web 3.0 Technologies Foundation or the specifically named rights holders. The written permission of the copyright holders must be obtained in advance for the reproduction of any elements.</p>
		</p>
                <div className="flex space-x-4">
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
