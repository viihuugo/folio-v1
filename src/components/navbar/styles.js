import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    position:fixed;
    z-index:12;
`;

export const Container = styled.div`
    height: ${(props) => (props.extendNavbar ? "250px" : "50px")};
    padding:2% 8% 0 8%;    
    font-weight:bold;      
    width:84%;  
    background:#E9E9E9;
    display:flex;
    flex-direction:column;
    

    @media (min-width: 820px) {
        height: 50px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content:space-between;
    width:100%;
    border-bottom:3px solid black;

    @media (max-width: 820px) {
        border-bottom:none;
    }
`;

export const Logo = styled.div`
    font-size: 24px;
    cursor:pointer;
    padding-bottom:10px;  

    a{
        text-decoration:none;
        color:#000; 
    }  
`;

export const Menu = styled.div`
    font-size: 20px; 

    span {
        padding-left:50px; 
        cursor:pointer; 
    }
    a{
        text-decoration:none;
        color:#000; 
    }

    @media (max-width: 820px) {
        display: none;
    }
`;

export const NavButton = styled.div`
    font-size:30px;
    cursor:pointer;

    @media (min-width: 820px) {
        display: none;
    }
`;

export const ExtendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:3px solid black;
    
    @media (min-width: 820px) {
        display: none;
    }
`;

export const MenuExtend = styled.div`
    font-size: 20px; 
    text-align:center;

    p {
        padding:20px; 
        cursor:pointer; 
    }
    a{
        text-decoration:none;
        color:#000; 
    }

    
`;

