const ATTEMPT_CHANGE = "ADD-POST";

let initialState = {
	test:[
		{
			question:["Anka jest","wysoka","niż Tom"],
			ansfer:"wyższa",
			attempts:[true,true,true],
			number:0
		},
		{
			question:["Ten taniec jest","piękny","niż poprzedni"],
			ansfer:"piękniejszy",
			attempts:[true,true,true],
			number:1
		},
		{
			question:["Mój szalik jest","drogi","od twojego"],
			ansfer:"droższy",
			attempts:[true,true,true],
			number:2
		},
		{
			question:["Zielony plecak jest","mały","od żółtego"],
			ansfer:"mniejszy",
			attempts:[true,true,true],
			number:3
		},
		{
			question:["Dom mojej przyjaciółki jest","duży","od mojego"],
			ansfer:"większy",
			attempts:[true,true,true],
			number:4
		},
		{
			question:["Mój kuzyn jest","niski"," niż moja kuzynka"],
			ansfer:"niższy",
			attempts:[true,true,true],
			number:5
		},
		{
			question:["Moja sukienka jest","ładna","niż twoja"],
			ansfer:"ładniejsza",
			attempts:[true,true,true],
			number:6
		},
	],

}


const  TestReducer = (state = initialState,action) => {
	switch (action.type) {
		case ATTEMPT_CHANGE:
			return {
				...state,
				attempts: { ...state.test[action.testNumber].attempts[action.attNumber] = false}

			};
		default:
			return state;
	}
}
export let setAttempt = (testNumber,attNumber) => {
	return {
		type:ATTEMPT_CHANGE,
		testNumber,
		attNumber
	}
};

export default TestReducer;