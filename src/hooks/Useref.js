// useref hook is used to make
// a mutable variable which will not re-render the components
// use to access dom directly



//---------------notes
// useref return the object which is current


import React,{useState,useRef,useEffect} from 'react'

const Useref = () => {

    const [mydata,setmydata] = useState("");

    const  count  = useRef(0);


    useEffect(() => {
        count.current = count.current + 1;
    });


  return (
    <div>
      <input type='text' value={mydata} onChange={(e) => setmydata(e.target.value)} />
      <p> the number of times render :{count.current}</p>
    </div>
  )
}

export default Useref
