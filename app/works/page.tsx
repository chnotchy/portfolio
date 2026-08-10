import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'

import { PageHeader } from '@/components/page-header'
import { WorkCard } from '@/components/work-card'
import { works } from '@/content/works'

export const metadata: Metadata = {
  title: 'Works',
  description: '制作した Web サイトの一覧。',
}

export default function Works() {
  return (
    <>
      <PageHeader
        title="Works"
        description="制作した Web サイト。設計と実装のどちらを担当したかを添えています。"
      />
      <section className="container-wide pb-24">
        <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2">
          {works.map((work) => (
            <div key={work.title} className="fade-up space-y-3">
              <WorkCard work={work} headingAs="h2" />
              {work.links?.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary hover:text-ink inline-flex items-center gap-1 text-sm transition-colors"
                >
                  {label}
                  <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4 shrink-0" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
