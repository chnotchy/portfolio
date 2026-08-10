import Link from 'next/link'

import { accountLinks, pageLinks, repositoryUrl } from '@/content/links'

const linkClass = 'text-ink-tertiary hover:text-ink text-sm transition-colors'
const headingClass = 'text-ink-tertiary mb-3 text-xs font-semibold tracking-wider uppercase'

export function SiteFooter() {
  return (
    <footer className="border-border-subtle mt-20 border-t">
      <div className="container-wide py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h2 className={headingClass}>Pages</h2>
            <ul className="space-y-1.5">
              {pageLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Accounts</h2>
            <ul className="space-y-1.5">
              {accountLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>This Site</h2>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ソースコード
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border-subtle flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-60"
          >
            Notchy
          </Link>
          <p className="text-ink-tertiary text-xs">© {new Date().getFullYear()} Notchy</p>
        </div>
      </div>
    </footer>
  )
}
