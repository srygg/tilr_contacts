export default function reducer(state = {firstOrder: true}, action) {
	
	let type = action.type;
	switch(type) {
		case 'change':
			state.firstOrder = !state.firstOrder;
			// console.log("in reducer", state.firstOrder)
			return state;
		default: 
			return state;
	}
}