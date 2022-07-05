import React, { Fragment, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/NavBar/Navigation";
import styles from './posts.module.css';
import Title from "../../components/Title/Title";
import { BsSearch } from 'react-icons/bs';

export async function getStaticProps() {

  const res = await fetch('http://localhost:1337/api/posts?populate=heroImage,category&pagination[page]=1&pagination[pageSize]=6');
  const data = await res.json();

  return {
    props: data,
  }
}
  
  const BlogPosts: React.FC<{data: any}> = ({data}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState(data);

    return(
      <Fragment>
        <Navigation />
        <div className={styles.contentBox}>
          <Title title='All Posts'/>
          <div className={styles.searchContainer}>
            <BsSearch className={styles.searchIcon}/>
            <input onChange={(e) => setSearchTerm(e.target.value)} 
                   value={searchTerm} 
                   placeholder="Search Post"/>
          </div>
          <div className={styles.primaryBodyContainer}>
            {posts.map((item: any) => 
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