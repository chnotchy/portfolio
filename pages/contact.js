import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <a className="title" href="http://twitter.com/chnotchy" target="_blank">Twitter</a>
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
      `}</style>
    </Layout>
  )
}