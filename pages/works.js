import * as React from 'react';
import Box from '@mui/material/Box';

import Layout from "../components/layout";
import Link from 'next/link'

export default function Works() {
  return (
    <Layout>
      <Box sx={{ marginTop: '40px', fontWeight: 'bold' }}>
        制作したページ
      </Box>
      <div className="container">
        <a className="title" href="http://www.hcyuko.hiroshima-c.ed.jp/kisyukusya/index.html" target="_blank">寄宿舎(凌雲塾)Webページ</a>
        <div className="txt">HTML, CSS, JavaScript</div>
      </div>
      <div className="container">
        <a className="title" href="https://oc2021.compositecomputer.club/" target="_blank">C3オープンキャンパスWebページ</a>
        <div className="txt">（部内での共同開発）</div>
        <div className="txt">Adobe XD, Nuxt, CSS</div>
      </div>
      <div className="container">
        <a className="title" href="https://compositecomputer.club/" target="_blank">C3 Official Site</a>
        <div className="txt">（部内での共同開発）</div>
        <a className="txt" href="https://xd.adobe.com/view/2ea8e9f6-2a78-4dc5-9ae5-4f44e2894818-7bfb/" target="_blank">Adobe XD</a>
      </div>
      <Box sx={{ my: '20px', py: '20px' }}>
        <div className="title">自作ページ</div>
        <div className="container">
          <Link href="./works/typing"><a>タイピングサイト（制作中）</a></Link>
          <div className="txt">JavaScript</div>
        </div>
        <div className="container">
          基礎練習
          <div className='container'>
            <Link href="./works/practice/card"><a>グリッドデザイン</a></Link>
            <div className="txt">カードをCSSグリッドやFlexboxを使って表示</div>
          </div>
          <div className='container'>
            <Link href="./works/practice/mui"><a>MUI</a></Link>
            <div className="txt">様々なMUIコンポーネント</div>
          </div>
        </div>
      </Box>
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
        .inline {
          display: inline;
        }
      `}</style>
    </Layout>
  )
}