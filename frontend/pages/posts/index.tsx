import React, { Fragment } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/NavBar/Navigation";
import styles from './posts.module.css';
import Title from "../../components/Title/Title";

export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/api/posts?populate=heroImage,category');
    const data = await res.json();
  
    return {
      props: data,
    }
  }
  
  const BlogPosts: React.FC<{data: any}> = ({data}) => {

    return(
      <Fragment>
        <Navigation />
        <div className={styles.contentBox}>
          <Title title='All Posts'/>
          <div className={styles.primaryBodyContainer}>
            {data.map((item: any) => 
              <BlogCard introText={item.attributes.IntroText} 
                        image={item.attributes.heroImage.data.attributes.formats.medium.url} 
                        key={item.id} 
                        id={item.id} 
                        title={item.attributes.title}
                        dateCreated={item.attributes.createdAt}/>)}
          </div>
          <Footer />
        </div>
    </Fragment>
  )
}

export default BlogPosts;