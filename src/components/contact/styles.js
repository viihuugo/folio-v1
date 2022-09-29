import styled from "styled-components";

export const Wrapper = styled.div`    
    height:650px;
    padding:0 8%;

    @media (max-width: 1160px) {
        height:500px;
    }

    @media (max-width: 680px) {
        height:400px;
    }

    @media (max-width: 480px) {
        height:350px;
    } 
`;

export const Heading = styled.div`
    display: flex;
`;

export const Page = styled.div`
    font-size:24px;
    font-weight:500;
    width:42%;  
`;

export const Subtittle = styled.div`
    font-size:24px;
    font-weight:500;
`;

export const Infos = styled.div`
    text-align:center;
    margin-top:20%;

    @media (max-width: 860px) {
        text-align:left;
        margin-top:35%;
    }
`;

export const Email = styled.div`
    font-size:60px;
    text-decoration: underline;
    font-weight:600;

    @media (max-width: 1330px) {
        font-size:48px;
    }

    @media (max-width: 1080px) {
        font-size:36px;
    }

    @media (max-width: 820px) {
        font-size: 28px;
    }

    @media (max-width: 640px) {
        font-size: 20px;
        font-weight:900;
    }

    @media (max-width: 480px) {
        font-size:18px;
        font-weight:900;
    } 
`;

export const Socials = styled.div`  
    font-size:32px;
    font-weight:600;   
    cursor:pointer;                 
    margin:20px 0;  

    span{
        padding:30px;
        a{
            text-decoration:none;
            color:inherit;
        }
    }

    @media (max-width: 860px) {
        font-size:28px;
        span{
            padding-right:30px;
        }
    }

    @media (max-width: 680px) {
        font-size: 20px;
    }
`;

