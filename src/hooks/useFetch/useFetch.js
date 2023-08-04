import {useEffect, useState} from 'react';

const useFetch = (endpoint) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
            .then(response => response.json())
            .then (response => setData(response))
    }, [])

    return (
        data
    );
};

export {useFetch};