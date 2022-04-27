import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Head from 'next/head'
import Layout from '../../../components/layout'
import Link from 'next/link'

export default function Card() {
  return (
    <Layout>
      <Head>
        <title>MUI</title>
      </Head>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={list10}
        sx={{
          my: '20px',
          width: 300,
        }}
        renderInput={(params) => <TextField {...params} label="選択" />}
      />
      <style jsx>{`
        .title {
          margin-top: 32px;
          margin-bottom: 12px;
        }
      `}</style>
    </Layout>
  )
}

const list10 = [
  {label: 'A'},
  {label: 'B'},
  {label: 'C'},
  {label: 'D'},
  {label: 'E'},
  {label: 'F'},
  {label: 'G'},
  {label: 'H'},
  {label: 'I'},
  {label: 'J'},
]