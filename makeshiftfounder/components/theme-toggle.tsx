'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState<'dark'|'light'>('dark')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') as 'dark'|'light'|null : null
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ?? (prefersDark ? 'dark' : 'dark')
    setTheme(initial)
    document.documentElement.classList.remove('light','dark')
    document.documentElement.classList.add(initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.remove('light','dark')
    document.documentElement.classList.add(next)
    try { localStorage.setItem('theme', next) } catch {}
  }

  return (
    <button onClick={toggle} className="border border-cadetGray/40 rounded-xl px-3 py-2 text-sm hover:opacity-90">
      {theme === 'dark' ? 'Light' : 'Dark'} mode
    </button>
  )
}
