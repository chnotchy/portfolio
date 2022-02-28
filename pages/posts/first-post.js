import Head from "next/head"
import Link from "next/link"

export default function FirstPost() {
  const a = "First Post"
  return (
    <div>
      <Head>
        <title>Next App First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{a}</h1>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </div>
  )
}