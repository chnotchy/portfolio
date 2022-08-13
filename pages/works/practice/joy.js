import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/system';

import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import PropTypes from 'prop-types';
import Head from 'next/head'
import Layout from '../../../components/layout'
import Link from 'next/link'


import { deepmerge } from '@mui/utils';
import {
  useColorScheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import { extendTheme as extendJoyTheme } from '@mui/joy/styles';

const joyTheme = extendJoyTheme({
  // This is required to point to `var(--mui-*)` because we are using `CssVarsProvider` from Material UI.
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // ...blue,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
        },
        neutral: {
          // ...grey,
        },
        // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(0 0 0 / 0.56)',
        },
      },
    },
    // Do the same for dark mode
    // dark: { ... }
  },
  fontFamily: {
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif',
  },
  // shadow: {
  //   xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
  //   sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
  //   md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
  //   lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
  //   xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
  // },
});

// Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)` because
//       some of the values in the Joy UI theme refers to CSS variables abd not raw colors.
const muiTheme = extendMuiTheme();

// You can use your own `deepmerge` function.
// muiTheme will deeply merge to joyTheme.
const theme = deepmerge(joyTheme, muiTheme);

export default function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Layout>
        <Head>
          <title>Joy UI</title>
        </Head>
        <Box>
          <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>Switch (Joy)</Box>
          <Box
            sx={{
              '& *': {
                transition: '0.3s',
              }
            }}
          >
            <Switch
              componentsProps={{
                track: {
                  children: (
                    <React.Fragment>
                      <Typography
                        component="span"
                        level="inherit"
                        sx={{
                          ml: '10px',
                          fontSize: '15px',
                      }}>
                        EN
                      </Typography>
                      <Typography
                        component="span"
                        level="inherit"
                        sx={{
                          mr: '10px',
                          fontSize: '16px',
                      }}>
                        JP
                      </Typography>
                    </React.Fragment>
                  ),
                },
              }}
              sx={{
                margin: '10px',
                mx: '20px',
                transition: '0.3s',
                // '&:hover span span:last-child': {
                //   width: '30px',
                // },
                '--Switch-thumb-size': '28px',
                '--Switch-track-width': '64px',
                '--Switch-track-height': '32px',
              }}
            />
            <Switch
              componentsProps={{
                track: {
                  children: (
                    <React.Fragment>
                      <VolumeUpIcon
                        sx={{
                          fontSize: '24px',
                          ml: '6px',
                        }}
                      />
                      <VolumeOffIcon
                        sx={{
                          fontSize: '24px',
                          mr: '6px',
                        }}
                      />
                    </React.Fragment>
                    // <React.Fragment>
                    //   <Typography
                    //     component="span"
                    //     level="inherit"
                    //     sx={{
                    //       ml: '10px',
                    //       fontSize: '15px',
                    //   }}>
                    //     EN
                    //   </Typography>
                    //   <Typography
                    //     component="span"
                    //     level="inherit"
                    //     sx={{
                    //       mr: '10px',
                    //       fontSize: '16px',
                    //   }}>
                    //     JP
                    //   </Typography>
                    // </React.Fragment>
                  ),
                },
              }}
              sx={{
                margin: '10px',
                mx: '20px',
                transition: '0.3s',
                // '&:hover span span:last-child': {
                //   width: '30px',
                // },
                '--Switch-thumb-size': '28px',
                '--Switch-track-width': '64px',
                '--Switch-track-height': '32px',
              }}
            />
            <Switch
              sx={{
                margin: '10px',
                mx: '20px'
              }}
            />
          </Box>
        </Box>
        <style jsx>{`
          .title {
            margin-top: 32px;
            margin-bottom: 12px;
          }
        `}</style>
      </Layout>
    </CssVarsProvider>
  );
}



