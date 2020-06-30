import Reducer from './Reducer';
import React, {createContext, useReducer} from 'react';

const initialState = {
    loading: false,
    country : "",
    data: {
        confirmed: 0,
        recovered: 0,
        death: 0
    },
    error : "",
    map : {
        lat : 37.10195849999999,
        lng : -97.0486521,
    }
}

const ActionContext = createContext(initialState);

const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <ActionContext.Provider value={{
            error : state.error,
            map : state.map,
            loading : state.loading,
            data : state.data,
            dispatch
        }}
        >
            {children}
        </ActionContext.Provider>
    )
}

export {
    ActionContext,
    GlobalState
}