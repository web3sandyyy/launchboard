import React from 'react'
import Chat from './chats/Chat'
import Workspace from './workspace/Workspace' 
import { motion } from 'framer-motion'
const SearchResults = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='w-full h-full flex gap-2 max-h-[100dvh] bg-blackThree'>
        <Chat />
        <Workspace />
    </motion.div>
  )
}

export default SearchResults