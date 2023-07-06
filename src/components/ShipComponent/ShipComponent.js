import styles from './Ship.module.css'

const ShipComponent = props => {
    const { ship } = props;

    return (
        <div className={styles.container}>
            <h2>mission name: {ship.mission_name}</h2>
            <h2>launch_year: {ship.launch_year}</h2>
            <img src={ship.links.mission_patch_small} alt="mission patch" />
        </div>
    );
};

export default ShipComponent;

