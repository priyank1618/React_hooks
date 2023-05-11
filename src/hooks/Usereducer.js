import React, { useState } from 'react'

const Usereducer = () => {

    const[count ,setcount] = useState(0);
    const[showtext,setShowtext] = useState(true);
  return (
    <div>
      <h1> {count}</h1>

    <button onClick={()=> {
        setcount(count +1);
        setShowtext(!showtext);
    }}> click here</button>


    {showtext && <p>this is the text</p>}
    </div>
  )
}

export default Usereducer



// ---------------------when to use

// alternative of the usestate hook  and change the state of the web page

//this example is using usereducer is in suereducer1 file
