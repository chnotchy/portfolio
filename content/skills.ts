export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    description: '日常的に読み書きしている言語',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'C', 'Python'],
  },
  {
    title: 'Frameworks',
    description: 'Web サイトの実装に使うもの',
    items: ['React', 'Next.js', 'Nuxt', 'Tailwind CSS'],
  },
  {
    title: 'Tooling',
    description: '開発環境と自動化',
    items: ['Git', 'GitHub Actions', 'pnpm', 'ESLint', 'Prettier'],
  },
  {
    title: 'Design',
    description: '画面設計とプロトタイピング',
    items: ['Figma', 'Adobe XD'],
  },
]
