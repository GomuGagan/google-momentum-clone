import styled from "styled-components";

export const QuoteContainer = styled.div`
position:absolute;
text-align:center;
left: 50%;
bottom: 0;
transform: translate(-50%);
margin-bottom:15px;



@media screen and (max-with: 600px){
    width: 350px;
    margin-left: -175px;
}

`

export const Text = styled.p`

font-size:1.2rem;


`