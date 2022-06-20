import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import GoToPostsButton from '../components/HomeButton/GoToPostsButton'
import MobileNavigation from '../components/NavBar/MobileNavigation'
import NavBar from '../components/NavBar/NavBar'
import Navigation from '../components/NavBar/Navigation'
import styles from '../styles/Home.module.css'

const Home: NextPage<{}> = () => {

  return (
    <div>
      <Navigation />
      <Banner />
      <GoToPostsButton />
      <Footer />
    </div>
  )
}

export default Home
