import Head from 'next/head'
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <div className="title">SNS</div>
        <a className="txt" href="http://twitter.com/chnotchy" target="_blank">Twitter</a>
      </div>
      <div className="container">
        <div className="title">アカウント一覧</div>
        <a className="txt line" href="https://github.com/notchcoder" target="_blank">GitHub</a>
        <a className="txt line" href="https://atcoder.jp/users/notchy" target="_blank">AtCoder</a>
        {/* <a className="txt line" href="#" target="_blank">Hoge</a> */}
      </div>
      <style jsx>{`
        .title {
          font-weight: bold;
        }
        .container {
          padding: 20px;
        }
        .txt {
          margin-left: 20px;
        }
        .line {
          display: inline-block;
        }
      `}</style>
    </Layout>
  )
}