import type { Metadata } from 'next'

import { PageHeader } from '@/components/page-header'
import { SkillCard } from '@/components/skill-card'
import { skillGroups } from '@/content/skills'

export const metadata: Metadata = {
  title: 'Skills',
  description: '扱える言語・フレームワーク・ツールの一覧。',
}

export default function Skills() {
  return (
    <>
      <PageHeader
        title="Skills"
        description="実際に手を動かして使ったことのあるものを挙げています。"
      />
      <section className="container-wide pb-24">
        <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="fade-up">
              <SkillCard group={group} headingAs="h2" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
