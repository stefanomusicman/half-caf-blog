import React, { Fragment } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/NavBar/Navigation";
import styles from './posts.module.css';

export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/api/posts?populate=heroImage,secondImage,category');
    const data = await res.json();
  
    return {
      props: data,
    }
  }
  
  const BlogPosts: React.FC<{data: any}> = ({data}) => {
    // console.log(data);
    return(
      <Fragment>
        <Navigation />
        <div className={styles.contentBox}>
          <div className={styles.titleBox}>
            <svg className={styles.svg} width='198' height='32' viewBox='0 0 298 32' fill='red' xmlns='http://www.w3.org/2000/svg'><path d='M1 17.1944C62.6418 7.28318 174.478 -8.49028 296 27' stroke='%23F6BFB3' stroke-width='9' /></svg>
            <h1>All Posts</h1>
          </div>
          <div className={styles.primaryBodyContainer}>
            {data.map((item: any) => <BlogCard key={item.id} id={item.id} title={item.attributes.title}/>)}
          </div>
          <Footer />
        </div>
    </Fragment>
  )
}

export default BlogPosts;