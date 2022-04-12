import React, {createRef, useState} from "react";
import styled from "styled-components";
import Indicator from "./Indicator/Indicator";

const Li = styled.li`
	display: flex;
	flex-direction: row;
	margin-bottom: 15px;
`
const Input = styled.input`
	width: 150px;
	border-radius: 20px;
	text-transform: lowercase;
	border: 2px solid ${(props) => props.border};
`
const B = styled.b`
	color: #d29702;
	font-weight: normal;
`


const Question = (props) => {
	const inputRef = createRef();
	const [border,setBorder] = useState("black");
	const [reLoad,setReLoad] = useState("");
	const [inpDisabled,setInpDisabled] = useState(false);


	let setAttempt = () => {
		if (props.test.attempts[0] === true) {
			props.setAttempt(props.test.number,0);
		} else if (props.test.attempts[1] === true) {
			props.setAttempt(props.test.number,1);
		} else if (props.test.attempts[2] === true) {
			props.setAttempt(props.test.number,2);
			alert("Wszystkie próby zostały wyczerpane");
			setInpDisabled(true);
			setBorder("#d30826");
		}
	}
	let audit = () => {
		let inputValue = inputRef.current.value;
		if(inputValue === ""){

		}else if(inputValue === props.test.ansfer){
			setBorder("#08d308");
			setInpDisabled(true);
		}else{
			setAttempt();
			setReLoad(Math.random());

		}
	}

	return (

		<Li>💛&nbsp;
			{props.test.question[0]} &nbsp;
			<B>({props.test.question[1]})</B>&nbsp;
			<Input type="text" disabled={inpDisabled} border={border} ref={inputRef} onBlur={audit}/>
			<Indicator attempts={props.test.attempts}/>
			{props.test.question[2]}.
		</Li>
	)

}
export default Question;