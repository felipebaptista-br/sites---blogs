import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatAreThey } from "@/components/what-are-they"
import { Differences } from "@/components/differences"
import { WhyUpdate } from "@/components/why-update"
import { Integration } from "@/components/integration"
import { History } from "@/components/history"
import { StatsMarquee } from "@/components/stats-marquee"
import { CustomerService } from "@/components/customer-service"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhatAreThey />
        <Differences />
        <StatsMarquee />
        <WhyUpdate />
        <Integration />
        <History />
        <CustomerService />
        <Footer />
      </main>
    </div>
  )
}
