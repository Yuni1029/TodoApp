import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";

const Container = styled.div`
    display: flex;
    flex-direction: column; 
`;

function TodoList ({todos, removeTodo, currentTodo}) {


    return (
        <>
        <Container> 
            {todos.map((todo) => (
                <TodoItem todo={todo} removeTodo={removeTodo} currentTodo={currentTodo}></TodoItem>
            )
            )}
        
        
        </Container>
        </>
    )


}


export default TodoList; 