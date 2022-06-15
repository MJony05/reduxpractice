import {DECREMENT, INCREMENT, RESET} from "../actions/counterAction";

export const initialState = {count:10}

export const reducer = (state=initialState,action)=>{
  if(action.type===INCREMENT) {
    return { count:state.count+1}
  }else if(action.type===DECREMENT) {
    return { count:state.count-1}
  }else if(action.type===RESET) {
    return {count: 0}
  }
  return state
}