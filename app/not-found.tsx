import Link from 'next/link'

import { buttonClass } from '@/components/button'

export default function NotFound() {
  return (
    <section className="container-narrow stagger pt-36 pb-24 text-center">
      <p className="text-ink-tertiary fade-up text-7xl font-bold opacity-30">404</p>
      <h1 className="fade-up mt-6 text-xl font-bold tracking-tight">ページが見つかりません</h1>
      <p className="text-ink-secondary fade-up mt-3 text-sm">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <div className="fade-up mt-8">
        <Link href="/" className={buttonClass()}>
          ホームに戻る
        </Link>
      </div>
    </section>
  )
}
