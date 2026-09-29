import type { MouseEvent } from 'react'

// Scroll up without the jump, so the URL doesn't pick up a trailing "#". The href stays as the no-JS fallback.
function backToTop(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' })
}

export function Footer() {
  return (
    <footer className="microtype flex justify-between px-4 pt-8 pb-6 text-[10px] sm:px-16 sm:pt-16 sm:pb-10 sm:text-[11px]">
      <span>© 2026 Sonya Kim</span>
      <a href="#" onClick={backToTop} className="hover:text-accent">
        Back to top ↑
      </a>
    </footer>
  )
}
