import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

//Responsible for fetching the data
export async function getStaticProps(context: any) {
  const fetchParams: object = {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
      posts{
        data{
          attributes{
            title,
            heroImage{
              data{
                attributes{
                  width,
                  height
                  name
                }
              }
            }
            IntroText,
            coffeeReview,
            locationReview,
            secondImage{
              data{
                attributes{
                  width,
                  height
                  name
                }
              }
            }
            finalVerdict,
            category{
              data{
                attributes{
                  name
                }
              }
            }
          }
        }
      }
    }
      `
    })
  }

  const res = await fetch(`http://localhost:1337/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: data,
  }
}

const Home: NextPage<{data: object}> = ({data}) => {
  console.log(data);
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default Home
