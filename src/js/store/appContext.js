import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            const savedContacts = localStorage.getItem("contacts");
            if (savedContacts) {
                setState(prevState => ({
                    ...prevState,
                    store: { ...prevState.store, contacts: JSON.parse(savedContacts) }
                }));
            } else {
                state.actions.getContacts();
            }
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;