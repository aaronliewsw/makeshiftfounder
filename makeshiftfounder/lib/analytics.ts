'use client'
import posthog from 'posthog-js'

export const initPostHog = () => {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    capture_pageview: true,
    person_profiles: 'identified_only'
  })
}

export const track = (name: string, props: Record<string, any> = {}) => {
  try { posthog.capture(name, props) } catch {}
}
