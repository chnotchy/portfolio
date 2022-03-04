import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Card() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section>
        <div className='cardSection'>
          <h2 className='title'>
            Flex
          </h2>
          <div className='cardContainerF'>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='cardStyle cardF'>
              <div className='cardContent'>カード</div>
            </div>
            <div className='adjustLeftF'></div>
          </div>
        </div>
        <div className='cardSection'>
          <h2 className='title'>
            Grid
          </h2>
          <div className='cardContainerG'>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='cardStyle cardG'>
              <div className='cardContent'></div>
            </div>
            <div className='adjustLeft'></div>
          </div>
        </div>
        <style jsx>{`
          .title {
            margin-top: 32px;
            margin-bottom: 12px;
          }
          .cardStyle {
            text-align: center;
            padding: 20px;
            border-radius: 4px;
            background: #555;
            transition: .3s;
            position: relative;
          }
          .cardStyle:hover {
            /* box-shadow: 4px 4px 4px #555; */
            background: #707070;
          }
          .cardStyle::after {
            content: "";
            transition: .3s;
            height: 100%;
            width: 0;
            border-radius: 4px;
            background: linear-gradient(to top, #333 4px, transparent 4px);
            position: absolute;
            left: 50%;
            top: 0;
          }
          .cardStyle:hover::after {
            width: 100%;
            left: 0;
          }
          .cardContainerF {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
          }
          .cardF {
            flex-basis: 300px;
            flex-grow: 1;
            display: flex;
            margin: 16px;
            height: 160px;
          }
          .adjustLeftF {
            display: none;
            /* visibility: hidden; */
            /* flex-grow: 1; */
            /* flex-basis: 100%; */
          }
          .cardContainerGa {
            display: grid;
            width: 95%;
            margin: auto;
            /* column-gap: clamp(16px, 10vw, 100px); */
            column-gap: 0;
            justify-content: space-around;
            grid-template-columns: repeat(auto-fill, 8px 30% 8px);
            grid-auto-rows: minmax(160px, auto);
            row-gap: clamp(16px, 5vw, 32px);
            align-content: space-evenly;
          }
          .cardContainerG {
            display: grid;
            width: 95%;
            margin: auto;
            column-gap: clamp(16px, 10vw, 100px);
            row-gap: clamp(16px, 5vw, 32px);
            /* grid-template-rows: auto; */
            grid-auto-rows: minmax(160px, auto);
            /* grid-template-columns: repeat(4, minmax(160px, 300px)); */
            grid-template-columns: repeat(auto-fill, clamp(200px, 20%, 400px));
            justify-content: space-evenly;
            align-content: space-evenly;
          }
          .cardG {
            color: white;
            /* margin: 16px; */
          }
        `}</style>
      </section>
    </Layout>
  )
}
