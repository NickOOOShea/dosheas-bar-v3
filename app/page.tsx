import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight, Star, Quote, Clock, Car, CreditCard, Wifi, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image src="/images/exterior-wide-classic.jpg" alt="D O'Shea's Bar - The iconic pink facade in Sneem" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full pb-16 md:pb-24 lg:pb-32 pt-32">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="kicker text-pink-300 mb-4">Ring of Kerry, Sneem Village</p>
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                You've seen the photos.<span className="block text-pink-400">Now taste the Guinness.</span>
              </h1>
              <p className="text-xl md:text-2xl text-cream-200 leading-relaxed mb-10 max-w-2xl">The pink pub on your postcard is pouring pints right now. Family-run since 1996.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/menu" className="btn-pink">See Today's Menu<ArrowRight className="w-5 h-5" /></Link>
                <a href="tel:+353646645281" className="btn-ghost border-white text-white hover:bg-white hover:text-pink-500"><Phone className="w-5 h-5" />Book a Table</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AS SEEN IN */}
      <section className="bg-pink-500 text-white py-8 md:py-10">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <span className="font-display font-bold text-lg md:text-xl">As seen in:</span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-pink-100">
              <span>Postcards worldwide</span><span className="hidden md:inline text-pink-300">|</span>
              <span>American Express</span><span className="hidden md:inline text-pink-300">|</span>
              <span>Visa</span><span className="hidden md:inline text-pink-300">|</span>
              <span>Der Spiegel</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative"><Image src="/images/exterior-front-evening.jpg" alt="The pink facade of D O'Shea's Bar" fill className="object-cover" /></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-pink-500 -z-10" />
            </div>
            <div>
              <p className="kicker mb-4">Our Story</p>
              <h2 className="text-ink text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">You've probably seen this pub before.</h2>
              <div className="space-y-6 text-lg text-ink-muted leading-relaxed">
                <p>On a postcard, maybe. In an American Express ad. On someone's phone as they showed you their Ireland trip.</p>
                <p>The pink has been here for decades. The O'Shea family painted it that way, and when Mary and Garbhan Kavanagh took over in 1996, they knew better than to change it. They gutted the inside, modernised the kitchen, built a terrace with views of the estuary. But the pink stayed.</p>
                <p className="text-ink font-medium">These days, the cameras still click outside. But inside, it's just a pub. Turf fire going. Someone's da at the bar. Food that's better than it needs to be.</p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-1 h-16 bg-pink-500" />
                <div><p className="font-display font-bold text-ink text-lg">Mary & Garbhan Kavanagh</p><p className="text-ink-muted">Proprietors since 1996</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="section bg-ink text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="kicker text-pink-400 mb-4">From Our Kitchen</p>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">Pub grub. Done properly.</h2>
              <p className="text-xl text-cream-300 leading-relaxed mb-8">Kerry lamb. Sneem sausages. Fish that was swimming this morning. Nothing fancy. Everything right.</p>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-baseline border-b border-ink-light pb-3">
                  <div><span className="font-display font-bold text-lg text-white">Seafood Chowder</span><p className="text-sm text-cream-400">With freshly baked brown soda bread</p></div>
                  <span className="text-pink-400 font-semibold">€8.95</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-ink-light pb-3">
                  <div><span className="font-display font-bold text-lg text-white">Fresh Fillet of Cod</span><p className="text-sm text-cream-400">Light beer batter, mushy peas, house tartar</p></div>
                  <span className="text-pink-400 font-semibold">€17.00</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-ink-light pb-3">
                  <div><span className="font-display font-bold text-lg text-white">12oz Sirloin Steak</span><p className="text-sm text-cream-400">Sauteed mushrooms, onions, choice of sauce</p></div>
                  <span className="text-pink-400 font-semibold">€29.50</span>
                </div>
              </div>
              <Link href="/menu" className="btn-pink">View Full Menu<ArrowRight className="w-5 h-5" /></Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden"><Image src="/images/food-burger-chips.jpg" alt="D O'Shea's burger with hand-cut chips" fill className="object-cover" /></div>
              <div className="absolute -bottom-6 -left-6 bg-pink-500 p-6 max-w-xs">
                <Quote className="w-8 h-8 text-pink-300 mb-2" />
                <p className="font-display italic text-white">"Best fish and chips I've ever had. 10 out of 10."</p>
                <p className="text-pink-200 text-sm mt-2">— TripAdvisor Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section bg-cream-100">
        <div className="container-narrow text-center">
          <div className="flex justify-center gap-1 mb-6">{[...Array(5)].map((_,i)=><Star key={i} className="w-6 h-6 fill-pink-500 text-pink-500" />)}</div>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-ink mb-6">"The seafood chowder was probably the nicest I've had in Ireland. Great food at a reasonable cost with outstanding service."</blockquote>
          <p className="text-ink-muted">— TripAdvisor Review</p>
          <p className="text-pink-500 font-semibold mt-4">#1 Restaurant in Sneem</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12"><p className="kicker mb-4">Inside & Out</p><h2 className="text-ink text-3xl md:text-4xl font-display font-bold">The place behind the photos</h2></div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative aspect-square lg:aspect-auto">
              <Image src="/images/exterior-sunset.jpg" alt="D O'Shea's at sunset" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"><p className="text-white font-medium">Golden hour on North Square</p></div>
            </div>
            <div className="relative aspect-square group overflow-hidden"><Image src="/images/interior-guinness.jpg" alt="A perfect pint" fill className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>
            <div className="relative aspect-square group overflow-hidden"><Image src="/images/terrace-guinness-view.jpg" alt="Terrace views" fill className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="section bg-pink-500 text-white">
        <div className="container-wide">
          <div className="text-center mb-12"><h2 className="text-white text-3xl md:text-4xl font-display font-bold mb-4">Find the Pink Pub</h2><p className="text-xl text-pink-100 max-w-2xl mx-auto">North Square, Sneem. You genuinely can't miss it.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-pink-200" /><h3 className="font-display font-bold text-xl mb-2">Location</h3>
              <p className="text-pink-100">North Square<br />Sneem, Co. Kerry<br />Ring of Kerry</p>
              <a href="https://maps.google.com/?q=51.838653,-9.901576" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-white underline hover:no-underline">Get Directions</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 text-center">
              <Clock className="w-10 h-10 mx-auto mb-4 text-pink-200" /><h3 className="font-display font-bold text-xl mb-2">Food Service</h3>
              <p className="text-3xl font-bold text-white mb-1">12pm - 9pm</p><p className="text-pink-100">Daily</p>
              <p className="text-pink-200 text-sm mt-4">Bar open later for pints</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 text-center">
              <Phone className="w-10 h-10 mx-auto mb-4 text-pink-200" /><h3 className="font-display font-bold text-xl mb-2">Book a Table</h3>
              <a href="tel:+353646645281" className="text-2xl font-bold text-white hover:text-pink-200 transition-colors">064 664 5281</a>
              <p className="text-pink-200 text-sm mt-4">Booking smart for dinner</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 text-center">
              <Car className="w-10 h-10 mx-auto mb-4 text-pink-200" /><h3 className="font-display font-bold text-xl mb-2">Good to Know</h3>
              <ul className="text-pink-100 text-sm space-y-2">
                <li className="flex items-center justify-center gap-2"><Car className="w-4 h-4" />Street parking nearby</li>
                <li className="flex items-center justify-center gap-2"><CreditCard className="w-4 h-4" />Cards accepted</li>
                <li className="flex items-center justify-center gap-2"><Users className="w-4 h-4" />Family friendly</li>
                <li className="flex items-center justify-center gap-2"><Wifi className="w-4 h-4" />Free WiFi</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-pink-200 mt-10 text-lg max-w-2xl mx-auto">Booking's smart for dinner. Sneem's small and word gets around when the chowder's on.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-cream-50">
        <div className="container-narrow text-center">
          <h2 className="text-ink text-3xl md:text-4xl font-display font-bold mb-4">See you at the pink pub</h2>
          <p className="text-xl text-ink-muted mb-8">Ah sure, come in out of the rain.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-pink">View Our Menu<ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+353646645281" className="btn-ghost"><Phone className="w-5 h-5" />Call to Book</a>
          </div>
        </div>
      </section>
    </>
  )
}
