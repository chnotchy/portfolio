import { Trophy } from 'lucide-react'

import { GitHubIcon, XIcon } from '@/components/brand-icons'
import type { AccountLink } from '@/content/links'

const icons: Record<AccountLink['icon'], React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  x: XIcon,
  atcoder: Trophy,
}

export function AccountIcon({
  name,
  className,
}: {
  name: AccountLink['icon']
  className?: string
}) {
  const Icon = icons[name]
  return <Icon aria-hidden className={className} />
}
