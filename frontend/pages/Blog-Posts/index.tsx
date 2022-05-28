import React, { Fragment } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import NavBar from "../../components/NavBar/NavBar";
import styles from './index.module.css';

export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/api/posts');
    const data = await res.json();
  
    return {
      props: data,
    }
  }

const BlogPosts: React.FC<{data: any}> = ({data}) => {

  return(
    <Fragment>
        <NavBar />
        <div className={styles.main}>
            {data.map((item: any) => <BlogCard key={item.id} id={item.id} title={item.attributes.title}/>)}
        </div>
    </Fragment>
  )
}

export default BlogPosts;