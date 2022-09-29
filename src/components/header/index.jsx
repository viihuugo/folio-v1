import React from 'react'
import { Wrapper , Intro , Name } from './styles'
import { motion } from "framer-motion";

export default function Header() {

  const FadeIn = {
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
      transition:{duration:.5}
    },
  };

  const stagger = {
    animate:{
      transition:{
        staggerChildren:.2,
        delayChildren:.2,
      },
    },
  };


  return (
    <Wrapper id='home'>
      <motion.div variants={stagger} initial='initial' animate='animate'>
        <Intro>
            <motion.p variants={FadeIn}>CODER</motion.p>
            <motion.p variants={FadeIn}>DESIGN</motion.p>
            <motion.p variants={FadeIn}>ADDICT</motion.p>
        </Intro>
        <Name>
            <motion.p variants={FadeIn}>VICTOR</motion.p>
            <motion.p variants={FadeIn}>ALVES</motion.p>
        </Name>
      </motion.div>

    </Wrapper>
  )
}
