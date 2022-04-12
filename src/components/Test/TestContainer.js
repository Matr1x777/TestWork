import React from "react";
import Test from "./Test";
import {connect} from "react-redux";
import {setAttempt} from "../redux/testReducer";


const TestContainer = (props) => {
	return(
		<Test test={props.test}

			  setAttempt={props.setAttempt}
		/>
	)
}


let mapStateToProps=(state)=>{
	return{
		test:state.Test.test,

	}
}
export default connect(mapStateToProps,{setAttempt})(TestContainer);