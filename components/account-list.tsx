import { ArrowUpRight } from 'lucide-react'

import { AccountIcon } from '@/components/account-icon'
import { accountLinks } from '@/content/links'

export function AccountList() {
  return (
    <ul className="border-border-subtle divide-border-subtle overflow-hidden rounded-xl border divide-y">
      {accountLinks.map(({ label, handle, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-surface-secondary group flex items-center gap-4 px-4 py-3.5 transition-colors sm:px-5"
          >
            <AccountIcon name={icon} className="text-ink-secondary size-5 shrink-0" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium">{label}</span>
              <span className="text-ink-tertiary block text-xs">{handle}</span>
            </span>
            <ArrowUpRight
              aria-hidden
              strokeWidth={1.5}
              className="text-ink-tertiary size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
