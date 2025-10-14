import { Hero } from "@/components/hero"
import { WhatAreThey } from "@/components/what-are-they"
import { History } from "@/components/history"
import { StatsMarquee } from "@/components/stats-marquee"
import { Differences } from "@/components/differences"
import { Integration } from "@/components/integration"
import { WhyUpdate } from "@/components/why-update"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <WhatAreThey />
        <History />
        <StatsMarquee />
        <Differences />
        <Integration />
        <WhyUpdate />
        <Footer />
      </main>
    </>
  )
}
