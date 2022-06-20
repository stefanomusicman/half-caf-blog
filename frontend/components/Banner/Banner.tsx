import SVG from "./SVG";
import styles from './Banner.module.css';

const Banner = () => {
    return(
        <div className={styles.main}>
            <SVG />
            <div className={styles.textBox}>
                <h1>Your one stop shop for all things coffee in the greater Montreal region!</h1>
            </div>
        </div>
    )
}

export default Banner;