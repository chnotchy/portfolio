import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const siteTitle = "Notchy's Portfolio Website"

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
            <title>Notchy</title>
            <link rel="icon" href="/favicon.png" />
            <meta
              name="og:description"
              content="Notchy's portfolio website."
            />
            <meta
              property="og:image"
              content="/og.png"
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="og:url" content="/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@chnotchy" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            {/* <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            /> */}
            {/* <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            /> */}
          </Head>
          <header className={styles.header}>
            <div className={`${styles.headerWrapper} ${styles.adjustHeaderWidth}`}>
              {home ? (
                <div className={`${styles.center}`}>
                  <h1 className={styles.headerTitle}>Notchy</h1>
                </div>
              ) : (
                <div className={`${styles.center}`}>
                  <span>
                    <Link href="/">
                      <a className={styles.noDecoration}>
                        <h1 className={styles.headerTitle}>Notchy</h1>
                      </a>
                    </Link>
                  </span>
                </div>
              )}
              <div className={styles.headerLinkContainer}>
                <div className={styles.headerLink}>
                  <Link href="/profile">
                    <a className={styles.button}>
                      {/* <AccountCircleRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.15em' }} /> */}
                      <span className={`${styles.linkIcon} ${styles.icone853}`}>
                        <span class="material-symbols-rounded">
                          account_circle
                        </span>
                      </span>
                      <span className={styles.spHidden}>Profile</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.headerLink}>
                  <Link href="/skills">
                    <a className={styles.button}>
                      {/* <LaptopChromebookRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.15em' }} /> */}
                      <span className={`${styles.linkIcon} ${styles.iconeb8e}`}>
                        <span class="material-symbols-rounded">
                          terminal
                        </span>
                      </span>
                      <span className={styles.spHidden}>Skills</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.headerLink}>
                  <Link href="/works">
                    <a className={styles.button}>
                      {/* <AutoAwesomeMotionRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.15em' }} /> */}
                      <span className={`${styles.linkIcon} ${styles.icone661}`}>
                        <span class="material-symbols-rounded">
                          auto_awesome_motion
                        </span>
                      </span>
                      <span className={styles.spHidden}>Works</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.headerLink}>
                  <Link href="/contact">
                    <a className={styles.button}>
                      {/* <ChatRoundedIcon sx={{ fontSize: '1.1em', marginRight: '0.4em', marginBottom: '-0.2em' }} /> */}
                      <span className={`${styles.linkIcon} ${styles.icone0b7}`}>
                        <span class="material-symbols-rounded">
                          chat
                        </span>
                      </span>
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