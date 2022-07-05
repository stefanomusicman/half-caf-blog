import React, { Fragment, useState, useEffect } from "react";
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
    props: {data},
  }
}
  
  const BlogPosts: React.FC<{data: any}> = ({data}) => {

    const [searchTerm, setSearchTerm] = useState<string>(''); //Responsible for storing the search term
    const [posts, setPosts] = useState(data); //Responsible for storing the data being retrieved from strapi
    const [pageNumber, setPageNumber] = useState(posts.meta.pagination.page); //Responsible for storing the page number

    //Changes the page number based on which one user clicks on
    function pageLoadHandler(page: number): void {
      setPageNumber(page);
    }

    //Makes a new request for the content to be shown on a new page
    useEffect((): void => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:1337/api/posts?populate=heroImage,category&pagination[page]=${pageNumber}&pagination[pageSize]=6`);
        const data = await res.json();

        setPosts(data);
      }
      fetchData();
    }, [pageNumber]);

    //Creates the different page numbers
    function createPages() {
      for(let i = 1; i <= posts.meta.pagination.pageCount; i++) {
        return <div onClick={() => pageLoadHandler(i)} className={styles.pageNumber}>{i}</div>
      }
    }

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
            {posts.data.map((item: any) => 
              <BlogCard introText={item.attributes.IntroText} 
                        image={item.attributes.heroImage.data.attributes.formats.medium.url} 
                        key={item.id} 
                        id={item.id} 
                        title={item.attributes.title}
                        dateCreated={item.attributes.createdAt}/>)}
          </div>
          <div className={styles.pageNumbersContainer}>
              {createPages()}
          </div>
          <Footer />
        </div>
      </Fragment>
  )
}

export default BlogPosts;