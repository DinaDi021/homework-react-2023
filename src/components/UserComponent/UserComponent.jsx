import styles from "./UserComponent.module.scss";

const UserComponent = (props) => {
    const {id,name,status,species,gender, imageSrc} = props
    return (
        <div className={styles.container}>
            <div className={styles.container__data}>
                <h2 className={styles.id}>{id}</h2>
                <h2>{name},</h2>
                <h2>{status} - {species}</h2>
                <h6>gender: {gender}</h6>
            </div>
            <div className={styles.container__img}>
                <img src={imageSrc} alt="User"/>
            </div>
        </div>
    )
}

export default UserComponent;