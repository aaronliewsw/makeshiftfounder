'use client'
import { useState, useTransition } from 'react'

export default function NewsletterForm(){
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState<string|null>(null)
  const [isPending, startTransition] = useTransition()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    startTransition(async () => {
      const r = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      const j = await r.json()
      setMsg(j.ok ? 'Check your inbox to confirm. No spam.' : 'Something broke. Try again?')
    })
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <input
        type="email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="you@chaos.club"
        className="px-4 py-3 rounded-xl bg-transparent border border-cadetGray/40 focus:outline-none focus:ring-2 focus:ring-hunyadi"
      />
      <button disabled={isPending} className="px-5 py-3 rounded-xl bg-hunyadi text-richBlack font-medium hover:opacity-90 active:opacity-80">
        Join the newsletter
      </button>
      {msg && <p className="text-sm text-cadetGray col-span-full">{msg}</p>}
    </form>
  )
}
