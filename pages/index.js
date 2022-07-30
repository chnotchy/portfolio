import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Home() {
  return (  
    <Layout home>
      <Head>
        <title>Notchy</title>
      </Head>
      <section>
        <div className="flex">
          <div>
            <img className="img" src="/images/profile.jpg"/>
          </div>
          <div className="intro">
            <div>Welcome to my website!</div>
          </div>
        </div>
        <div className="container">
          <a className="title" href="https://github.com/notchcoder/portfolio" target="_blank">
            このサイトのGitHubリポジトリ
            <OpenInNewIcon
              sx={{
                ml: '0.5em',
                mb: '-0.1em',
                fontSize: '1em',
              }}
            />
          </a>
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
        `}</style>
      </section>
    </Layout>
  )
}
