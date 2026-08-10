// as const を外すと href が string になり typedRoutes の型に通らない。
export const pageLinks = [
  { href: '/works', label: 'Works', description: '制作した Web サイト' },
  { href: '/skills', label: 'Skills', description: '扱える言語とツール' },
  { href: '/profile', label: 'Profile', description: '自己紹介' },
  { href: '/contact', label: 'Contact', description: '連絡先とアカウント' },
] as const

export type PageLink = (typeof pageLinks)[number]

export type AccountLink = {
  label: string
  handle: string
  href: string
  icon: 'github' | 'x' | 'atcoder'
}

export const accountLinks: AccountLink[] = [
  {
    label: 'GitHub',
    handle: '@notchcoder',
    href: 'https://github.com/notchcoder',
    icon: 'github',
  },
  {
    label: 'X',
    handle: '@chnotchy',
    href: 'https://x.com/chnotchy',
    icon: 'x',
  },
  {
    label: 'AtCoder',
    handle: 'notchy',
    href: 'https://atcoder.jp/users/notchy',
    icon: 'atcoder',
  },
]

export const repositoryUrl = 'https://github.com/chnotchy/portfolio'
