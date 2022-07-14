import React, { Fragment } from "react";
import { useRouter } from "next/router";
import styles from './BlogCard.module.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const BlogCard: React.FC<{ dateCreated:string, introText:string, image:string, id: number, title: string, category: string }> = ({ id, introText, title, image, dateCreated, category }) => {

    const router = useRouter();

    function showPostHandler() {
        router.push('/posts/' + id)
    }

    const date = new Date(dateCreated);
    const correctDate = date.toString().split('').slice(0,16).join('');

    return(
        <Fragment>
            <div className={styles.main}>
                <div className={styles.imageContainer}>
                    <div className={styles.whiteBackground}></div>
                    <img onClick={showPostHandler} src={image}/>
                </div>
                <div className={styles.copyContainer}>
                    <div className={styles.date}>
                        <p>{<AiOutlineCalendar />}{correctDate}</p>
                        <p>{category}</p>
                    </div>
                    <h2>{title}</h2>
                    <p>{introText}</p>
                    <button onClick={showPostHandler}>See Post</button>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogCard;