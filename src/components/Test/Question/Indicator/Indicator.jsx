import React from "react";
import styled from "styled-components";


const IndicatorsBlock = styled.div`
	display: flex;
	flex-direction: column-reverse;
	margin: 0 5px;
`
const Circle = styled.div`
	width: 5px;
	height: 5px;

	margin-bottom: 2px;

	border-radius: 50px;
`
const True = styled(Circle)`
	background-color: rgba(173, 166, 166, 0.42);
`
const NotTrue = styled(Circle)`
	background-color: #ff003f;
`

const Indicator = (props) => {
	if (props.attempts) {
		return (
			<IndicatorsBlock>
				{props.attempts.map(a => {
					if (a === true) {
						return (<True/>)
					} else if (a === false) {
						return (<NotTrue/>)
					}
				})}
			</IndicatorsBlock>
		)
	}
}

export default Indicator;