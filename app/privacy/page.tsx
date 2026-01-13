import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cream-50">
      <div className="container-narrow">
        <Link href="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <h1 className="text-ink text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="text-ink-muted space-y-6">
          <p className="text-xl text-ink">Your privacy matters to us. Here's the simple version: we don't collect your data, we don't track you, and we don't use cookies.</p>
          <h2 className="text-2xl font-display font-bold text-ink pt-6">What We Don't Do</h2>
          <ul className="list-disc pl-6 space-y-2"><li>We don't use cookies</li><li>We don't use Google Analytics or any tracking scripts</li><li>We don't collect personal information through this website</li><li>We don't share any data with third parties</li></ul>
          <h2 className="text-2xl font-display font-bold text-ink pt-6">Contact Us</h2>
          <p>D O'Shea's Bar, North Square, Sneem, Co. Kerry<br />Email: dosheas@eircom.net | Phone: +353 64 664 5281</p>
          <p className="text-sm text-ink-faint pt-6">Last updated: January 2026</p>
        </div>
      </div>
    </section>
  )
}
