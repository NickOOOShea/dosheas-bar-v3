import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'

/**
 * D O'Shea's Bar v3 - Menu Page
 * All prices from menu.json (photographed from actual menu)
 * See SOURCES.md for line-by-line attribution
 */

// Menu data - ALL from menu.json with line numbers
const menu = {
  starters: [
    // Source: menu.json lines 14-17
    { name: "Soup of the Day", desc: "With home baked brown bread", price: 6.95 },
    // Source: menu.json lines 21-23
    { name: "Kenmare Bay Seafood Chowder", desc: "With home baked brown bread", price: 8.95 },
    // Source: menu.json lines 26-30
    { name: "Ardsallagh Goats Cheese", desc: "Home tart with sundried tomato, basil pesto and salad", price: 8.95, v: true },
    // Source: menu.json lines 33-37
    { name: "Deep Fried Potato Skins", desc: "Seasoned and served crispy", price: 6.95, v: true },
  ],
  mains: [
    // Source: menu.json lines 47-50
    { name: "12oz Sirloin Steak", desc: "With mushrooms, onions, salad, fries. Choice of garlic butter, blue cheese butter or pepper sauce", price: 29.50 },
    // Source: menu.json lines 53-56
    { name: "Fresh Fillet of Cod", desc: "In light beer batter with mushy peas, fries and house tartar sauce", price: 17.00 },
    // Source: menu.json lines 59-62
    { name: "Thai Green Chicken Curry", desc: "With basmati and wild rice", price: 17.00 },
    // Source: RESEARCH.md line 84
    { name: "Sneem Sausage", desc: "Honey mustard mash and cider gravy", price: 14.50 },
    // Source: RESEARCH.md line 85
    { name: "Honey Roast Bacon", desc: "Colcannon and parsley sauce", price: 15.00 },
  ],
  burgers: [
    // Source: menu.json lines 79-82
    { name: "D O'Shea's Half Pound Beef Burger", desc: "With melted cheese, salad, fries, beer battered onion rings and Ballymaloe Relish", price: 16.75 },
    // Source: menu.json lines 85-88
    { name: "Chicken Fillet and Bacon Burger", desc: "With melted cheese, salad, fries, pesto mayo and coleslaw", price: 16.75 },
    // Source: menu.json lines 91-95
    { name: "Homemade Vegan Falafel Burger", desc: "With tomato and mixed pepper salsa, vegan slaw", price: 14.75, vg: true },
  ],
  desserts: [
    // Source: menu.json lines 105-107
    { name: "Homemade Apple and Raspberry Crumble", price: 6.95 },
    // Source: menu.json lines 110-113
    { name: "Warm Chocolate Fudge Cake", desc: "With vanilla ice cream", price: 6.95 },
    // Source: menu.json lines 116-119
    { name: "Today's Selection of Ice Cream", desc: "With chocolate sauce", price: 6.95 },
    // Source: menu.json lines 122-125
    { name: "Citrus Lemon Tart", desc: "With fresh cream", price: 6.95 },
    // Source: menu.json lines 128-131
    { name: "Red Berry Meringue Sundae", price: 6.95, gf: true },
  ],
  kids: [
    // Source: menu.json lines 140-144
    { name: "Chicken Nuggets", desc: "With mash or fries", price: 8.00 },
    // Source: menu.json lines 147-150
    { name: "Sneem Sausage", desc: "With mash or fries", price: 8.00 },
    // Source: menu.json lines 153-157
    { name: "Penne Pasta", desc: "With tomato sauce and melted cheese", price: 8.00, v: true },
    // Source: menu.json lines 160-162
    { name: "Cheeseburger and Fries", price: 8.00 },
  ],
}

