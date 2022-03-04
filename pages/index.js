import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <div className="flex">
          <div>
            <img className="img" src="/images/profile.jpg"/>
          </div>
          <div className="intro">
            <div>Welcome to my website!</div>
          </div>
          <Link href="/card"><a className='hidden'>.</a></Link>
        </div>
        <style jsx>{`
          .flex {
            display: flex;
            margin: 20px 0;
          }
          .img {
            border-radius: 50%;
            width: 200px;
            margin: 20px 20px 40px 0;
          }
          .intro {
            padding: 20px;
            line-height: 1.8em;
          }
          .hidden {
            display: none;
          }
        `}</style>
      </section>
    </Layout>
  )
}
