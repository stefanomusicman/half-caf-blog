import { Fragment } from "react";

export async function getStaticPaths() {


    return {
        // paths: ,
        // fallback: true
    }
}

export async function getStaticProps({params}: any) {



    return {
        props: {}
    }
}

const Post = () => {
    return(
        <Fragment></Fragment>
    )
}

export default Post;