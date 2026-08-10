'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { pageLinks } from '@/content/links'

export function SiteHeader() {
  const pathname = usePathname()
  // 開いた時点のパスを保持することで、遷移時に副作用なしで閉じる。
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  const isMenuOpen = openedAt === pathname

  useEffect(() => {
    if (!isMenuOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenedAt(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  // trailingSlash により pathname は末尾スラッシュ付きで渡る。
  function isCurrent(href: string) {
    return pathname.replace(/\/$/, '') === href
  }

  return (
    <header className="glass border-border-subtle fixed inset-x-0 top-0 z-50 border-b">
      <div className="container-wide flex h-11 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-60"
        >
          Notchy
        </Link>

        <nav aria-label="サイト内ナビゲーション" className="hidden items-center gap-5 md:flex">
          {pageLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isCurrent(href) ? 'page' : undefined}
              className={`text-xs font-medium transition-colors ${
                isCurrent(href) ? 'text-ink' : 'text-ink-secondary hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpenedAt(isMenuOpen ? null : pathname)}
            aria-label="メニュー"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="text-ink-secondary hover:bg-surface-secondary hover:text-ink rounded-full p-1.5 transition-colors md:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden strokeWidth={1.5} className="size-4" />
            ) : (
              <Menu aria-hidden strokeWidth={1.5} className="size-4" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="site-menu" className="border-border-subtle border-t md:hidden">
          <nav aria-label="サイト内ナビゲーション" className="container-wide flex flex-col py-2">
            {pageLinks.map(({ href, label, description }) => (
              <Link
                key={href}
                href={href}
                aria-current={isCurrent(href) ? 'page' : undefined}
                className="hover:bg-surface-secondary -mx-2 rounded-lg px-2 py-2 transition-colors"
              >
                <span className="block text-sm font-medium">{label}</span>
                <span className="text-ink-tertiary block text-xs">{description}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
