import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'

export default function MenuPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cream-50">
      <div className="container-narrow">
        <Link href="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
        <h1 className="text-ink text-4xl md:text-5xl font-display font-bold mb-4">Pub grub. Done properly.</h1>
        <p className="text-xl text-ink-muted mb-12">Kerry lamb. Sneem sausages. Fish that was swimming this morning.</p>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ink mb-6 flex items-center gap-3"><div className="w-12 h-1 bg-pink-500" />Starters</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Soup of the Day</h3><p className="text-ink-muted">With home baked brown bread</p></div></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Kenmare Bay Seafood Chowder</h3><p className="text-ink-muted">With home baked brown bread</p></div><span className="text-pink-500 font-bold text-lg">€8.95</span></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Goats Cheese Salad</h3><p className="text-ink-muted">Sundried tomato, basil pesto</p></div><span className="text-pink-500 font-bold text-lg">€8.95</span></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Potato Skins</h3><p className="text-ink-muted">Deep fried and seasoned</p></div><span className="text-pink-500 font-bold text-lg">€6.95</span></div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-ink mb-6 flex items-center gap-3"><div className="w-12 h-1 bg-pink-500" />Main Courses</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Fresh Fillet of Cod</h3><p className="text-ink-muted">Light beer batter, mushy peas, fries, house tartar</p></div><span className="text-pink-500 font-bold text-lg">€17.00</span></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">12oz Sirloin Steak</h3><p className="text-ink-muted">Sauteed mushrooms, onions, salad, fries. Choice of garlic, blue cheese butter, or pepper sauce</p></div><span className="text-pink-500 font-bold text-lg">€29.50</span></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">D O'Shea's Half Pound Beef Burger</h3><p className="text-ink-muted">Melted cheese, salad, fries, beer battered onion rings, Ballymaloe Relish</p></div><span className="text-pink-500 font-bold text-lg">€16.75</span></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Sneem Sausage</h3><p className="text-ink-muted">Honey mustard mash and cider gravy</p></div><span className="text-pink-500 font-bold text-lg">€14.50</span></div>
            <div className="flex justify-between items-baseline border-b border-cream-300 pb-4"><div><h3 className="font-bold text-lg text-ink">Honey Roast Bacon</h3><p className="text-ink-muted">Colcannon and parsley sauce</p></div><span className="text-pink-500 font-bold text-lg">€15.00</span></div>
          </div>
        </div>

        <div className="bg-ink text-white p-8 mb-12">
          <h3 className="font-display font-bold text-xl mb-4">Local Sourcing</h3>
          <p className="text-cream-300">Kerry Lamb & Beef | Sneem Sausages | Local Black Pudding | Fresh Local Fish | Ice Cream from Kenmare</p>
        </div>

        <div className="text-center">
          <p className="text-ink-muted mb-4">Booking's smart for dinner. Give us a ring.</p>
          <a href="tel:+353646645281" className="btn-pink"><Phone className="w-5 h-5" />Call to Book: 064 664 5281</a>
        </div>
      </div>
    </section>
  )
}
