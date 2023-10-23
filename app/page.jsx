import styles from './page.module.css';
import '@/styles/style.css';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Nosotros from '@/components/Nosotros';


export default function Home() {
  return (
    <>
      <Header/>
      <Nosotros/>
    </>
  )
}
