import React, { useState } from "react";
import styled from "styled-components";

const Container= styled.div`
`

const Click = styled.button`
`

const Check=styled.div`
display: block;
position: relative;
padding-left: 30px;
padding-top: 20px;
margin-bottom: 12px;
`
const PutText = styled.div`
    font-size: 15px; 
`

const Bin = styled.img`
    width: 20px;
    height: 20px;
`


function TodoItem ({todo, removeTodo}) {

   
    const newTodoset = () => {
        removeTodo()
        console.log(todo);
    };



    return (
        <Container>
            <Check>
                <Click isDone={todo.isDone} />
                <PutText> {todo.text} </PutText>
                <Bin
                    onClick={newTodoset} 
                    src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png">
                </Bin>
                
            </Check>
        </Container>
    )
}


export default TodoItem;
