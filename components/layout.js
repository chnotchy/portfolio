import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const siteTitle = "Notchy"

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Layout({ children, home }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={styles.container}>
        <div>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            {/* <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            /> */}
          </Head>
          <header className={styles.header}>
            <div className={`${styles.headerWrapper} ${styles.adjustHeaderWidth}`}>
              {home ? (
                <div>
                  <h1 className={styles.headerTitle}>Portfolio</h1>
                </div>
              ) : (
                <div>
                  <Link href="/">
                    <a className={styles.noDecoration}>
                      <h1 className={styles.headerTitle}>Portfolio</h1>
                    </a>
                  </Link>
                </div>
              )}
              <div className={styles.headerLinkContainer}>
                <div className={styles.headerLink}>
                  <Link href="/profile">
                    <a className="">
                      <AccountCircleRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.15em' }} />
                      <span className={styles.spHidden}>Profile</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.headerLink}>
                  <Link href="/skills">
                    <a className="">
                      <LaptopChromebookRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.15em' }} />
                      <span className={styles.spHidden}>Skills</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.headerLink}>
                  <Link href="/works">
                    <a className="">
                      <AutoAwesomeMotionRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.15em' }} />
                      <span className={styles.spHidden}>Works</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.headerLink}>
                  <Link href="/contact">
                    <a className="">
                      <ChatRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.2em' }} />
                      <span className={styles.spHidden}>Contact</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <main className={styles.adjustWidth}>
            {children}
            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a className={styles.arr}> Back to Home</a>
                </Link>
              </div>
            )}
          </main>
        </div>
        <footer className={styles.footer}>
          <small className={styles.footerSmall}>
            ©️ 2022 Notchy
          </small>
        </footer>
      </div>
    </ThemeProvider>
  )
}