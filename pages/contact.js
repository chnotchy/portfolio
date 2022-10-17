import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head'
import Layout from "../components/layout";
import { Box } from '@mui/material';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <div className="title">SNS</div>
        <a className="txt line" href="http://twitter.com/chnotchy" target="_blank">
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faTwitter} style={{width: '24px'}} />
            <Box sx={{width: "8px"}}></Box>
            Twitter
          </Box>
        </a>
      </div>
      <div className="container">
        <div className="title">アカウント一覧</div>
        <a className="txt line" href="https://github.com/notchcoder" target="_blank">
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faGithub} style={{width: '24px'}} />
            <Box sx={{width: "8px"}}></Box>
            GitHub
          </Box>
        </a>
        <a className="txt line" href="https://atcoder.jp/users/notchy" target="_blank">
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <span className="buttonWithLink">
              <span className='icon'>
              </span>
            </span>
            <Box sx={{width: "8px"}}></Box>
            AtCoder
          </Box>
        </a>
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
        .icon::before {
          font-family: "Material Symbols Rounded";
          content: "\ef42";
          color: inherit;
          transition: 0.3s;
          font-size: clamp(16px, 2.5vw, 24px);
          font-weight: 400;
          font-variation-settings: 'FILL' 0;
          content: "\e853";
        }
      `}</style>
    </Layout>
  )
}