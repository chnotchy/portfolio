import Layout from "../components/layout";

export default function Works() {
  return (
    <Layout>
      <div className="container">
        <a className="title" href="http://www.hcyuko.hiroshima-c.ed.jp/kisyukusya/index.html" target="_blank">寄宿舎(凌雲塾)Webページ</a>
        <div className="txt">HTML, CSS, JavaScript</div>
      </div>
      <div className="container">
        <a className="title" href="https://oc2021.compositecomputer.club/" target="_blank">C3オープンキャンパスWebページ</a>
        <div className="txt">HTML, CSS, Adobe Xd</div>
      </div>
      <div className="container">
        <div className="title">C3 Official Site（制作中）</div>
        <a className="txt" href="https://xd.adobe.com/view/2ea8e9f6-2a78-4dc5-9ae5-4f44e2894818-7bfb/" target="_blank">Adobe Xd</a>
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