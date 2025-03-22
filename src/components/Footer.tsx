import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} FocusFlow. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  )
} 