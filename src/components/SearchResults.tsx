import React from 'react'
import Chat from './Chat'
import Workspace from './Workspace' 
import { motion } from 'framer-motion'
const SearchResults = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='w-full h-full flex gap-4 max-h-[calc(100dvh-2rem)]'>
        <Chat />
        <Workspace />
    </motion.div>
  )
}

export default SearchResults