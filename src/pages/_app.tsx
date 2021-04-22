import '../styles/globals.scss'
import styles from '../styles/app.module.scss';

import { Header } from '../components/header'
import { Player } from '../components/player'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player/>
    </div>
  )
}

export default MyApp