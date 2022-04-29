import * as React from 'react';
import { useState, useEffect } from 'react';

import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';


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
import { width } from '@mui/system';

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default function Card() {
  const [count, setCount] = useState(100);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  const themeList = [<DarkModeRoundedIcon/>, <LightModeRoundedIcon/>];
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

  const [inputValue, setInputValue] = useState('');

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
      <Box sx={{ my: '20px', '& #flex-div': {display: 'flex'}, '& #label-container': {display: 'flex', justifyContent: 'center'}, '& #label-txt': {my: '0'} }}>
        <div id='flex-div'>
          <div>
            <div>
              <Button variant='outlined' onClick={darkTheme}><DarkModeRoundedIcon/></Button>
              <Switch color='default' checked={boolList[theme]} onClick={switchTheme} sx={{ mx: '0.5em' }} />
              <ThemeSwitch checked={boolList[theme]} onClick={switchTheme} sx={{ mx: '0.5em' }} />
              <Button variant='contained' onClick={lightTheme}><LightModeRoundedIcon/></Button>
            </div>
            <div id='label-container'>
              <FormLabel id='label-txt' component="legend">{themeList[theme]}</FormLabel>
            </div>
          </div>
        </div>
      </Box>
      <Box sx={{ my: '20px' }}>
        <Box id="q-sentence"></Box>
        <FormGroup id="form" sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField onChange={(event) => setInputValue(event.target.value)} />
          <Box>{inputValue}</Box>
          <Button>next</Button>
        </FormGroup>
        <Box id="timer"></Box>
      </Box>
      {/* <Box sx={{ my: '20px' }}>
        <h1 id="subject"></h1>
        <form name="typing">
          <input name="input" type="text" />
          <input name="btn" type="submit" value="送信" />
        </form>
        <p id="timer">制限時間：10秒</p>
      </Box> */}
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

