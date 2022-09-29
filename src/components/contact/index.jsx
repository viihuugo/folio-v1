import React from 'react'
import { Wrapper , Heading , Page , Subtittle , Infos , Email , Socials  } from './styles'
import { motion } from "framer-motion"

export default function Contact() {

  const stagger = {
    animate:{
      transition:{
        staggerChildren:.2,
        delayChildren:.5,
      },
    },
  };
  
  const FadeIn = {
    initial:{
      opacity:0
    },
    animate:{
      opacity:1,
      transition:{duration:.5}
    },
  };



  return (
    <Wrapper id='contact'>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:.6}}} viewport={{once:true}}>
          <Heading>
              <Page>(003)</Page>
              <Subtittle>Get in touch</Subtittle>
          </Heading>
        </motion.div>
        <Infos>
            <motion.div variants={stagger} initial='initial' whileInView={'animate'} viewport={{once:true}}>
              <motion.div variants={FadeIn}>
                <Email>HELLO@VICTORHUGOALVES.COM</Email>
              </motion.div>
              <motion.div variants={FadeIn}>
                <Socials>
                  <span><a href='https://www.linkedin.com/in/victorhugoalves/'>LINKEDIN</a></span>
                  <span><a href='https://github.com/viihuugo'>GITHUB</a></span>                  
                </Socials>
              </motion.div>
            </motion.div>
        </Infos>
        
        



    </Wrapper>
  )
}
