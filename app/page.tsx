import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <section>
      <div className="my-5 flex">
        <Image
          src="/images/profile.jpg"
          alt="Notchy のプロフィール写真"
          width={200}
          height={200}
          priority
          className="mt-5 mr-5 mb-10 rounded-full"
        />
        <div className="p-5 leading-[1.8em]">
          <p>Welcome to my website!</p>
        </div>
      </div>
      <div className="p-5">
        <a
          href="https://github.com/notchcoder/portofolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold"
        >
          このサイトのGitHubリポジトリ
          <ExternalLink aria-hidden className="size-[1em] shrink-0" />
        </a>
      </div>
    </section>
  )
}
