export default function Footer(){
  return (
    <footer className="border-t border-cadetGray/20 mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-cadetGray text-sm">“Productivity is a hobby. Recovery is the job.”</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://instagram.com/makeshiftfounder" className="hover:text-mfWhite" target="_blank" rel="noreferrer">IG @makeshiftfounder</a>
          <a href="https://x.com/makeshftfounder" className="hover:text-mfWhite" target="_blank" rel="noreferrer">X @makeshftfounder</a>
        </div>
      </div>
    </footer>
  )
}
