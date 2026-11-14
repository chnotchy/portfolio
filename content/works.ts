export type WorkCategory = 'design-system' | 'figma' | 'web'

export const workCategories: { value: WorkCategory; label: string }[] = [
  { value: 'design-system', label: 'Design System' },
  { value: 'figma', label: 'Figma' },
  { value: 'web', label: 'Web' },
]

export type Work = {
  title: string
  description: string
  href: string
  category: WorkCategory
  /** 'YYYY' または 'YYYY-MM'。 */
  date: string
  /** 省略時はカテゴリのアイコンを置いたタイルを表示する。 */
  thumbnail?: string
  /** ダークモード用。省略時は thumbnail を使う。 */
  thumbnailDark?: string
  stack: string[]
  /** 公開元が閉鎖済みで、href は Internet Archive のスナップショットを指す。 */
  archived?: boolean
  links?: { label: string; href: string }[]
}

/** 新しい順に並べる。同じ日付のものは配列の順を保つ。 */
export const works: Work[] = [
  {
    title: 'Tanrei',
    description:
      'Web・SwiftUI・Jetpack Compose・Flutter・React Native に同じトークンとコンポーネント仕様を届けるデザインシステム。トークン設計からコード生成、全配色のコントラスト検証の自動化、6 言語のドキュメントまでを手がける。',
    href: 'https://tanrei.chnotchy.com',
    category: 'design-system',
    date: '2026-10',
    thumbnail: '/images/works/tanrei.webp',
    thumbnailDark: '/images/works/tanrei-dark.webp',
    stack: ['Design Tokens', 'Web Components', 'Lit', 'React', 'Astro'],
    links: [{ label: 'GitHub', href: 'https://github.com/chnotchy/tanrei' }],
  },
  {
    title: 'Figma Slide Animation',
    description: 'スライドのアニメーションを扱う Figma プラグイン。',
    href: 'https://www.figma.com/community/plugin/1519732524647667308/figma-slide-animation',
    category: 'figma',
    date: '2025-06',
    stack: ['Figma Plugin'],
  },
  {
    title: 'Picture Grid Maker',
    description: '画像をグリッド状に並べたレイアウトを作るための Figma ファイル。',
    href: 'https://www.figma.com/community/file/1455547979989129519/picture-grid-maker',
    category: 'figma',
    date: '2024-12',
    stack: ['Figma'],
  },
  {
    title: 'Figma Crop Marks',
    description: '印刷用データに使うトンボ (トリムマーク) の Figma ファイル。',
    href: 'https://www.figma.com/community/file/1327071320041605208/figma-crop-marks',
    category: 'figma',
    date: '2024-01',
    stack: ['Figma'],
  },
  {
    title: 'Figma Slide Template',
    description: 'Figma で発表資料を作るためのスライドテンプレート。',
    href: 'https://www.figma.com/community/file/1319621417898057785/figma-slide-template',
    category: 'figma',
    date: '2023-12',
    stack: ['Figma'],
  },
  {
    title: 'C3 Official Site',
    description: 'Composite Computer Club の公式サイト。画面設計を担当した。',
    href: 'https://compositecomputer.club/',
    category: 'web',
    date: '2022',
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
    title: 'C3 オープンキャンパス Web ページ',
    description:
      'Composite Computer Club のオープンキャンパス告知サイト。Adobe XD で画面を設計し、Nuxt で実装した共同開発。',
    href: 'https://web.archive.org/web/20221107121624/https://oc2021.compositecomputer.club/',
    category: 'web',
    date: '2021',
    thumbnail: '/images/works/c3-open-campus.webp',
    stack: ['Adobe XD', 'Nuxt', 'CSS'],
    archived: true,
  },
  {
    title: '寄宿舎 (凌雲塾) Web ページ',
    description: '寄宿舎の案内サイト。掲載内容の構成から実装までを担当した。',
    href: 'http://www.hcyuko.hiroshima-c.ed.jp/kisyukusya/index.html',
    category: 'web',
    date: '2021',
    thumbnail: '/images/works/ryounjuku.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export function formatWorkDate(date: string) {
  return date.replace('-', '.')
}

export function workYear(date: string) {
  return date.slice(0, 4)
}
