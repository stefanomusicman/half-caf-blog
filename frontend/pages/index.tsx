import type { NextPage } from 'next'
import Head from 'next/head'
import MobileNavigation from '../components/NavBar/MobileNavigation'
import NavBar from '../components/NavBar/NavBar'
import Navigation from '../components/NavBar/Navigation'
import styles from '../styles/Home.module.css'

const Home: NextPage<{}> = () => {

  return (
    <div>
      <Navigation />
    </div>
  )
}

export default Home
