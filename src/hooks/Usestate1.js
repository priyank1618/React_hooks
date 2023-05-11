import React,{useState} from 'react'

const Usestate1 = () => {

    const[inputvalue ,setinputvalue] = useState("priyank");


    let onchange =(e) => {
        const newvalue = e.target.value;
        setinputvalue(newvalue);
    }


  return (
    <div>
      <input placeholder='enter something...........'  onChange={onchange} />
      {inputvalue}
       




    </div>
  )
}

export default Usestate1
