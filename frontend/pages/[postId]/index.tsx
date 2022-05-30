import { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";

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

    const id = Number(params.postId);

    const res = await fetch(`http://localhost:1337/api/posts/${id}?populate=heroImage,secondImage,category`);
    const data = await res.json();

    return {
        props: data
    }
}

const Post: React.FC<{data: any}> = ({data}) => {
    console.log(data);
    const title = data.attributes.title;
    const intro = data.attributes.IntroText;
    const coffeeReview = data.attributes.coffeeReview;
    const locationReview = data.attributes.locationReview;
    const finalVerdict = data.attributes.finalVerdict;
    const heroImage = data.attributes.heroImage.data.attributes.formats.medium.url;
    const secondImage = data.attributes.secondImage.data.attributes.formats.medium.url;

    return(
        <Fragment>
            <NavBar />
            <h1>{title}</h1>
            <img src={heroImage}/>
            <p>{intro}</p>
            <p>{coffeeReview}</p>
            <p>{locationReview}</p>
            <img src={secondImage}/>
            <p>{finalVerdict}</p>
        </Fragment>
    )
}

export default Post;