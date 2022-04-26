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

function TodoLeft () {

    return (
        <Todos> 
        <div> 4 todos left </div>
        <ColoredLine color="blue" />
        </Todos> 
    )
}



export default TodoLeft; 