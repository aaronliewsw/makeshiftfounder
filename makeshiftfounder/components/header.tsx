import ThemeToggle from './theme-toggle'

export default function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-richBlack/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#hero" className="font-display text-lg">Makeshift Founder</a>
        <nav className="hidden md:flex items-center gap-6 text-cadetGray">
          <a href="#tools" className="hover:text-mfWhite">Tools</a>
          <a href="#newsletter" className="hover:text-mfWhite">Newsletter</a>
          <a href="#about" className="hover:text-mfWhite">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
