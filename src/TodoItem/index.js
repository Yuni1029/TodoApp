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



function TodoItem () {

    return (
        <Container>
            <Check>
                <input type="checkbox" />
                Add
            </Check>
        </Container>
    )
}


export default TodoItem;