const Car = ({car, onUpdate, onDelete}) => {
    const {id, brand, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => onUpdate(id)}>update</button>
            <button onClick={() => onDelete(id)}>delete</button>
        </div>
    );
};

export {Car};