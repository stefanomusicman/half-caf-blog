import { useState } from 'react';
import styles from './Footer.module.css';
import { AiOutlineUserAdd } from 'react-icons/ai';

const Footer = () => {

    const [email, setEmail] = useState('');

    return(
        <footer className={styles.main}>
            <div className={styles.captionBox}>
                <h1>Get latest posts delivered right to your inbox</h1>
            </div>
            <form className={styles.form}>
                <input 
                    type='email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Your email address'/>
                <button type='submit'>{<AiOutlineUserAdd className={styles.icon}/>}Join today</button>
            </form>
            <div className={styles.copyright}>
                <h3>© 2022 Half Caf Blog. All rights reserved</h3>
            </div>
        </footer>
    )
}

export default Footer;