"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare, ExternalLink, Copy, Terminal, Zap, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverGlowButton } from "@/components/hover-glow-button"

export default function SmartContractsPage() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const copyToClipboard = async (text: string, endpoint: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEndpoint(endpoint)
      setTimeout(() => setCopiedEndpoint(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

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
            <Link href="/vision" className="text-white/80 hover:text-[#ff0066] transition-colors">
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
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-[#110011]">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff0066]/10 border border-[#ff0066]/20 text-[#ff0066] text-sm font-mono mb-6">
              <Zap size={14} />
              PREVIEW RELEASE LIVE
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-wider mb-6">
              <span className="text-[#ff0066]">SMART CONTRACTS</span>
              <br />
              ON KUSAMA
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-mono leading-relaxed mb-8 max-w-2xl mx-auto">
              Ethereum-compatible smart contracts are live on Kusama. Deploy with familiar tools like Remix and Hardhat.
              Break things. Build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverGlowButton href="#quick-start" variant="default" size="lg">
                START BUILDING
              </HoverGlowButton>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center">
              <span className="text-[#ff0066]">QUICK</span> START
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Testnet Card */}
              <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-xl font-mono font-bold text-white">TESTNET (RECOMMENDED)</h3>
                </div>
                <p className="text-white/70 mb-4 font-mono text-sm">
                  Deploy on Paseo testnet for the latest stable features. Perfect for testing and development.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="text-white/50">Network:</span>
                    <span className="text-[#ff0066]">Paseo Passet Hub</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="text-white/50">Status:</span>
                    <span className="text-green-400">Most up-to-date</span>
                  </div>
                </div>
                <Link href="https://docs.polkadot.com/develop/smart-contracts/connect-to-polkadot/">
                  <Button className="w-full bg-[#ff0066] hover:bg-[#ff0066]/80 text-black font-mono">
                    DEPLOY TO TESTNET
                  </Button>
                </Link>
              </div>

              {/* Kusama Card */}
              <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff0066]"></div>
                  <h3 className="text-xl font-mono font-bold text-white">KUSAMA MAINNET</h3>
                </div>
                <p className="text-white/70 mb-4 font-mono text-sm">
                  Deploy to live environment on Kusama Hub. Real tokens, real consequences.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="text-white/50">Chain ID:</span>
                    <span className="text-[#ff0066]">420420418</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="text-white/50">Para ID:</span>
                    <span className="text-[#ff0066]">1000</span>
                  </div>
                </div>
                <Link href="#network-details">
                  <Button
                    variant="outline"
                    className="w-full border-[#ff0066] text-[#ff0066] hover:bg-[#ff0066]/10 font-mono bg-transparent"
                  >
                    DEPLOY TO KUSAMA
                  </Button>
                </Link>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-black border border-[#ff0066]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={20} className="text-[#ff0066]" />
                <h3 className="text-lg font-mono font-bold">Deploy with Hardhat</h3>
              </div>
              <div className="bg-black/80 rounded p-4 font-mono text-sm overflow-x-auto">
                <div className="text-white/50 mb-2"># Install dependencies</div>
                <div className="text-[#ff0066] mb-4">
                  npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers
                </div>

                <div className="text-white/50 mb-2"># Configure hardhat.config.js</div>
                <div className="text-white mb-4">
                  {`networks: {
  kusama: {
    url: "https://kusama-asset-hub-eth-rpc.polkadot.io",
    chainId: 420420418
  }
}`}
                </div>

                <div className="text-white/50 mb-2"># Deploy</div>
                <div className="text-[#ff0066]">npx hardhat run scripts/deploy.js --network kusama</div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Details */}
        <section id="network-details" className="py-20 px-4 bg-gradient-to-b from-[#110011] to-black">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12 text-center">
              <span className="text-[#ff0066]">NETWORK</span> DETAILS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Kusama Endpoints */}
              <div className="space-y-6">
                <h3 className="text-xl font-mono font-bold text-[#ff0066] mb-4">KUSAMA ENDPOINTS</h3>

                <div className="space-y-4">
                  <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70 font-mono text-sm">RPC Endpoint</span>
                      <button
                        onClick={() => copyToClipboard("https://kusama-asset-hub-rpc.polkadot.io/", "rpc")}
                        className="text-white/50 cursor-pointer hover:text-[#ff0066] transition-colors"
                      >
                        {copiedEndpoint === "rpc" ? (
                          <span className="text-green-400 text-xs font-mono">COPIED!</span>
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <code className="text-[#ff0066] text-sm break-all">https://kusama-asset-hub-rpc.polkadot.io/</code>
                  </div>

                  <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70 font-mono text-sm">ETH-RPC Endpoint</span>
                      <button
                        onClick={() => copyToClipboard("https://kusama-asset-hub-eth-rpc.polkadot.io", "eth-rpc")}
                        className="text-white/50 cursor-pointer hover:text-[#ff0066] transition-colors"
                      >
                        {copiedEndpoint === "eth-rpc" ? (
                          <span className="text-green-400 text-xs font-mono">COPIED!</span>
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <code className="text-[#ff0066] text-sm break-all">
                      https://kusama-asset-hub-eth-rpc.polkadot.io
                    </code>
                  </div>

                  <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70 font-mono text-sm">Block Explorer</span>
                      <Link
                        href="https://blockscout-kusama-asset-hub.parity-chains-scw.parity.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-white/50 cursor-pointer hover:text-[#ff0066]" />
                      </Link>
                    </div>
                    <code className="text-[#ff0066] text-sm break-all">
                      blockscout-kusama-asset-hub.parity-chains-scw.parity.io
                    </code>
                  </div>
                </div>
              </div>

              {/* Tools & Support */}
              <div className="space-y-6">
                <h3 className="text-xl font-mono font-bold text-[#ff0066] mb-4">TOOLS & SUPPORT</h3>

                <div className="space-y-4">
                  <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-4">
                    <h4 className="font-mono font-bold mb-2">Compatible Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Link href="https://docs.polkadot.com/develop/smart-contracts/dev-environments/remix/">
                        <span className="px-2 py-1 bg-[#ff0066]/10 border border-[#ff0066]/20 rounded text-xs font-mono hover:bg-[#ff0066]/20 cursor-pointer transition-colors">
                          Remix
                        </span>
                      </Link>
                      <Link href="https://docs.polkadot.com/develop/smart-contracts/dev-environments/hardhat/">
                        <span className="px-2 py-1 bg-[#ff0066]/10 border border-[#ff0066]/20 rounded text-xs font-mono hover:bg-[#ff0066]/20 cursor-pointer transition-colors">
                          Hardhat
                        </span>
                      </Link>
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs font-mono text-white/70">
                        MetaMask
                      </span>
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs font-mono text-white/70">
                        OpenZeppelin
                      </span>
                      <Link href="https://docs.polkadot.com/develop/smart-contracts/libraries/web3-js/">
                        <span className="px-2 py-1 bg-[#ff0066]/10 border border-[#ff0066]/20 rounded text-xs font-mono hover:bg-[#ff0066]/20 cursor-pointer transition-colors">
                          web3.js
                        </span>
                      </Link>
                      <Link href="https://docs.polkadot.com/develop/smart-contracts/libraries/viem/">
                        <span className="px-2 py-1 bg-[#ff0066]/10 border border-[#ff0066]/20 rounded text-xs font-mono hover:bg-[#ff0066]/20 cursor-pointer transition-colors">
                          viem
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-[#ff0066]/20 rounded-lg p-4">
                    <h4 className="font-mono font-bold mb-2">Get Help</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-white/70">GitHub:</span>
                        <Link
                          href="https://github.com/paritytech/contract-issues/"
                          className="text-[#ff0066] hover:underline"
                        >
                          Report bugs directly
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/70">Telegram:</span>
                        <Link href="https://t.me/substratedevs" className="text-[#ff0066] hover:underline">
                          Best effort support
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Known Issues */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle size={24} className="text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-mono font-bold">
                <span className="text-yellow-500">KNOWN</span> ISSUES
              </h2>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <p className="text-yellow-200 font-mono text-sm mb-4">
                This is a preview release. Some limitations exist while we optimize for full compatibility.
              </p>

              <div className="space-y-4">
                <div className="border-l-2 border-yellow-500/50 pl-4">
                  <h4 className="font-mono font-bold text-white mb-2">Wallet Compatibility</h4>
                  <p className="text-white/70 text-sm">
                    Some Ethereum wallets may show "Invalid transaction" errors. Use Hardhat for deployment and MetaMask
                    for dApp interaction.
                  </p>
                </div>

                <div className="border-l-2 border-yellow-500/50 pl-4">
                  <h4 className="font-mono font-bold text-white mb-2">Contract Size Limits</h4>
                  <p className="text-white/70 text-sm">
                    Current compiler produces larger bytecode than typical EVM. We're actively optimizing this.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/70 font-mono mb-6">
                Your feedback helps us improve. Test, break things, and let us know what you find.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:feedback@kusama.network">
                  <Button className="bg-[#ff0066] hover:bg-[#ff0066]/80 text-black font-mono">SUBMIT FEEDBACK</Button>
                </Link>
                <Link href="https://github.com/paritytech/contract-issues/">
                  <Button
                    variant="outline"
                    className="border-[#ff0066] text-[#ff0066] hover:bg-[#ff0066]/10 font-mono bg-transparent"
                  >
                    REPORT BUGS
                  </Button>
                </Link>
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

