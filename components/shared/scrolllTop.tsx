import { ArrowUp } from 'lucide-react'
import React from 'react'

type scrollToTop ={
    scrollToTop: () => void
}

const ScrolllTop: React.FC<{scrollTop: scrollToTop}> = ({scrollTop}) => {
  return (
    <div className='fixed right-5 bottom-5 w-8 h-8 md:w-12 md:h-12 border-0 rounded-lg flex justify-center items-center bg-plum cursor-pointer'>
        <ArrowUp className='w-5 h-5 text-white' />
    </div>
  )
}

export default ScrolllTop