import React, { createContext } from "react"
import { useState } from "reinspect"

import produce from 'immer'

const HomeContext = createContext();

const HomeProvider = (props) => {
    const initialState = {
        popular_in_womens: [],
        popular_in_mens: [],
        popular_in_accessories: [],
        banners: []
    }

    //this is state managent like redux you can use redux dev tools "Home"
    const [state, setState] = useState(initialState, "Home");
    const immerSetState = newState => setState(currentState => produce(currentState, newState));
    const contextValue = [state, immerSetState];

    return <HomeContext.Provider value={contextValue} {...props} />;
}

export { HomeProvider, HomeContext };
