import * as React from 'react';
import { useState } from 'react';

import { Box, FormGroup } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'

export default function Card() {
  const [count, setCount] = useState(100);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  const themeList = ['dark', 'light'];
  const boolList = [false, true];

  const [theme, setTheme] = useState(0);

  function darkTheme() {
    setTheme(0);
  }
  function switchTheme() {
    setTheme(prevTheme => 1 - prevTheme);
  }
  function lightTheme() {
    setTheme(1);
  }

  return (
    <Layout>
      <Head>
        <title>タイピングサイト</title>
      </Head>
      <Box sx={{ my: '20px' }}>
        <FormGroup id="form" sx={{ display: 'flex', flexDirection: 'row' }}>
          <IconButton onClick={decrementCount} color="primary" aria-label="add to shopping cart">
            <RemoveCircleOutlineRoundedIcon/>
          </IconButton>
          <Box id="counter" sx={{ mx: '1em', lineHeight: '50px' }}>{count}</Box>
          <IconButton onClick={incrementCount} color="secondary" aria-label="add to shopping cart">
            <AddCircleOutlineRoundedIcon/>
          </IconButton>
        </FormGroup>
      </Box>
      <Box sx={{ my: '20px' }}>
        <Button variant='outlined' onClick={darkTheme}><DarkModeRoundedIcon/></Button>
        <Switch checked={boolList[theme]} label={themeList[theme] + ' mode'} labelPlacement='bottom' onClick={switchTheme} sx={{ mx: '0.5em' }} />
        <Button variant='contained' onClick={lightTheme}><LightModeRoundedIcon/></Button>
        <FormGroup id="form" sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box id="counter" sx={{ mx: '1em', lineHeight: '50px' }}>{themeList[theme] + ' mode'}</Box>
        </FormGroup>
      </Box>
      <Box sx={{ my: '20px' }}>
        <h1 id="subject"></h1>
        <form name="typing">
          <input name="input" type="text" />
          <input name="btn" type="submit" value="送信" />
        </form>
        <p id="timer">制限時間：10秒</p>
      </Box>
      <Box sx={{ my: '20px' }}>
        <Box id="q-sentence"></Box>
        <FormGroup id="form" sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField></TextField>
          <Button>next</Button>
        </FormGroup>
        <Box id="timer"></Box>
      </Box>
      <style jsx>{`
        .title {
          margin-top: 32px;
          margin-bottom: 12px;
        }
      `}</style>
    </Layout>
  )
}

// const subject = document.getElementById('subject');
// const timer = document.getElementById('timer');
// const form = document.forms.typing;
// const textList = [
//   'Hello World!',
//   'Your Welcome.',
//   'This is a pen.',
//   'Have a nice day.',
//   'See you next time!'
// ];

// let TIME = 20;
// let count = 0;
// let state = true;
 
// const countdown = setInterval(function() {
//   timer.textContent = '制限時間：' + --TIME + '秒';
//   if(TIME <= 0) finish();
// }, 1000);
 
 
// form.btn.addEventListener('click', function(e) {
//   if(!state) return;
 
//   if(form.input.value === subject.textContent) {
//     count++;
//     init();
//   } else {
//     subject.textContent = '間違いです！';
//     setTimeout(function(){ init() },1000)
//   }
// });
 
// init();
 
// function init() {
//   const rnd = Math.floor(Math.random() * textList.length);
 
//   subject.textContent = textList[rnd];
//   form.input.value = '';
//   form.input.focus();
// }
 
// function finish() {
//   clearInterval(countdown);
//   subject.textContent = '正解数は' + count + '個でした！';
//   state = false;
// }

