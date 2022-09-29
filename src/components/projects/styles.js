import styled from "styled-components";


export const Wrapper = styled.div`
    height: 800px;
    position:relative;
    padding:0 8%;   

    @media (max-width: 840px) {
        height: 650px;
    }
    
    @media (max-width: 680px) {
        height: 500px;
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

export const Tittle = styled.div`
    font-size: 128px;
    text-align: left;
    padding-top: 80px;
    font-weight: 600;

    @media (max-width: 1080px) {
        font-size: 96px;
    }

    @media (max-width: 680px) {
        font-size: 64px;
    }
`;

export const Text = styled.div`
    font-size:48px;
    text-align:center;
    padding:15% 0;
    font-weight:600;

    @media (max-width: 1080px) {
        padding:25% 0;
    }

    @media (max-width: 680px) {
        font-size: 40px;
    }
`;