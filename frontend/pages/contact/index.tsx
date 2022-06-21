import React, { Fragment } from "react";
import Navigation from "../../components/NavBar/Navigation";
import styles from './contact.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import Footer from "../../components/Footer/Footer";

const Contact = () => {
    return(
        <Fragment>
            <Navigation />
            <div className={styles.contentBox}>
                <div className={styles.titleBox}>
                    <svg className={styles.svg} width='198' height='32' viewBox='0 0 298 32' fill='red' xmlns='http://www.w3.org/2000/svg'><path d='M1 17.1944C62.6418 7.28318 174.478 -8.49028 296 27' stroke='%23F6BFB3' stroke-width='9' /></svg>
                    <h1>Contact</h1>
                </div>
                <div className={styles.primaryBodyContainer}>
                    <div className={styles.leftSide}>
                        <div className={styles.paragraph1}>
                            <h2>Contact Half Caf Blog</h2>
                            <p>We're here to help answer any questions you may have. Feel free to reach out for anything from questions, business inquiries or just to chat!</p>
                        </div>
                        <div className={styles.paragraph2}>
                            <h2>Hate forms?</h2>
                            <h2>Reach out on social media!</h2>
                            <div className={styles.iconsContainer}>
                                <BsFacebook className={styles.facebook}/>
                                <BsInstagram className={styles.instagram}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <h2>Contact Form</h2>
                        <form className={styles.form}>
                            <textarea placeholder="Write your message here" />
                            <input placeholder='Email Address'/>
                            <input placeholder='Your name here'/>
                            <button>Send {<IoIosSend />}</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Contact;