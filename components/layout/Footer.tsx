import React from 'react'

const Footer: React.FC = () => {
  return (
    <section className='text-center p-8 text-light-muted border border-t-border-light'>
        <p className='text-sm md:text-base font-semibold'>
          © 2026 Moodlit. <br className='flex md:hidden' /> Find your next read based on how you feel.
        </p>
    </section>
  )
}

export default Footer