import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "..//TodoDate";
import TodoLeft from "..//TodoLeft";
import TodoAdd from "..//TodoAdd";
import TodoItem from "..//TodoItem";
import TodoList from "..//TodoList";
import { getValue } from "@testing-library/user-event/dist/utils";


const Container = styled.div`
    background-color: orange;
    height: 100vh;
    display: flex;
    justify-content: center;
`; 

const Box = styled.div`
    background-color: white;
    border: 1px solid rgb(255,250,250);
    height: 90%;
    width: 30%;
    margin-top: 20px;
    border-radius: 30px;
    font-family: cursive;
`

//.map -> iterate the array
//.filter -> 

function MainPage () {

    const [todos, setTodos] = useState([

    ]);

    const whatToDo = (todo) => {
        setTodos([...todos,todo])
    };
    console.log(todos);

    // const [age, setAge] = useState(6);

    const deleteTodo = (id) => {
        console.log(id)
        
        const newTodos = todos.filter((todo) => todo.id !=id);
            setTodos(newTodos);
                // setTodos([])
    };

    const changeIsDone = (id) => {
        const currentTodo = todos[id-1];
        if (todos === true) {
            return 
        } else {
            return
        }
    };
    setTodos([...todos]);



return (
    <Container> 
        <Box> 
            <TodoDate /> 
            <TodoLeft todos={todos} />
            <TodoAdd todos={todos} updateTodo={whatToDo} />
            {/* <TodoItem todos={todos} removeTodo={deleteTodo} /> */}
            <TodoList todos={todos} removeTodo={deleteTodo} /> 
        </Box>
    </Container>

)
}

export default MainPage; 

