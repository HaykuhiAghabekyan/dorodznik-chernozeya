import data from '../../data';



export default function stepReducer(state = data,{type,payload}) {
    switch(type){
        case 'ADD_STEP':
            return{...state,currentStep:0};
            case 'CHANGE_STEP':
                return{...state,currentStep:state.currentStep+payload};
    default:return state
    }
}