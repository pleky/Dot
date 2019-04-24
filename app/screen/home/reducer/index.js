import actionType from '../../../constant/actionType'

const initialState = {
    data: null,
    isLoading: false,
    isError: false
}


export default (state = initialState, action) => {
    switch(action.type){
        case `${actionType.home}_PENDING`:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case `${actionType.home}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data
            }
        case `${actionType.home}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}