
//access dom element directly

import React,{useRef,useState} from 'react'

const Useref1 = () => {

  //usestate hook
  const [mydata,setmydata] = useState("")


  //useref hook
  const inputelement = useRef("");


  const changestyle = () => {
    //console.log(inputelement.current);

    inputelement.current.style.backgroundColor = "#82E0AA";
    inputelement.current.blur();
  };
  return (
    <div>
      

      <input ref={inputelement} value={mydata} onChange={(e) => setmydata(e.target.value)} />
      <button onClick={changestyle}> submit</button>
    </div>
  )
}

export default Useref1
