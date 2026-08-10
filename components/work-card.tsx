import { Archive, ArrowUpRight } from 'lucide-react'

import { Chip } from '@/components/chip'
import type { Work } from '@/content/works'

type Props = {
  work: Work
  /** 見出しレベルは呼び出し側の階層に合わせる。 */
  headingAs?: 'h2' | 'h3'
}

export function WorkCard({ work, headingAs: Heading = 'h3' }: Props) {
  const { title, description, href, thumbnail, stack, archived } = work

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border-subtle bg-surface-tertiary block overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_20px_rgba(255,255,255,0.04)]"
    >
      <div className="bg-surface-secondary border-border-subtle aspect-video overflow-hidden border-b">
        <img
          src={thumbnail}
          alt=""
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4 sm:p-5">
        <Heading className="flex items-start gap-1.5 text-base leading-snug font-semibold transition-opacity duration-200 group-hover:opacity-60">
          {title}
          <ArrowUpRight
            aria-hidden
            strokeWidth={1.5}
            className="text-ink-tertiary mt-0.5 size-4 shrink-0"
          />
        </Heading>
        <p className="text-ink-secondary mt-1.5 text-sm">{description}</p>
        <ul className="mt-4 flex flex-wrap items-center gap-1.5">
          {stack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
          {archived && (
            <li className="text-ink-tertiary inline-flex items-center gap-1 text-xs">
              <Archive aria-hidden strokeWidth={1.5} className="size-3.5" />
              Internet Archive
            </li>
          )}
        </ul>
      </div>
    </a>
  )
}
