import React, {useRef , useState} from 'react'

const Home = () => {


    const [ counter , setCounter] = useState(0)


    const intervalRef = useRef(0)


    const handleStartButtton = ()=>{
        const intervalID = setInterval(()=>{
            setCounter(prevCounter=>prevCounter +1)
            console.log(intervalRef)
        }, 2000)
      
        intervalRef.current = intervalID
    }

    const StopButton = ()=>{
        const intervalID  = intervalRef.current
        clearInterval(intervalID);
    }


  return (
    <div className='mt-10 flex flex-col gap-10 justify-center items-center h-full '>

<h1 className="text-3xl font-bold underline">
     count :{counter}
    </h1>
    <div className="flex gap-4">
    <button className='bg-green-500 py-2 px-3 text-lg text-white rounded-lg' onClick={handleStartButtton}>Start</button>
       
       <button className='bg-red-500 py-2 px-3 text-lg text-white rounded-lg' onClick={StopButton}>Stop</button>
    </div>
        
    </div>
  )
}

export default Home