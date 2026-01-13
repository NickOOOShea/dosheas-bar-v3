import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-mint-400" />
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pink-500 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-white">D</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">D O'Shea's Bar</h3>
                <p className="text-pink-400 text-sm font-medium">The Pink Pub in Sneem</p>
              </div>
            </div>
            <p className="text-cream-300 leading-relaxed mb-6 max-w-sm">One of Ireland's most photographed pubs. Family-run since 1996, serving proper pints and honest food on the Ring of Kerry.</p>
            <p className="text-pink-400 font-semibold text-sm">#1 Restaurant in Sneem on TripAdvisor</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2"><div className="w-1 h-5 bg-pink-500" />Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-cream-300 hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-cream-300 hover:text-pink-400 transition-colors">Our Menu</Link></li>
              <li><Link href="/#about" className="text-cream-300 hover:text-pink-400 transition-colors">Our Story</Link></li>
              <li><Link href="/#visit" className="text-cream-300 hover:text-pink-400 transition-colors">Find Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2"><div className="w-1 h-5 bg-mint-400" />Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-cream-300 hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-cream-300 hover:text-pink-400 transition-colors">Terms of Service</Link></li>
            </ul>
            <p className="mt-6 text-sm text-ink-faint">We don't use cookies or track visitors.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2"><div className="w-1 h-5 bg-pink-500" />Contact</h4>
            <address className="not-italic space-y-4 text-cream-300">
              <a href="tel:+353646645281" className="flex items-center gap-3 hover:text-pink-400 transition-colors"><Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />+353 64 664 5281</a>
              <a href="mailto:dosheas@eircom.net" className="flex items-center gap-3 hover:text-pink-400 transition-colors"><Mail className="w-5 h-5 text-pink-500 flex-shrink-0" />dosheas@eircom.net</a>
              <a href="https://maps.google.com/?q=51.838653,-9.901576" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-pink-400 transition-colors"><MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" /><span>North Square<br />Sneem, Co. Kerry</span></a>
              <div className="flex items-center gap-3 text-cream-400"><Clock className="w-5 h-5 text-mint-400 flex-shrink-0" /><span>Food: 12pm - 9pm daily</span></div>
            </address>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-ink-light">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-ink-faint">&copy; {currentYear} D O'Shea's Bar. All rights reserved.</p>
            <p className="text-sm text-ink-faint flex items-center gap-2">Website by <a href="https://connecteire.ie" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors inline-flex items-center gap-1">Connecteire<ExternalLink className="w-3 h-3" /></a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
