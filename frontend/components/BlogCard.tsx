import React, { Fragment } from "react";
import { useRouter } from "next/router";
import styles from './BlogCard.module.css';

const BlogCard: React.FC<{ id: number, title: string }> = ({ id, title }) => {

    const router = useRouter();

    function showPostHandler() {
        router.push('/Blog-Posts/' + id)
    }

    return(
        <Fragment>
            <div className={styles.main}>
                <h3>{title}</h3>
                <button onClick={showPostHandler}>See Post</button>
            </div>
        </Fragment>
    )
}

export default BlogCard;