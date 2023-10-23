import styles from './page.module.css';
import '@/styles/style.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Nosotros from '@/components/Nosotros';
import Servicios from '@/components/Servicios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo-icono.svg"/>
        <title>Kadiz Ineniería</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

          <Navbar/>
          <Header/>
          <Nosotros/>
          <Servicios/>
          <Contacto/>
          <Footer/>

    </>
  )
}
