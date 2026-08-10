import type { Metadata } from 'next'

import { AccountList } from '@/components/account-list'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Contact',
  description: '連絡先とアカウントの一覧。',
}

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" description="以下のアカウントから連絡できます。" />
      <section className="container-wide pb-24">
        <div className="fade-up max-w-2xl">
          <AccountList />
        </div>
      </section>
    </>
  )
}
