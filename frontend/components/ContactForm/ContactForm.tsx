import styles from './ContactForm.module.css';
import { IoIosSend } from 'react-icons/io';

const ContactForm = () => {
    return(
        <form className={styles.form}>
            <textarea placeholder="Write your message here" />
            <input placeholder='Email Address'/>
            <input placeholder='Your name here'/>
            <button>Send {<IoIosSend />}</button>
        </form>
    )
}

export default ContactForm;