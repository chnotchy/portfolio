import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

const siteTitle = "Notchy"

export default function Layout({ children, home }) {
  return (
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
                  <a className="">Profile</a>
                </Link>
              </div>
              <div className={styles.headerLink}>
                <Link href="/skills">
                  <a className="">Skills</a>
                </Link>
              </div>
              <div className={styles.headerLink}>
                <Link href="/works">
                  <a className="">Works</a>
                </Link>
              </div>
              <div className={styles.headerLink}>
                <Link href="/contact">
                  <a className="">Contact</a>
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
      <footer className={styles.footerSmall}>
        <small>
          ©️ 2022 Notchy
        </small>
      </footer>
    </div>
  )
}