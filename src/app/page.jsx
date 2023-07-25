import Image from 'next/image'
import styles from './page.module.css'
import ProductsList from './components/ProductsList'
export default function Home() {
  return (
    <main className='mainContainer'>
    <ProductsList/>
    </main>
  )
}
