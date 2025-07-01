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
<p>Disclaimer</p>
<p>These Terms of Use provided by Web 3.0 Foundation, Zug, Switzerland (hereinafter &ldquo;Foundation&rdquo;) apply to https://kusama.network/ as well as any other affiliated sites, digital services, or applications on which a link to these Terms of Use appears (collectively, the "Website") and apply to all visitors. These Terms of Use and any other terms that appear on the page from which you were directed to these Terms of Use govern your use of the Website. By accessing the Website, you agree to be legally bound by the Terms of Use then in effect. Please also refer to the relevant additional legal information applicable to your country.</p>
<p>These Terms of Use as well as the information and materials contained in the Website are subject to change at any time and from time to time, without notice. If you do not agree to be bound by these Terms of Use, do not use the Website.</p>
<p>The Website and all information and functionalities contained within them are not directed at or intended for use by any person resident or located in any jurisdiction where (1) the distribution of such information or functionality is contrary to the laws of such jurisdiction; or (2) such distribution is prohibited without obtaining the necessary licenses or authorizations by the relevant branch, subsidiary or affiliate office of Foundation and such licenses or authorizations have not been obtained.</p>
<p>Unless specifically stated otherwise, all price information is indicative only. No representation or warranty, either express or implied, is provided in relation to the accuracy, completeness or reliability of the materials, nor are they a complete statement of the securities, markets or developments referred to herein. The materials should not be regarded by recipients as a substitute for the exercise of their own judgment.</p>
<p>All information and materials published, distributed or otherwise made available on the Website are provided for informational purposes, for your non-commercial, personal use only. No information or materials published on the Website constitutes a solicitation, an offer, or a recommendation to buy or sell any investment instruments, to effect any transactions, or to conclude any legal act of any kind whatsoever.</p>
<p>Foundation does not provide investment, legal or tax advice through the Website and nothing herein should be construed as being financial, legal, tax or other advice.</p>
<p>Your use of the Website is at your own risk. The Website, together with all content, information and materials contained therein, is provided "as is" and "as available", without any representations or warranties of any kind. Any materials, information or content accessed, downloaded or otherwise obtained through the use of the Website is done at your own risk and Foundation is not responsible for any damage to your computer systems or loss of data that results from the download of such material.</p>
<p>To the fullest extent permitted by law, in no event shall Foundation or our affiliates, or any of our directors, employees, contractors, service providers or agents have any liability whatsoever to any person for any direct or indirect loss, liability, cost, claim, expense or damage of any kind, whether in contract or in tort, including negligence, or otherwise, arising out of or related to the use of all or part of the Website, or any links to third party websites.</p>
<p>Foundation shall not be liable to you or anybody else for any damages incurred in connection with any messages sent to Foundation using ordinary E-mail or any other electronic messaging system.</p>
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
