import React, { useState } from "react";
import styled from "styled-components";

const Dates = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 25px;
    font-family: 'Quicksand', sans-serif;
`;

function TodoDate () {
    const today = new Date();
    console.log(today.getFullYear());
    console.log(today.getMonth());
    console.log(today.getDate());
    const day = today.toLocaleString("en-US", { weekday: "long"});

    return (
        <Dates>
            <div> {today.getFullYear()} / {today.getMonth()+1} / {today.getDate()} </div>
            <div> {day} </div>
        </Dates>
    )
}


export default TodoDate; 