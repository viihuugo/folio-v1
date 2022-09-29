import { motion } from 'framer-motion'
import React from 'react'
import { Wrapper , Text  } from './styles'



export default function Loader({setLoading}) {

    


  return (
    <>
        
            <Wrapper>   
                <motion.div animate={{opacity:0}} transition={{delay:.8,duration:1.2}} onAnimationComplete={() => setLoading(false)}>
                    <Text>“Loading Screen”</Text>  
                </motion.div>           
            </Wrapper>
        
    </>
  )
}
