import React, { Fragment } from "react";
import Navigation from "../../components/NavBar/Navigation";
import styles from "./about-us.module.css";
import Image from "next/image";
import coffee1 from "../../public/coffee1.jpeg";
import coffee2 from "../../public/coffee2.jpg";
import coffee3 from "../../public/coffee3.jpg";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";

const About = () => {
    return(
        <Fragment>
            <Navigation />
            <div className={styles.contentContainer}>
                <Title title="About Us"/>
                <div className={styles.captionBox}>
                    <h2>We are Half Caf Blog, a team of passionate coffee conoisseurs.</h2>
                </div>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={coffee2} alt="picture of coffee cup" width={650} height={350}/>
                    <Image className={styles.image} src={coffee1} alt="picture of coffee cup" width={350} height={310}/>
                    <Image className={styles.image} src={coffee3} alt="picture of coffee cup" width={375} height={400}/>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.paragraphOne}>
                        <p>Welcome to Half Caf Blog, a place for all things coffee within the greater Montreal Area. Here you will find a variety of content including coffee shop reviews and coffee reviews! We are a small team of people who are passionate about coffee and would like nothing more than to provide Montrealers with non-biased information for anything related to coffee.</p>
                    </div>
                    <div className={styles.paragraphTwo}>
                        <p>At Half Caf Blog, when we review anything, we don&apos;t simply focus on the overall trendiness of a product/coffee shop but we also put a lot of emphasis on the actual coffee! For instance, when we review a coffee shop, we always order two drinks, a black espresso in order to get a taste for the raw coffee being served and then a milk drink to get a taste of whether or not the milk is being heated skillfully.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default About;