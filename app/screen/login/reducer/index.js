import actionType from '../../../constant/actionType'

const initialState = {
    data: null,
    isLoading: false,
    isError: false
}


function loginReducer(state = initialState, action){
    switch(action.type){
        case `${actionType.login}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case `${actionType.login}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }
        case `${actionType.login}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default loginReducer