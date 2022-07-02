import types from '../types'



  const initialState = {
    status: false,
    text: ""
  }



  
  export const messageReducer = (state= initialState, action) => {
   switch (action.type){
       case types.MASSAGE_TRUE:
    return {...state, status: true, text: action.payload.text, button: action.payload.button}
       case types.MASSAGE_FALSE:
    return {...state, status: false}

   default:
    return state
   }
  }
  