import React from 'react'
import { Container } from './styles'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:.1, duration:1}}} viewport={{once:true}}>
        <Container><p>CREATED FOR, DESIGNED BY, AND DEVELOPED BY</p><p> VICTOR ALVES IN 2022.</p></Container>
    </motion.div>
  )
}
