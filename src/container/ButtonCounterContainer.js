import {connect} from "react-redux";
import ButtonCounter from "../components/ButtonCounter";
import {decrementAction, incrementAction, resetAction} from "../redux/actions/counterAction";


export const ButtonCounterContainer = connect(null,
  {incrementAction,decrementAction,resetAction})(ButtonCounter)