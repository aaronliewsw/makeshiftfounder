import Header from '@/components/header'
import Hero from '@/components/hero'
import ToolsGrid from '@/components/tools-grid'
import NewsletterForm from '@/components/newsletter-form'
import Footer from '@/components/footer'

export default function Page(){
  return (
    <main className="min-h-screen">
      <Header />
      <section id="hero" className="px-6 md:px-10 pt-20 pb-12">
        <Hero />
      </section>
      <section id="tools" className="px-6 md:px-10 py-12">
        <ToolsGrid />
      </section>
      <section id="newsletter" className="px-6 md:px-10 py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl mb-4">Join the newsletter</h2>
          <p className="text-cadetGray mb-6">Signals from the rebuild. Fewer hacks, more honesty.</p>
          <NewsletterForm />
        </div>
      </section>
      <section id="about" className="px-6 md:px-10 py-12">
        <div className="max-w-3xl space-y-4 text-cadetGray">
          <h2 className="font-display text-2xl md:text-3xl text-mfWhite">About</h2>
          <p>One-person lab. Tiny tools. Post-burnout entrepreneurship, documented in public. Chaotic-neutral, anti-corporate, emotionally intelligent sarcasm included.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
