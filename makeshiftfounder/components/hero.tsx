'use client'

import { track } from '@/lib/analytics'

export default function Hero(){
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="font-display text-3xl md:text-5xl leading-tight">
        Building tiny tools, documenting the chaos, and rebuilding in public.
      </h1>
      <p className="text-cadetGray text-lg">
        For tinkerers, builders, and other high-functioning disasters.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="#newsletter" onClick={()=>track('cta_newsletter_click')} className="inline-flex items-center justify-center rounded-xl bg-hunyadi text-richBlack px-5 py-3 font-medium hover:opacity-90">
          Join the newsletter
        </a>
        <a href="#tools" onClick={()=>track('cta_tools_click')} className="inline-flex items-center justify-center rounded-xl border border-cadetGray/40 px-5 py-3 hover:bg-cadetGray/10">
          Explore tools
        </a>
      </div>
    </div>
  )
}
