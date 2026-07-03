import { X } from 'lucide-react'
import React from 'react'

const LangModal: React.FC = () => {
  return (
    <div className='w-full h-screen bg-black/50 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center z-30'>
        <div className='w-80 h-40 bg-white rounded-lg shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
            <div className="w-full flex items-center justify-center">
                <p className='text-center text-lg font-semibold'>Language</p>
                <X size={16} className="flex items-right" />
            </div>
        </div>
    </div>
  )
}

export default LangModal