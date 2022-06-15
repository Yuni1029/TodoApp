import React, { useState } from "react";
import styled from "styled-components";

const Add = styled.div`
    margin-left: 20px;
    margin-top: 20px;

`;

function TodoAdd ({todos, updateTodo}) { //updateTodo should be declared in mainpage in order to envoke it.
    
    const [todo, setTodo] = useState ({
        id: null,
        text: "",
        isDone: true,
    });

    const whatToDo = (e) => {
        const {name, value} = e.target;
        setTodo ({
            // ...todo, //... ←copies entire list
            // [name]:value,
            id:todos.length +1,
            text: value,
            isDone: false, 
            //avoid reputation of repeating function using the same code
        });
        
    };

    const onClickChange = () => {
        updateTodo(todo) //used as a function
}

console.log(todo)

    return (
        <Add>
            {/* <input className="e-input" type="text" placeholder="Todo" /> */}
            <input value={todo.text} 
                    type="text" 
                    name="text"
                    onChange={whatToDo}>
                        </input>
            <button onClick={onClickChange}>Add</button>
        </Add>
        
    )
}


export default TodoAdd; 

/* SCHOOL
    todo = []
    updateTodo = addTodo (x)
    addTodo(todo) -> setTodo ([...,])

    -------------------------------

    student(information, updateinformation)
    todo = ""
    onClickChange = updateTodo (todo)
*/ 