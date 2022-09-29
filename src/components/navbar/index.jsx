import React , { useState } from 'react'
import { Wrapper , Container , InnerContainer , Logo , Menu , NavButton , ExtendContainer , MenuExtend } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

export default function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false) 


    const Nav = {
        initial:{
          opacity:0,
          y:-50
        },
        animate:{
          opacity:1,
          y:-1,
          transition:{delay:1.2,duration:.5}
        },
      };

  return (
    
    <Wrapper>
    <motion.div variants={Nav} initial='initial' animate='animate'>
        <Container extendNavbar={extendNavbar}>
            <InnerContainer>
                <Logo><a href='#home'>VICTOR ALVES</a></Logo>
                <Menu>
                    <span><a href='#about'>about</a></span>
                    <span><a href='#projects'>projects</a></span>
                    <span><a href='#contact'>contact</a></span>
                </Menu> 
                <NavButton onClick={() => {
                    setExtendNavbar((curr) => !curr);
                  }}>
                    {extendNavbar ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}                
                </NavButton>            
            </InnerContainer> 
            {extendNavbar && 
                (<ExtendContainer>
                    <MenuExtend>
                        <p><a href='#about'>about</a></p>
                        <p><a href='#projects'>projects</a></p>
                        <p><a href='#contact'>contact</a></p>
                    </MenuExtend> 
                </ExtendContainer> 
            )}         
        </Container>
    </motion.div>
    </Wrapper>
    
    
  )
}
