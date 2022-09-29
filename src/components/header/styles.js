import styled from "styled-components";

export const Wrapper = styled.div`
    height: 900px;
    padding:10% 8% 0 8%;
    font-size: 128px;
    line-height:110px; 
    position:relative;

    @media (max-width: 680px) {
        font-size: 90px;
        line-height:80px;
        height:700px;
        padding-top:15%;
    }

    @media (max-width: 480px) {
        font-size: 64px;
        line-height:70px;
        height:500px;
    } 
`;


export const Intro = styled.div`
    font-weight: 600;  
    text-align: left;     
`;

export const Name = styled.div`
    font-weight: 600;  
    text-align: right; 
    margin-top:200px;

    @media (max-width: 480px) {
        margin-top:100px;
    } 
`;