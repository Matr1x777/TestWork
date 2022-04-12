import React from "react";
import styled from "styled-components";
import Question from "./Question/Question";

const TestBlock = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	
	margin-top:50px;
`
const SecondTest = styled.div`
	display:flex;
	flex-direction:row;
	align-items:center;
`
const Rate = styled.span`
	padding:5px;
	
	color: #057681;
	background-color: rgba(84, 196, 211, 0.45);
	font-size: 18px;
	font-weight:bold;
	border-radius:50px;
`
const Column = styled.div`
	display:flex;
	flex-direction:column;
	margin-left:20px;
`
const Span = styled.span`
	font-size:18px;
`
const SpanB = styled(Span)`
	font-weight:bold;
`
const Ul = styled.ul`
	margin-top:50px;
	
	list-style:none;
`

const Test = (props) => {
	return(
		<TestBlock>
			<SecondTest>
				<Rate>1.5</Rate>
				<Column>
					<SpanB>Proszę napisać poprawną formę przymiotnika😊.</SpanB>
					<Span>(Напишіть правильну форму прикметника)</Span>
				</Column>
			</SecondTest>
			<Ul>
				{props.test.map(t => {
					return(
						<Question test={t} setAttempt={props.setAttempt} />
					)
				})}
			</Ul>
		</TestBlock>
	)
}
export default Test;