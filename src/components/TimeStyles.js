import styled from "styled-components";

export const Welcome = styled.div`
position: absolute;
text-align: center;
top:50%;
left:50%;
padding:1rem;
-ms-transform:translate(-50%, 50%);
transform:translate(-50%, -50%);

`

export const TimeStamp = styled.p`
font-size: 4rem;
font-weight: 500;


@media (max-width:600px){
    font-size: 2.5rem;
}

`


export const Greeting = styled.p`

font-size: 2rem;
font-weight: 600;


@media (max-width:600px){
    font-size: 1.5rem;
}

`
