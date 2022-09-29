import React from 'react'
import { Wrapper , Heading , Subtittle , Page , Tittle , Text } from './styles'
import { motion } from 'framer-motion'

export default function Projects() {

  const stagger = {
    animate:{
      transition:{
        staggerChildren:.2,
        delayChildren:.5,
      },
    },
  };

  const letter = {
    initial:{
      y:100,
      opacity:0,      
    },
    animate:{
      y:0,
      opacity:1,
      transition:{duration:.5}
    },
  };



  return (
    <Wrapper id='projects'>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:.6}}} viewport={{once:true}}>
        <Heading>
            <Page>(002)</Page>
            <Subtittle>Creative Content</Subtittle>            
        </Heading>
      </motion.div>
      <motion.div variants={stagger} initial='initial' whileInView={'animate'} viewport={{once:true}} >
        <Tittle>
            <motion.span variants={letter}>P</motion.span>
            <motion.span variants={letter}>R</motion.span>
            <motion.span variants={letter}>O</motion.span>
            <motion.span variants={letter}>J</motion.span>
            <motion.span variants={letter}>E</motion.span>
            <motion.span variants={letter}>C</motion.span>
            <motion.span variants={letter}>T</motion.span>
            <motion.span variants={letter}>S</motion.span>
        </Tittle>
      </motion.div>
      <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0,transition:{duration:1}}} viewport={{once:true}}>
        <Text>"Under Construction"</Text>
      </motion.div>
    </Wrapper>
  )
}
