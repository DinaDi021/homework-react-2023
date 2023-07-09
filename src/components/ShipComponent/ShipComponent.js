import styles from './Ship.module.css'

const ShipComponent = ({ship}) => {
    const { mission_name, launch_year} = ship;

    return (
        <div className={styles.container}>
            <h2>mission name: {mission_name}</h2>
            <h2>launch_year: {launch_year}</h2>
            <img src={ship.links.mission_patch_small} alt="mission patch" />
        </div>
    );
};

export default ShipComponent;

