import React, { useState } from "react";
import styled from "styled-components";

const Date = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 25px;
    font-family: 'Quicksand', sans-serif;
`;

function TodoDate () {

    return (
        <Date>
            <div> 2022 / 04 / 26 </div> 
            <div> 화요일 </div>
        </Date>
    )
}


export default TodoDate; 