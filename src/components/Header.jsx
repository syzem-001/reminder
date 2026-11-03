import React from 'react'
import { motion } from "framer-motion"

export const Header = () => {
  const title = 'Today birthdays!!'.split('')

  return (
    <div className=" text-white text-center p-4">
       <h4>
       {title.map((letter, index) => (
        <motion.span key={index} style={{ marginRight: "5px",fontSize:"2rem",fontWeight:'800' }}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:'spring',delay:index/10 }}
        >
          {letter}
        </motion.span>
      ))}
       </h4>
     </div>  
  )
}
