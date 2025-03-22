"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Carrot Coach</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Réserver un appel</Link>
          </Button>
          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/services" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 pb-1">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Réserver un appel
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 