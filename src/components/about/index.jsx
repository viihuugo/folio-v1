import React from 'react'
import { Wrapper , Page , Intro , Flex , Info , Bio } from './styles'
import { motion } from "framer-motion"


export default function About() {
  return (
    <Wrapper id='about'>
      <Page><motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:.6,duration:1}}} viewport={{once:true}}>(001)</motion.div></Page>
      <Intro><motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0,transition:{duration:.8}}} viewport={{once:true}}>I CREATE DIGITAL PRODUCTS USING CODING AND INTERACTIVE DESIGN TO REALIZE IDEIAS</motion.div></Intro>
      <Flex>
        <Info><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.7,duration:1}} viewport={{once:true}}>The combination of<br/> code & design </motion.div></Info>
        <Bio><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.5,duration:1}} viewport={{once:true}}>Self-taught student passioned about web technologies and design, focused on Front-End currently learning React and trying to explore new creative ways to bring user interfaces and creating interaction digital experiences.<br/><br/>  When I'm not coding I'm playing video games or having some activity outside when is possible "Canada feelings"</motion.div></Bio>
      </Flex>
    </Wrapper>
    
  )
}
