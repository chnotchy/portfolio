import Layout from "../components/layout";

export default function Profile() {
  return (
    <Layout>
      <div className="flex">
        <div>
          <img className="img" src="/images/profile.jpg"/>
        </div>
        <div className="intro">
          <div>プログラミング、webデザインを学習中</div>
        </div>
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
    </Layout>
  )
}