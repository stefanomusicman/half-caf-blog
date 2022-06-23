import React, { Fragment } from "react";
import { useRouter } from "next/router";
import styles from './BlogCard.module.css';

const BlogCard: React.FC<{ introText:string, image:string, id: number, title: string }> = ({ id, introText, title, image }) => {

    const router = useRouter();

    function showPostHandler() {
        router.push('/posts/' + id)
    }

    return(
        <Fragment>
            <div className={styles.main}>
                <div className={styles.imageContainer}>
                    <div className={styles.whiteBackground}></div>
                    <img src={image}/>
                </div>
                <div className={styles.copyContainer}>
                    <h2>{title}</h2>
                    <p>{introText}</p>
                    <button onClick={showPostHandler}>See Post</button>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogCard;