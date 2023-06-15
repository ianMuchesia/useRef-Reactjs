import React, {useRef , useState} from 'react'

const Home = () => {


    const [ counter , setCounter] = useState(0)


let Ref = useRef(0)

const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

    const handleStartButtton = ()=>{
        setStartTime(Date.now());
        setNow(Date.now());
    
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          setNow(Date.now());
        }, 10);
       
    }

    const StopButton = ()=>{
        clearInterval(intervalRef.current);
    }


    let secondsPassed = 0;
    if (startTime != null && now != null) {
      secondsPassed = (now - startTime) / 1000;
    }
    
  return (
    <div className='mt-10 flex flex-col gap-10 justify-center items-center h-full '>

<h1 className="text-3xl font-bold underline">
     count :{secondsPassed.toFixed(2)}
    </h1>
    <div className="flex gap-4">
    <button className='bg-green-500 py-2 px-3 text-lg text-white rounded-lg' onClick={handleStartButtton}>Start</button>
       
       <button className='bg-red-500 py-2 px-3 text-lg text-white rounded-lg' onClick={StopButton}>Stop</button>
    </div>
        
    </div>
  )
}

export default Home