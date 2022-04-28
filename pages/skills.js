import Layout from "../components/layout";

export default function Skills() {
  return (
    <Layout>
      <div className="container">
        <div className="title">プログラミング</div>
        <div className="txt">C, Python</div>
      </div>
      <div className="container">
        <div className="title">WEB</div>
        <div className="txt">HTML, CSS, JavaScript, MUI</div>
        <div className="txt">ツール…Xd, Figma</div>
      </div>
      <style jsx>{`
        .title {
          font-weight: bold;
        }
        .container {
          padding: 20px;
        }
        .txt {
          padding-left: 20px;
        }
      `}</style>
    </Layout>
  )
}