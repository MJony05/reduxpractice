import {useDispatch} from "react-redux";
import {incrementAction,decrementAction,resetAction} from "./../redux/actions/counterAction"
const ButtonCounter = ()=> {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={()=>dispatch(decrementAction())}>DECREMENT</button>
      <button onClick={()=>dispatch(incrementAction())}>INCREMENT</button>
      <button onClick={()=>dispatch(resetAction())}>RESET</button>

    </>
  )
}
export default ButtonCounter;