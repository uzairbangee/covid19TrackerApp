const Reducer = (state, action) => {
    switch(action.type){
        case "RESET_LOADING":
            return {
                ...state,
                loading: true,
                error: ""
            }
        case "UPDATE_DATA":
            return {
                ...state,
                data : action.payload,
                error: ""
            }
        case "UPDATE_COUNTRY":
            return {
                ...state,
                country : action.payload,
                error: ""
            }
        case "UPDATE_MAP":
            return {
                ...state,
                map : action.payload,
                error: ""
            }
        case "UPDATE_MODE":
            return {
                ...state,
                mode : action.payload
            }
        case "ERROR":
            return {
                ...state,
                error : action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default Reducer;