import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function BackToHome() {
  return (
    <div className="my-4">
      <Link href="/" className="inline-flex items-center gap-2">
        <ArrowLeft aria-hidden className="size-[1em] shrink-0" />
        Back to Home
      </Link>
    </div>
  )
}
