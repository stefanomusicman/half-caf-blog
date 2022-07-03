import SVG from "./SVG";
import styles from './Banner.module.css';
import RecentPosts from "./RecentPosts/RecentPosts";
import React from "react";

export async function getStaticProps() {

    const res = await fetch('http://localhost:1337/api/posts?populate=heroImage,category');
    const data = await res.json();
  
    return {
      props: data,
    }
  }

const Banner: React.FC<{data: any}> = ({data}) => {
    return(
        <React.Fragment>
            <div className={styles.main}>
                <div className={styles.textBox}>
                    <SVG />
                    <h1>Your one stop shop for all things coffee in the greater Montreal area!</h1>
                </div>
            </div>
            <RecentPosts data={data}/>
        </React.Fragment>
    )
}

export default Banner;