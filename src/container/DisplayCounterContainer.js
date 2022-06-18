import {connect} from "react-redux";
import DisplayCounter from "../components/DisplayCounter";

const getMyState = (state) => {
  return {count:state.count};
}

export const DisplayCounterContainer = connect(getMyState)(DisplayCounter);