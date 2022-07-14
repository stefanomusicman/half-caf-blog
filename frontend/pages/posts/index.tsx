import React, { Fragment, useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/NavBar/Navigation";
import styles from './posts.module.css';
import Title from "../../components/Title/Title";
import { BsSearch } from 'react-icons/bs';

export async function getStaticProps() {

  const res = await fetch('http://localhost:1337/api/posts?populate=cardPhoto&sort=id:desc&pagination[page]=1&pagination[pageSize]=6');
  const data = await res.json();

  return {
    props: {data},
  }
}
  
  const BlogPosts: React.FC<{data: any}> = ({data}) => {

    const [searchTerm, setSearchTerm] = useState<string>(''); //Responsible for storing the search term
    const [searchResults, setSearchResults] = useState<any>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [posts, setPosts] = useState(data); //Responsible for storing the data being retrieved from strapi
    const [pageNumber, setPageNumber] = useState(1); //Responsible for storing the page number

    //Changes the page number based on which one user clicks on and loads appropriate content
    function pageLoadHandler(page: number): void {
      setPageNumber(page);
      const fetchPageData = async () => {
        const res = await fetch(`http://localhost:1337/api/posts?populate=heroImage,category&pagination[page]=${pageNumber}&pagination[pageSize]=6`);
        const data = await res.json();
  
        setPosts(data);
      }
      fetchPageData();
    }

    //Creates the different page numbers
    function createPages() {
      for(let i = 1; i <= posts.meta.pagination.pageCount; i++) {
        return <div onClick={() => pageLoadHandler(i)} className={styles.pageNumber}>{i}</div>
      }
    }

    // Fetchs Data based on search query
    function getDataFromSearch(term: string) {
      const fetchSearchData = async () => {
        const res = await fetch(`http://localhost:1337/api/posts?populate=cardPhoto&filters[title][$containsi]=${term}`);
        const data = await res.json();

        setIsSearching(true);
        setSearchResults(data.data);
      }
      fetchSearchData();
    }

    // Responsible for listening to every search term and carrying out a request to fetch appropriate data
    useEffect(() => {
      if(searchTerm.length === 0) {
        setIsSearching(false);
      } else {
        getDataFromSearch(searchTerm);
      }
    }, [searchTerm])

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
            {!isSearching && posts.data.map((item: any) => 
              <BlogCard introText={item.attributes.cardText} 
                        image={item.attributes.cardPhoto.data.attributes.formats.medium.url} 
                        key={item.id} 
                        id={item.id} 
                        title={item.attributes.title}
                        dateCreated={item.attributes.createdAt}/>)}
            {isSearching && searchResults.map((item: any) => 
              <BlogCard introText={item.attributes.cardText} 
                        image={item.attributes.cardPhoto.data.attributes.formats.medium.url} 
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