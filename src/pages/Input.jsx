import React, {useEffect, useRef} from 'react'


const Input = () => {

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])


  return (
    <div className='mt-10'>
      <input type="text"
        className='bg-gray-200 px-5 py-2 text-lg m-5'
        placeholder='focus'
        ref={inputRef}
      />
    </div>
  )
}

export default Input