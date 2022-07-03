import styles from './RecentPosts.module.css';
import Title from '../../Title/Title';
import BlogCard from '../../BlogCard/BlogCard';
import GoToPostsButton from '../../HomeButton/GoToPostsButton';

const RecentPosts: React.FC<{data: any}> = ({data}) => {
    return(
        <div className={styles.contentBox}>
            <Title title="Recent Posts"/>
            <div className={styles.primaryBodyContainer}>
                <BlogCard introText={data[0].attributes.IntroText}
                        image={data[0].attributes.heroImage.data.attributes.formats.medium.url}
                        key={data[0].id}
                        id={data[0].id} 
                        title={data[0].attributes.title}
                        dateCreated={data[0].attributes.createdAt}/>
                <BlogCard introText={data[1].attributes.IntroText}
                        image={data[1].attributes.heroImage.data.attributes.formats.medium.url}
                        key={data[1].id}
                        id={data[1].id} 
                        title={data[1].attributes.title}
                        dateCreated={data[1].attributes.createdAt}/>
            </div>
        </div>
    )
}

export default RecentPosts;