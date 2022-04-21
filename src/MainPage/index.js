import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "..//TodoDate";


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
`


function MainPage () {

return (
    <Container> 
        <Box> 
            <TodoDate /> 
        </Box>
    </Container>

)
}

export default MainPage; 

