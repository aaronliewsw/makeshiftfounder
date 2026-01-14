'use client'

import tools from '@/content/tools.json'
import { track } from '@/lib/analytics'

type Tool = {
  slug: string
  name: string
  tagline: string
  status: 'beta' | 'weird' | 'useful'
  url: string
}

const badgeStyle: Record<Tool['status'], string> = {
  beta: 'bg-cadetGray/20 text-cadetGray',
  weird: 'bg-hunyadi/20 text-hunyadi',
  useful: 'bg-mfWhite/10 text-mfWhite'
}

export default function ToolsGrid(){
  return (
    <div className="max-w-6xl">
      <h2 className="font-display text-2xl md:text-3xl mb-6">Micro‑tools</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(tools as Tool[]).slice(0,5).map(t => (
          <a key={t.slug} href={t.url} onClick={()=>track('tool_card_click', { tool_slug: t.slug })}
             className="group border border-cadetGray/30 rounded-2xl p-5 hover:border-hunyadi transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-lg">{t.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${badgeStyle[t.status]}`}>{t.status}</span>
            </div>
            <p className="text-cadetGray group-hover:text-lightYellow/90">{t.tagline}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
