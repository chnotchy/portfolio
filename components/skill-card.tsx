import { Chip } from '@/components/chip'
import type { SkillGroup } from '@/content/skills'

type Props = {
  group: SkillGroup
  /** 見出しレベルは呼び出し側の階層に合わせる。 */
  headingAs?: 'h2' | 'h3'
}

export function SkillCard({ group, headingAs: Heading = 'h3' }: Props) {
  return (
    <div className="border-border-subtle bg-surface-tertiary rounded-xl border p-5">
      <Heading className="text-ink-tertiary text-xs font-semibold tracking-wider uppercase">
        {group.title}
      </Heading>
      <p className="text-ink-secondary mt-1.5 text-sm">{group.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </ul>
    </div>
  )
}
