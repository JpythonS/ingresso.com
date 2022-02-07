import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingresso.com - Fãs de cinema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Image src="/ingresso-com-logo.svg" alt="Logo ingresso.com" width={300} height={50}/>
        <div className={styles.header_info}>
          <input type="search" name="pesquisar" placeholder='Pesquise por filmes, cinemas...' className={styles.header_search}/>
          <div className={styles.header_options}>
            <div className={styles.header_item}>
              <Image className={styles.header_item_icone} src="/place-2.svg" alt="Logo ingresso.com" width={16} height={16}/>
              <span>São José dos Campos</span>
            </div>
            <div className={styles.header_item}>
              <Image className={styles.header_item_icone} src="/user.svg" alt="Logo ingresso.com" width={16} height={16}/>
              <span>Olá, visitante</span>
            </div>
            <div className={styles.header_item}>
              <Image className={styles.header_item_icone} src="/help-2.svg" alt="Logo ingresso.com" width={16} height={16}/>
              <span>Atendimento</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home
