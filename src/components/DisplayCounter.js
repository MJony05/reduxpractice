import {useSelector} from "react-redux";

const DisplayCounter = ()=>{
  const count = useSelector((state)=>state.count)
  return (
    <div><h1>{count}</h1></div>
  )
}
export default DisplayCounter;