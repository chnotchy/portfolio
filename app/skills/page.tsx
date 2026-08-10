import type { Metadata } from 'next'

import { BackToHome } from '@/components/back-to-home'

export const metadata: Metadata = {
  title: 'Skills',
}

const skillGroups = [
  { title: 'プログラミング', items: ['C, Python'] },
  { title: 'WEB', items: ['HTML, CSS, JavaScript, MUI', 'ツール…Xd, Figma'] },
]

export default function Skills() {
  return (
    <>
      {skillGroups.map(({ title, items }) => (
        <div key={title} className="p-5">
          <h2 className="font-bold">{title}</h2>
          {items.map((item) => (
            <p key={item} className="pl-5">
              {item}
            </p>
          ))}
        </div>
      ))}
      <BackToHome />
    </>
  )
}
