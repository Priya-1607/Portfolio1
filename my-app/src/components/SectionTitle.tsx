import React from 'react'
interface SectionTitleProps {
    title: string;
  }
function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div>
 <div className='flex gap-10 items-center'>
      <h1 className='text-3xl text-white'>{title}</h1>
      <div className='w-40 h-[1px] bg-tertiary'>

      </div>
    </div>

    </div>
  )
}

export default SectionTitle