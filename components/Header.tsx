'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/#about', label: 'Our Story' },
    { href: '/#visit', label: 'Visit' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center font-display font-bold text-xl ${isScrolled ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>D</div>
            <div className="hidden sm:block">
              <span className={`font-display font-bold text-lg ${isScrolled ? 'text-ink' : 'text-white'}`}>D O'Shea's</span>
              <span className={`block text-xs uppercase tracking-widest ${isScrolled ? 'text-pink-500' : 'text-pink-200'}`}>The Pink Pub</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`font-medium transition-colors hover:text-pink-500 ${isScrolled ? 'text-ink' : 'text-white'}`}>{l.label}</Link>
            ))}
            <a href="tel:+353646645281" className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold ${isScrolled ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
              <Phone className="w-4 h-4" />Book
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 ${isScrolled ? 'text-ink' : 'text-white'}`}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-5 space-y-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-3 px-4 font-medium text-ink hover:bg-pink-50">{l.label}</Link>
            ))}
            <a href="tel:+353646645281" className="flex items-center justify-center gap-2 w-full py-4 bg-pink-500 text-white font-semibold mt-4"><Phone className="w-5 h-5" />Call to Book</a>
          </div>
        )}
      </div>
    </header>
  )
}
