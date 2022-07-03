import type { NextPage } from 'next'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import GoToPostsButton from '../components/HomeButton/GoToPostsButton'
import Navigation from '../components/NavBar/Navigation'

export async function getStaticProps() {

  const res = await fetch('http://localhost:1337/api/posts?populate=heroImage,category');
  const data = await res.json();

  return {
    props: data,
  }
}

const Home: NextPage<{data: any}> = ({data}) => {

  return (
    <React.Fragment>
      <Navigation />
      <Banner data={data}/>
      {/* <GoToPostsButton /> */}
      <Footer />
    </React.Fragment>
  )
}

export default Home
