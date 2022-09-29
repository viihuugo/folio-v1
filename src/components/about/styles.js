import styled from "styled-components";

export const Wrapper = styled.div`
 height: 700px;
 position:relative;
 padding:0 8%;
 margin-top:60px;

 @media (max-width: 1250px) {
        height:850px;
    }

    @media (max-width: 640px) {
        height:950px;
    }   

    @media (max-width: 480px) {
        height:1100px;
    } 
`;

export const Page = styled.div`
  font-size:24px;
  font-weight:500;
  position:absolute;

  @media (max-width: 1080px) {
        position:relative;
    }
`;

export const Intro = styled.div`
  font-size:36px;
  text-align:left;
  padding-left:40%;
  font-weight:600;

  @media (max-width: 1080px) {
        padding:0;
        margin:50px 0;
    }
`;

export const Flex = styled.div`
  display:flex;
  margin:8%;
  font-family:'Roboto';

  @media (max-width: 1080px) {
        display:block;
    }
`;

export const Info = styled.div`
  font-size:24px;
  width:50%;
  margin:80px 0;

  @media (max-width: 1080px) {
        width:100%;
        margin:50px 0;
    }
`;

export const Bio = styled.div`
  font-size:24px;
  text-align:left;
  width:50%;
  padding:0 100px;

  @media (max-width: 1080px) {
        width:100%;
        padding:0;
    }
`;

