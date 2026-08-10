import type { Metadata } from 'next'
import { MoveDiagonal2 } from 'lucide-react'

import { BackToHome } from '@/components/back-to-home'

export const metadata: Metadata = {
  title: 'Works',
}

type Work = {
  title: string
  href: string
  note?: string
  stack?: string
  /** 埋め込み先の背景が透明なため、白地を敷かないと読めないもの。 */
  needsLightBackdrop?: boolean
  extraLink?: { label: string; href: string }
}

const works: Work[] = [
  {
    title: '寄宿舎(凌雲塾)Webページ',
    href: 'http://www.hcyuko.hiroshima-c.ed.jp/kisyukusya/index.html',
    stack: 'HTML, CSS, JavaScript',
  },
  {
    title: 'C3オープンキャンパスWebページ',
    href: 'https://oc2021.compositecomputer.club/',
    note: '（部内での共同開発）',
    stack: 'Adobe XD, Nuxt, CSS',
  },
  {
    title: 'C3 Official Site',
    href: 'https://compositecomputer.club/',
    note: '（部内での共同開発）',
    needsLightBackdrop: true,
    extraLink: {
      label: 'Adobe XD',
      href: 'https://xd.adobe.com/view/2ea8e9f6-2a78-4dc5-9ae5-4f44e2894818-7bfb/',
    },
  },
]

export default function Works() {
  return (
    <>
      <h2 className="mt-10 font-bold">制作したページ</h2>
      {works.map(({ title, href, note, stack, needsLightBackdrop, extraLink }) => (
        <div key={title} className="p-5">
          <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold">
            {title}
          </a>
          {note && <p className="ml-5">{note}</p>}
          <div className="relative m-4 h-[min(45vh,45vw)] w-[min(80vh,80vw)] resize overflow-hidden">
            <iframe
              title={title}
              src={href}
              sandbox=""
              loading="lazy"
              className={`h-[calc(100%-20px)] w-[calc(100%-20px)] border-none ${
                needsLightBackdrop ? 'bg-white' : ''
              }`}
            />
            <MoveDiagonal2
              aria-hidden
              className="absolute right-0 bottom-0 size-4 rounded-full bg-black p-0.5 text-white"
            />
          </div>
          {stack && <p className="ml-5">{stack}</p>}
          {extraLink && (
            <a href={extraLink.href} target="_blank" rel="noopener noreferrer" className="ml-5">
              {extraLink.label}
            </a>
          )}
        </div>
      ))}
      <BackToHome />
    </>
  )
}
