const Reducer = (state, action) => {
    switch(action.type){
        case "RESET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "UPDATE_DATA":
            return {
                ...state,
                data : action.payload
            }
        case "UPDATE_COUNTRY":
            return {
                ...state,
                country : action.payload
            }
        case "UPDATE_MAP":
            return {
                ...state,
                map : action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default Reducer;