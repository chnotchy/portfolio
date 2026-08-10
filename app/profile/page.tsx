import type { Metadata } from 'next'

import { AccountList } from '@/components/account-list'
import { PageHeader } from '@/components/page-header'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Notchy の自己紹介。',
}

export default function Profile() {
  return (
    <>
      <PageHeader title="Profile" description={profile.tagline} />
      <section className="container-wide pb-24">
        <div className="stagger grid max-w-2xl gap-10">
          <div className="fade-up flex items-center gap-5">
            <img
              src={profile.avatar}
              alt=""
              width={96}
              height={96}
              className="ring-border-subtle size-24 rounded-full ring-1"
            />
            <div>
              <p className="text-2xl font-bold tracking-tight">{profile.name}</p>
              <p className="text-ink-tertiary text-sm">@chnotchy</p>
            </div>
          </div>

          <div className="fade-up space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-ink-secondary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="fade-up">
            <h2 className="text-ink-tertiary mb-3 text-xs font-semibold tracking-wider uppercase">
              Accounts
            </h2>
            <AccountList />
          </div>
        </div>
      </section>
    </>
  )
}
