import styles from './page.module.css';
import '@/styles/style.css';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Nosotros from '@/components/Nosotros';
import Servicios from '@/components/Servicios';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Nosotros/>
      <Servicios/>
      <Contacto/>
      <Footer/>
    </>
  )
}
