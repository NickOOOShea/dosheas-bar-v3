import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cream-50">
      <div className="container-narrow">
        <Link href="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <h1 className="text-ink text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
        <div className="text-ink-muted space-y-6">
          <p className="text-xl text-ink">Welcome to D O'Shea's Bar. By using this website, you agree to these simple terms.</p>
          <h2 className="text-2xl font-display font-bold text-ink pt-6">Website Use</h2>
          <p>This website is for informational purposes about D O'Shea's Bar. Menu items, prices, and opening hours are subject to change. Please call ahead to confirm.</p>
          <h2 className="text-2xl font-display font-bold text-ink pt-6">Accuracy</h2>
          <p>We do our best to keep information current, but we can't guarantee everything is always 100% accurate. When in doubt, give us a ring.</p>
          <h2 className="text-2xl font-display font-bold text-ink pt-6">Contact Us</h2>
          <p>D O'Shea's Bar, North Square, Sneem, Co. Kerry<br />Email: dosheas@eircom.net | Phone: +353 64 664 5281</p>
          <p className="text-sm text-ink-faint pt-6">Last updated: January 2026</p>
        </div>
      </div>
    </section>
  )
}
