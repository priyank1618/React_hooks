import React,{useState} from 'react'


const Usestate = () => {

  const[counter,setcounter] = useState(0);

  const increment = () => {
    setcounter(counter + 1)
    console.log(counter);
  };
  return (
    <div className='usestate'>
       {counter}
       <button  onClick={increment}>increment</button>
    </div>
  )
}

export default Usestate


// usestate hook used to change elemnets on the screen or change the state

