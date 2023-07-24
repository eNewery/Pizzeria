import Image from 'next/image'
import styles from './page.module.css'
import db from './components/db'
import ProductsList from './components/ProductsList'
export default function Home() {
  console.log(db)
  return (
    <main className='mainContainer'>
    <ProductsList/>
    </main>
  )
}
