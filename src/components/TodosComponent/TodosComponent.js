import React, {useEffect, useState} from 'react';
import {ContentServices} from "../../services/apiServices";
import {TodosContainer} from "./TodosContainer";


const TodosComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const todosData = await ContentServices.getTodos();
                setTodos(todosData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <div>
            <div>
                {todos.map(todo=><TodosContainer key={todo.id} todo={todo} />)}
            </div>
        </div>
    );
};

export {TodosComponent};