import Link from 'next/link'
import { CircleUser, Layers, MessageCircle, Terminal } from 'lucide-react'

// as const を外すと href が string になり typedRoutes の型に通らない。
const navItems = [
  { href: '/profile', label: 'Profile', Icon: CircleUser },
  { href: '/skills', label: 'Skills', Icon: Terminal },
  { href: '/works', label: 'Works', Icon: Layers },
  { href: '/contact', label: 'Contact', Icon: MessageCircle },
] as const

export function SiteHeader() {
  return (
    <header className="bg-surface-raised leading-[clamp(60px,10vh,80px)]">
      <div className="mx-auto flex w-full justify-between pl-[4vw] sm:w-[min(90%,1400px)] sm:pl-0">
        <div className="flex items-center">
          <Link href="/" className="site-logo-link">
            <span className="site-logo" data-text="Notchy">
              Notchy
            </span>
          </Link>
        </div>
        <nav className="ml-[8%] flex w-[min(100%,600px)] justify-evenly sm:ml-[10%] sm:justify-between">
          {navItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-[min(0.4em,1vw)] text-[clamp(16px,2.5vw,24px)]"
            >
              <Icon aria-hidden className="size-[1em] shrink-0" />
              <span className="max-sm:sr-only">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
