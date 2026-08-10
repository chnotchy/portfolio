import type { Metadata } from 'next'
import Image from 'next/image'

import { BackToHome } from '@/components/back-to-home'

export const metadata: Metadata = {
  title: 'Profile',
}

export default function Profile() {
  return (
    <>
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
          <p>プログラミング、webデザインを学習中</p>
        </div>
      </div>
      <BackToHome />
    </>
  )
}
