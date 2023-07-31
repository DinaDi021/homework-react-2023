import React from "react";
import axios from "axios";
class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        axios.get('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    render() {
        const { cars } = this.state;

        return (
            <div>
                {cars.map(car => (
                    <div key={car.id}>
                        <h2>ID: {car.id}</h2>
                        <h2>Brand: {car.brand}</h2>
                        <h3>{car.price}</h3>
                        <p>{car.year}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Cars;