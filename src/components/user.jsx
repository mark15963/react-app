import '../main.css'
import styles from './userStyle.module.css'

const UserName = (props) => {
    return <div className={styles.uName}>Hello {props.name}!</div>
}

const UserStatus = () => {
    return <spam className={styles.uStatus}>Admin</spam>
}

export default UserName