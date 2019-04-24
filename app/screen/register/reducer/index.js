import actionType from '../../../constant/actionType'

const initialState = {
    data: null,
    isLoading: false,
    isError: false
}


export default (state = initialState, action) =>{
    switch(action.type){
        case `${actionType.register}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case `${actionType.register}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }
        case `${actionType.register}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}