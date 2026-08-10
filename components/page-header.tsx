import Link from 'next/link'

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="container-wide stagger pt-28 pb-12 md:pt-32">
      <nav
        aria-label="パンくずリスト"
        className="fade-up text-ink-tertiary flex items-center gap-2 text-sm"
      >
        <Link href="/" className="hover:text-ink transition-colors">
          Home
        </Link>
        <span aria-hidden className="opacity-40">
          /
        </span>
        <span className="text-ink-secondary">{title}</span>
      </nav>
      <h1 className="fade-up mt-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      <p className="text-ink-secondary fade-up mt-3 max-w-2xl">{description}</p>
    </div>
  )
}
