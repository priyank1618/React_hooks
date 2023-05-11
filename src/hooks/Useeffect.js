//--------------notes
// useeffect hook we can tell react what your 
//compomnent will do after render

//it also use to data fetching and call api

// hooks are always worked with functional component
// hooks are always called on the top of the function

//---------what is render
//we used reactdom.render hence whenever we change 
// anything in app it will render it again


import React,{useState,useEffect} from 'react'

const Useeffect = () => {
const [num,setnum] = useState(0)
const [nums,setnums] = useState(0)




//-----------here we use use effect
//--------- when usestae render the component
//-------- this useeffect will definitely works
//----------if you refresh it also called
//----------[]  after using this first time refresh thase tyare j avse alert
useEffect(() => {
    alert("i am clicked")
},[num])


// array ma je nam lakhyu hase 
// ana par click karo to j useeffect vadu call thase nai to nahi thay


  return (

    <>
    
      <button onClick={() => {
        setnum(num+1)
      }}>click me {num}</button>
      <button onClick={() => {
        setnums(nums+1)
      }}>click me {nums}</button>
 </>
  )
}

export default Useeffect



