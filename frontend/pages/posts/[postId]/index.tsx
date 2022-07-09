import { Fragment } from "react";
import Navigation from "../../../components/NavBar/Navigation";
import styles from './post.module.css';

export async function getStaticPaths() {

    const res = await fetch('http://localhost:1337/api/posts');
    const { data } = await res.json();
    const paths = data.map((post: any) => {
        return { params: { postId: post.id.toString() } }
    });

    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps({params}: any) {

    const id: Number = Number(params.postId);

    const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=heroImage,secondImage,category`);
    const data = await res.json();

    return {
        props: data
    }
}

const Post: React.FC<{data: any}> = ({data}) => {
    const title = data.attributes.title;
    const intro = data.attributes.IntroText;
    const coffeeReview = data.attributes.coffeeReview;
    const locationReview = data.attributes.locationReview;
    const finalVerdict = data.attributes.finalVerdict;
    const heroImage = data.attributes.heroImage.data.attributes.formats.medium.url;
    const secondImage = data.attributes.secondImage.data.attributes.formats.medium.url;

    return(
        <Fragment>
            <Navigation />
            <div className={styles.main}>
                <img src={heroImage}/>
                <h1>{title}</h1>
                <p>{intro}</p>
                <p>{coffeeReview}</p>
                <p>{locationReview}</p>
                <img src={secondImage}/>
                <p>{finalVerdict}</p>
            </div>
        </Fragment>
    )
}

export default Post;