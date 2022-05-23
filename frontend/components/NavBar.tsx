import React, { Fragment } from "react";
import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <Fragment>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <h3>Half Caf Blog</h3>
                </div>
                <div className={styles.links}>
                    <h3>About Us</h3>
                    <h3>Contact</h3>
                    <h3>Blog Posts</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar;