'use client';
import 'bootstrap/dist/js/bootstrap.min.js'
import Image from 'next/image';
import styles from './page.module.css';
import '@/styles/style.css';
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
    </>
  )
}
