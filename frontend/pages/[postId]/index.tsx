
export async function getStaticPaths() {
    const fetchParams = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            {
                posts{
                    data{
                        id
                    }
                }
            }
            `
        })
    }

    const res = await fetch(`http://localhost:1337/graphql`, fetchParams);
    const posts = await res.json();
    const paths = posts.data.map((post: any) => {
        return { params: { id: post.id } }
    })

    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps({params}: any) {

    const fetchParams = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `

            `
        })
    }

    const res = await fetch(`http://localhost:1337/graphql`, fetchParams);
    const posts = await res.json();

    return {
        props: {}
    }
}

const Post = () => {

}

export default Post;