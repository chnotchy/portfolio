import type { Metadata } from 'next'
import { CircleUser } from 'lucide-react'

import { BackToHome } from '@/components/back-to-home'
import { GitHubIcon, XIcon } from '@/components/brand-icons'

export const metadata: Metadata = {
  title: 'Contact',
}

const iconClass = 'size-6 shrink-0'

const groups = [
  {
    title: 'SNS',
    links: [
      {
        label: 'X (Twitter)',
        href: 'https://x.com/chnotchy',
        icon: <XIcon className={iconClass} />,
      },
    ],
  },
  {
    title: 'アカウント一覧',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/notchcoder',
        icon: <GitHubIcon className={iconClass} />,
      },
      {
        label: 'AtCoder',
        href: 'https://atcoder.jp/users/notchy',
        icon: <CircleUser aria-hidden className={iconClass} />,
      },
    ],
  },
]

export default function Contact() {
  return (
    <>
      {groups.map(({ title, links }) => (
        <div key={title} className="p-5">
          <h2 className="font-bold">{title}</h2>
          {links.map(({ label, href, icon }) => (
            <div key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 inline-flex items-center gap-2"
              >
                {icon}
                {label}
              </a>
            </div>
          ))}
        </div>
      ))}
      <BackToHome />
    </>
  )
}
