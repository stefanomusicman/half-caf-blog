import { Fragment } from "react";

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

    const res = await fetch(`http://localhost:1337/api/posts/${id}`);
    const data = await res.json();

    return {
        props: data
    }
}

const Post: React.FC<{data: any}> = ({data}) => {
    const title = (data.attributes.title);
    const intro = (data.attributes.IntroText);

    return(
        <Fragment>
            <h1>{title}</h1>
            <h3>{intro}</h3>
        </Fragment>
    )
}

export default Post;