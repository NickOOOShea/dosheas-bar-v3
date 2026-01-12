import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react'

/**
 * D O'Shea's Bar v3 - Every fact sourced from SOURCES.md
 *
 * V2 Template Rules applied:
 * - Hero answers: What? Where? What next?
 * - Tap-to-call above fold
 * - Tap-to-maps above fold
 * - No em-dashes
 * - All facts verified
 */

export default function HomePage() {
  return (
    <main>
      {/* =====================================================
          HERO SECTION
          Answers: What? Where? What next?
          ===================================================== */}
      <section className="relative min-h-screen flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-wide-classic.webp"
            alt="D O'Shea's Bar - The Pink Pub in Sneem"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full px-6 pb-12 md:pb-20">
          <div className="max-w-4xl mx-auto">
            {/* WHAT: Business name and type */}
            {/* Source: RESEARCH.md lines 20-22 */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
              D O'Shea's Bar
            </h1>
            <p className="font-body text-xl md:text-2xl text-pink-300 mb-2">
              The Pink Pub in Sneem
            </p>

            {/* WHERE: Location */}
            {/* Source: RESEARCH.md lines 23, 42 */}
            <p className="font-body text-lg text-cream-100/80 mb-8">
              North Square, Sneem, Co. Kerry. Ring of Kerry.
            </p>

            {/* WHAT NEXT: CTAs - phone native */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Tap-to-call - Source: RESEARCH.md line 26 */}
              <a
                href="tel:+353646645281"
                className="btn-primary text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Book
              </a>

              {/* Tap-to-maps - Source: RESEARCH.md line 25 (GPS coords) */}
              <a
                href="https://www.google.com/maps?q=51.838653,-9.901576"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-ink"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>

              <Link href="/menu" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-ink">
                View Menu
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            {/* Quick info bar */}
            {/* Source: RESEARCH.md line 64 */}
            <div className="flex flex-wrap gap-6 text-cream-100/70 text-sm font-body">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Food: 12pm - 9pm daily
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +353 64 664 5281
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RECOGNITION - Why this pub matters
          Source: RESEARCH.md lines 35-38, 107-108
          ===================================================== */}
      <section className="py-16 px-6 bg-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl">
            One of Ireland's most photographed pubs.
          </p>
          <p className="font-body text-pink-100 mt-4">
            Featured in American Express and Visa advertisements. #1 Restaurant in Sneem on TripAdvisor.
          </p>
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
          Source: RESEARCH.md lines 30-33
          ===================================================== */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/interior-guinness.webp"
                alt="Inside D O'Shea's Bar"
                fill
                className="object-cover"
              />
            </div>

            {/* Content - all facts from RESEARCH.md */}
            <div>
              <span className="font-body text-pink-500 text-sm tracking-widest uppercase">
                Since 1996
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-ink mt-2 mb-6">
                Mary and Garbhan Kavanagh
              </h2>

              {/* Source: RESEARCH.md lines 30-33 */}
              <div className="space-y-4 font-body text-ink-muted text-lg">
                <p>
                  The O'Shea family ran this pub for over half a century. When Mary and Garbhan Kavanagh took over in 1996, they renovated the inside but kept the famous pink exterior.
                </p>
                <p>
                  That pink frontage has appeared in books, posters, postcards, and even a Der Spiegel Magazine feature for Visa.
                </p>
              </div>

              {/* Verified features - Source: RESEARCH.md lines 50-51, 55-56 */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm font-body text-ink-muted">
                <div>Real turf fire</div>
                <div>Terrace with estuary views</div>
                <div>Children's corner</div>
                <div>Live trad sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD SECTION
          Source: RESEARCH.md lines 64-74, menu.json
          ===================================================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="font-body text-pink-500 text-sm tracking-widest uppercase">
                From the Kitchen
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-ink mt-2 mb-6">
                Home cooked. Local produce.
              </h2>

              {/* Source: RESEARCH.md lines 65-71 */}
              <p className="font-body text-ink-muted text-lg mb-6">
                Kerry lamb and beef. Sneem sausages. Local fish. Ice cream from Kenmare.
              </p>

              {/* Menu highlights - Source: menu.json verified prices */}
              <div className="space-y-3 mb-8">
                {/* Source: menu.json line 23 */}
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <span className="font-body text-ink">Kenmare Bay Seafood Chowder</span>
                  <span className="font-body text-pink-500">€8.95</span>
                </div>
                {/* Source: menu.json line 50 */}
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <span className="font-body text-ink">12oz Sirloin Steak</span>
                  <span className="font-body text-pink-500">€29.50</span>
                </div>
                {/* Source: RESEARCH.md line 84 */}
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <span className="font-body text-ink">Sneem Sausage</span>
                  <span className="font-body text-pink-500">€14.50</span>
                </div>
                {/* Source: menu.json line 82 */}
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <span className="font-body text-ink">D O'Shea's Beef Burger</span>
                  <span className="font-body text-pink-500">€16.75</span>
                </div>
              </div>

              {/* Source: RESEARCH.md line 72 */}
              <p className="font-body text-ink-light text-sm mb-6">
                We cater for coeliacs, vegetarians, and diabetics.
              </p>

              <Link href="/menu" className="btn-primary">
                See Full Menu
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/food-burger-chips.webp"
                alt="D O'Shea's burger with chips"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
          Source: RESEARCH.md lines 112-114, menu.json line 170
          ===================================================== */}
      <section className="py-20 px-6 bg-ink text-white">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic mb-6">
            "Best fish and chips 10 out of 10"
          </blockquote>
          <p className="font-body text-cream-100/60">
            TripAdvisor Review
          </p>

          {/* Source: RESEARCH.md line 112 */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-body text-cream-100/80 italic">
              "Best place to get a Guinness in Sneem"
            </p>
            <p className="font-body text-cream-100/50 text-sm mt-2">
              A local workman, quoted on TripAdvisor
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERRACE PHOTO
          Source: RESEARCH.md lines 55-56
          ===================================================== */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/terrace-guinness-view.webp"
          alt="View from D O'Shea's terrace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent flex items-center">
          <div className="px-8 md:px-16 max-w-lg">
            <p className="font-display text-2xl md:text-3xl text-white">
              Terrace with views of the Sneem estuary.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / VISIT SECTION
          Source: RESEARCH.md lines 23-27, 64, 73
          ===================================================== */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Visit Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Location - Source: RESEARCH.md lines 23, 42, 46 */}
            <div className="bg-white rounded-xl p-8">
              <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="font-body font-semibold text-ink mb-2">Location</h3>
              <p className="font-body text-ink-muted">
                North Square, Sneem<br />
                Co. Kerry
              </p>
              <p className="font-body text-ink-light text-sm mt-2">
                Ring of Kerry. 27km from Kenmare.
              </p>
              <a
                href="https://www.google.com/maps?q=51.838653,-9.901576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-pink-500 font-body font-medium hover:text-pink-600"
              >
                Get Directions
              </a>
            </div>

            {/* Contact - Source: RESEARCH.md lines 26-27 */}
            <div className="bg-white rounded-xl p-8">
              <Phone className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="font-body font-semibold text-ink mb-2">Contact</h3>
              <a
                href="tel:+353646645281"
                className="block font-body text-pink-500 text-xl font-medium hover:text-pink-600"
              >
                +353 64 664 5281
              </a>
              <a
                href="mailto:dosheas@eircom.net"
                className="block font-body text-ink-muted mt-2 hover:text-pink-500"
              >
                dosheas@eircom.net
              </a>
              {/* Source: RESEARCH.md line 73 */}
              <p className="font-body text-ink-light text-sm mt-4">
                Booking recommended for dinner.
              </p>
            </div>

            {/* Hours - Source: RESEARCH.md line 64 */}
            <div className="bg-white rounded-xl p-8">
              <Clock className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="font-body font-semibold text-ink mb-2">Food Service</h3>
              <p className="font-display text-2xl text-pink-500">
                12pm - 9pm
              </p>
              <p className="font-body text-ink-muted">
                Daily
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="tel:+353646645281" className="btn-primary text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call to Book
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          V2 Rules: Address, phone, hours, privacy notice
          ===================================================== */}
      <footer className="bg-ink text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <p className="font-display text-2xl mb-2">D O'Shea's Bar</p>
              <p className="font-body text-cream-100/60 text-sm">The Pink Pub in Sneem</p>
            </div>

            {/* Contact - Source: RESEARCH.md lines 23, 26-27 */}
            <div className="font-body text-cream-100/80 text-sm">
              <p>North Square, Sneem, Co. Kerry</p>
              <p className="mt-2">+353 64 664 5281</p>
              <p>dosheas@eircom.net</p>
            </div>

            {/* Hours - Source: RESEARCH.md line 64 */}
            <div className="font-body text-cream-100/80 text-sm">
              <p className="font-medium text-white">Food Service</p>
              <p>12pm - 9pm daily</p>
            </div>
          </div>

          {/* Bottom bar with privacy notice */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-cream-100/40">
            <p>© {new Date().getFullYear()} D O'Shea's Bar</p>
            <p>This site does not use cookies or collect personal data.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
