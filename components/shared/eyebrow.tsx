import React from 'react'

const Eyebrow: React.FC<{text: string}> = ({text}) => {
  return (
    <div>
        <div className="flex items-center gap-3 mb-4 md:mb-8 tracking-[0.2em] uppercase font-semibold font-raleway text-[12px] text-coral-light">
            <div className="w-6 h-[0.8px] shrink-0 block bg-coral-light"  />
            {text}
        </div>
    </div>
  )
}

export default Eyebrow