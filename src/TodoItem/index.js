import React, { useState } from "react";
import styled from "styled-components";

const Container= styled.div`
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


function TodoItem ({todos, removeTodo}) {

    const newText = document.getElementById("Textbox");

    const newTodoset = () => {
        removeTodo()
        console.log(todos);
    };



    return (
        <Container>
            <Check>
                <input type="checkbox" />
                <PutText id="Textbox"> {todos[0].text} 
                    <Bin
                        onClick={newTodoset} 
                        src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png">
                    </Bin>
                </PutText>
                
            </Check>
        </Container>
    )
}


export default TodoItem;
