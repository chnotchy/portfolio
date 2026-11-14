import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'
import { WorksTimeline } from '@/components/works-timeline'

export const metadata: Metadata = {
  title: 'Works',
  description: 'デザインシステム、Figma Community の公開物、Web サイトの制作実績。',
}

export default function Works() {
  return (
    <>
      <PageHeader
        title="Works"
        description="デザインシステム、Figma Community で公開しているファイルとプラグイン、Web サイトの制作実績を時系列でまとめています。"
      />
      <section className="container-wide pb-24">
        <WorksTimeline />
      </section>
    </>
  )
}
