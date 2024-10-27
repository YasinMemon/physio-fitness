import React from 'react'

function MaskGroup() {
  return (
    <div className="sm:grid sm:grid-cols-4 flex sm:overflow-hidden overflow-x-scroll  gap-2 justify-center items-center mt-20 mb-10">
      <img className='hidden sm:block sm:w-[330px]' src="./spine.png" />
      <img className='sm:w-[330px]' src="./spine.png" />
      <img className='sm:w-[330px]' src="./spine.png" />
      <img className='sm:w-[330px]' src="./spine.png" />
    </div>
  )
}

export default MaskGroup
