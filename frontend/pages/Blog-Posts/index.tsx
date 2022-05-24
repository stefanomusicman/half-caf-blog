import React, { Fragment } from "react";
import BlogCard from "../../components/BlogCard";
import NavBar from "../../components/NavBar";
import styles from './index.module.css';

export async function getStaticProps() {
    const fetchParams: object = {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `{
        posts{
          data{
            id,
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

const BlogPosts: React.FC<{data: object}> = ({data}) => {

    const { posts }: any = data;
    console.log(posts);

    return(
        <Fragment>
            <NavBar />
            <div className={styles.main}>
                {posts.data.map((item: any) => <BlogCard key={item.id} id={item.id} title={item.attributes.title}/>)}
            </div>
        </Fragment>
    )
}

export default BlogPosts;