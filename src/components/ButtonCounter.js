
const ButtonCounter = (props)=> {
  return (
    <>
      <button onClick={()=>props.decrementAction()}>DECREMENT</button>
      <button onClick={()=>props.incrementAction()}>INCREMENT</button>
      <button onClick={()=>props.resetAction()}>RESET</button>

    </>
  )
}
export default ButtonCounter;