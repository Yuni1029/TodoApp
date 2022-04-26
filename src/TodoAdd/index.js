import React, { useState } from "react";
import styled from "styled-components";

const Add = styled.div`
    margin-left: 20px;
    margin-top: 20px;

`;

function TodoAdd () {

    return (
        <Add>
            <input className="e-input" type="text" placeholder="Todo" />
            <button>Add</button>
        </Add>
        
    )
}


export default TodoAdd; 