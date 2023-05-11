import React,{useState} from 'react'

const Usestate1 = () => {

    const[inputvalue ,setinputvalue] = useState("priyank");


  return (
    <div>
      <input placeholder='enter something...........' />
      {inputvalue}

      
    </div>
  )
}

export default Usestate1
