export type Work = {
  title: string
  description: string
  href: string
  thumbnail: string
  stack: string[]
  /** 公開元が閉鎖済みで、href は Internet Archive のスナップショットを指す。 */
  archived?: boolean
  links?: { label: string; href: string }[]
}

export const works: Work[] = [
  {
    title: 'C3 オープンキャンパス Web ページ',
    description:
      'サークルのオープンキャンパス告知サイト。Adobe XD で画面を設計し、Nuxt で実装した共同開発。',
    href: 'https://web.archive.org/web/20221107121624/https://oc2021.compositecomputer.club/',
    thumbnail: '/images/works/c3-open-campus.webp',
    stack: ['Adobe XD', 'Nuxt', 'CSS'],
    archived: true,
  },
  {
    title: 'C3 Official Site',
    description:
      '九州工業大学のサークル Composite Computer Club の公式サイト。画面設計を担当した。',
    href: 'https://compositecomputer.club/',
    thumbnail: '/images/works/c3-official.webp',
    stack: ['Adobe XD'],
    links: [
      {
        label: 'Adobe XD のプロトタイプ',
        href: 'https://xd.adobe.com/view/2ea8e9f6-2a78-4dc5-9ae5-4f44e2894818-7bfb/',
      },
    ],
  },
  {
    title: '寄宿舎 (凌雲塾) Web ページ',
    description: '寄宿舎の案内ページ。掲載内容の構成から実装までを担当した。',
    href: 'http://www.hcyuko.hiroshima-c.ed.jp/kisyukusya/index.html',
    thumbnail: '/images/works/ryounjuku.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]
