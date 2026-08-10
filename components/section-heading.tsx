import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { PageLink } from '@/content/links'

type Props = {
  id?: string
  title: string
  description?: string
  more?: { href: PageLink['href']; label: string }
}

export function SectionHeading({ id, title, description, more }: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 id={id} className="text-xl font-bold tracking-tight">
          {title}
        </h2>
        {description && <p className="text-ink-secondary mt-1 text-sm">{description}</p>}
      </div>
      {more && (
        <Link
          href={more.href}
          className="text-ink-secondary hover:text-ink group inline-flex shrink-0 items-center gap-1 text-sm transition-colors"
        >
          {more.label}
          <ArrowRight
            aria-hidden
            strokeWidth={1.5}
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  )
}
