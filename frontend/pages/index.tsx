import type { NextPage } from 'next'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import GoToPostsButton from '../components/HomeButton/GoToPostsButton'
import Navigation from '../components/NavBar/Navigation'

const Home: NextPage<{}> = () => {

  return (
    <React.Fragment>
      <Navigation />
      <Banner />
      <GoToPostsButton />
      <Footer />
    </React.Fragment>
  )
}

export default Home
