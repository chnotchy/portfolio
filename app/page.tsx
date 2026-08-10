import Link from 'next/link'

import { AccountIcon } from '@/components/account-icon'
import { AccountList } from '@/components/account-list'
import { buttonClass } from '@/components/button'
import { SectionHeading } from '@/components/section-heading'
import { SkillCard } from '@/components/skill-card'
import { WorkCard } from '@/components/work-card'
import { accountLinks } from '@/content/links'
import { profile } from '@/content/profile'
import { skillGroups } from '@/content/skills'
import { works } from '@/content/works'

export default function Home() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wide stagger">
          <img
            src={profile.avatar}
            alt=""
            width={64}
            height={64}
            className="ring-border-subtle fade-up size-16 rounded-full ring-1"
          />
          <h1 className="fade-up mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            {profile.name}
          </h1>
          <p className="text-ink-secondary fade-up mt-3 max-w-2xl text-lg">{profile.tagline}</p>
          <div className="fade-up mt-8 flex flex-wrap gap-3">
            <Link href="/works" className={buttonClass()}>
              制作物を見る
            </Link>
            <Link href="/contact" className={buttonClass('secondary')}>
              連絡先
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-wide">
          <ul className="stagger flex flex-wrap gap-2">
            {accountLinks.map(({ label, handle, href, icon }) => (
              <li key={label} className="fade-up">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-secondary text-ink-secondary hover:bg-ink hover:text-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
                >
                  <AccountIcon name={icon} className="size-4 shrink-0" />
                  {label}
                  <span className="opacity-60">{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="works" className="pb-24">
        <div className="container-wide">
          <SectionHeading
            title="Works"
            description="制作した Web サイト"
            more={{ href: '/works', label: 'すべて見る' }}
          />
          <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2">
            {works.map((work) => (
              <div key={work.title} className="fade-up">
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="pb-24">
        <div className="container-wide">
          <SectionHeading
            title="Skills"
            description="扱える言語とツール"
            more={{ href: '/skills', label: 'すべて見る' }}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="pb-24">
        <div className="container-wide">
          <SectionHeading
            title="About"
            description="自己紹介"
            more={{ href: '/profile', label: 'プロフィール' }}
          />
          <div className="max-w-2xl space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-ink-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24">
        <div className="container-wide">
          <SectionHeading title="Contact" description="連絡先とアカウント" />
          <div className="max-w-2xl">
            <AccountList />
          </div>
        </div>
      </section>
    </>
  )
}