function MenuItem({ item }: { item: { name: string; desc?: string; price: number; v?: boolean; vg?: boolean; gf?: boolean } }) {
  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-ink/10 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-display text-lg text-ink">{item.name}</h3>
          {item.v && <span className="text-xs text-mint-500 font-body font-medium px-2 py-0.5 bg-mint-500/10 rounded">V</span>}
          {item.vg && <span className="text-xs text-mint-500 font-body font-medium px-2 py-0.5 bg-mint-500/10 rounded">VG</span>}
          {item.gf && <span className="text-xs text-mint-500 font-body font-medium px-2 py-0.5 bg-mint-500/10 rounded">GF</span>}
        </div>
        {item.desc && <p className="font-body text-sm text-ink-muted mt-1">{item.desc}</p>}
      </div>
      <span className="font-body text-pink-500 font-medium whitespace-nowrap">
        €{item.price.toFixed(2)}
      </span>
    </div>
  )
}

function MenuSection({ title, items, intro }: { title: string; items: any[]; intro?: string }) {
  return (
    <div className="mb-12 last:mb-0">
      <h2 className="font-display text-2xl text-ink mb-2">{title}</h2>
      {intro && <p className="font-body text-ink-muted mb-4">{intro}</p>}
      <div>
        {items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      {/* Header */}
      <header className="bg-cream-100 border-b border-ink/10 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-ink-muted hover:text-ink font-body">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <a href="tel:+353646645281" className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-body font-medium">
            <Phone className="w-4 h-4" />
            Book a Table
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[30vh] min-h-[200px]">
        <Image
          src="/images/food-burger-chips.webp"
          alt="D O'Shea's food"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto w-full px-6 pb-8">
            <h1 className="font-display text-3xl md:text-4xl text-white">
              Menu
            </h1>
          </div>
        </div>
      </section>

      {/* Intro - Source: RESEARCH.md lines 65-71 */}
      <section className="max-w-3xl mx-auto px-6 py-8 text-center border-b border-ink/10">
        <p className="font-body text-lg text-ink-muted">
          Home cooked food using local produce. Kerry lamb and beef, Sneem sausages, local fish, ice cream from Kenmare.
        </p>
        {/* Source: RESEARCH.md lines 64, 72 */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-ink-light font-body">
          <span>Food served 12pm - 9pm daily</span>
          <span>•</span>
          <span>We cater for coeliacs, vegetarians and diabetics</span>
        </div>
      </section>

      {/* Menu sections */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <MenuSection title="Starters" items={menu.starters} />
        <MenuSection title="Main Courses" items={menu.mains} intro="Hearty dishes made with local Kerry produce" />
        <MenuSection title="Burgers" items={menu.burgers} intro="All served with fries" />
        <MenuSection title="Desserts" items={menu.desserts} />
        <MenuSection title="Kids Meals" items={menu.kids} intro="Half portions of warm specials also available" />

        {/* Notes - Source: menu.json lines 177-182 */}
        <div className="mt-12 pt-8 border-t border-ink/10 text-center">
          <p className="font-body text-sm text-ink-light">
            All beef is 100% Irish Kerry beef. Fresh fish from local boats.
          </p>
          <p className="font-body text-sm text-ink-light mt-2">
            Daily specials also available. Ask your server.
          </p>
        </div>
      </section>

      {/* CTA - Source: RESEARCH.md line 73 */}
      <section className="bg-pink-500 py-12 px-6 text-center">
        <h2 className="font-display text-2xl text-white mb-4">
          Ready to visit?
        </h2>
        <p className="font-body text-pink-100 mb-6 max-w-md mx-auto">
          Booking recommended for dinner.
        </p>
        <a href="tel:+353646645281" className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-body font-medium hover:bg-cream-100">
          <Phone className="w-5 h-5" />
          Call to Book
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white py-8 px-6 text-center">
        <p className="font-display text-lg mb-1">D O'Shea's Bar</p>
        <p className="font-body text-cream-100/60 text-sm">
          North Square, Sneem, Co. Kerry
        </p>
        <p className="font-body text-cream-100/40 text-xs mt-4">
          This site does not use cookies or collect personal data.
        </p>
      </footer>
    </main>
  )
}
