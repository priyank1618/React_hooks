
//this is usereducer hook same as usestate hook 
//use for multiple state management at once


import React,{useReducer} from 'react'



//-------function reducer
const reducer = (state,action) => {
 
switch(action.type){
    case "increment" :
        return{count : state.count +1,showtext : state.showtext}
    case "toggleshowtext" :
      return{count :state.count,showtext: !state.showtext}
      default:
        return state;
}

}

const Usereducer1 = () => {
 const [state,dispatch] = useReducer(reducer,{count:0, showtext:true});
console.log(state)
console.log(dispatch)


 //here reducer is the function 
 // and after it the defalut value of the state


 return (
    <div>
    <h1>{state.count}</h1>
    <button  onClick={() => {
      dispatch({type : "increment"});
      dispatch({type : "toggleshowtext"})
    }}>click here</button>

    {state.showtext && <p>this is text</p>}
    </div>
  )
}

export default Usereducer1
