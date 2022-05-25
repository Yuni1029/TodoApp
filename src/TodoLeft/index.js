import React, { useState } from "react";
import styled from "styled-components";

const Todos = styled.div`
    margin-left: 10px;
    margin-top: 20px;
    color: blue;
`;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function TodoLeft ({todos}) {
//todos => []

    return (
        <Todos> 
        <div> {todos.length} todos left </div>
        <ColoredLine color="blue" />
        </Todos> 
    )
}



export default TodoLeft; 