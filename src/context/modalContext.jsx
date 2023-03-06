import {createContext, useReducer } from "react";


const INITIAL_STATE = {
    modalActive: false
}

export const ModalContext = createContext(INITIAL_STATE);

const ModalReducer = (state, action) => {
    switch(action.type) {
        case "ACTIVE_MODAL": 
        return {
            modalActive: true
        };
        case "DEACTIVE_MODAL": 
        return {
            modalActive: false
        };
        default :
         return state;
    }
}


const ModalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ModalReducer, INITIAL_STATE)
   
    return(
        <ModalContext.Provider
            value={{
                modalActive: state.modalActive,
                dispatch
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;
