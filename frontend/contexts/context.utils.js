import React from 'react';

export function createCtxWithReducer(reducer, initialState) {
const defaultDispatch = () => initialState;
const stateCtx = React.createContext(initialState);
const dispatchCtx = React.createContext(defaultDispatch);

function useStateCtx(property) {
    const state = React.useContext(stateCtx);
    if (state === undefined) {
        throw new Error('useCountState must be used within a CountProvider');
    }
    return state[property];
}

function useDispatchCtx() {
    const context = React.useContext(dispatchCtx);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider');
    }
    return context;
}

function Provider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
        </dispatchCtx.Provider>
    );
}

    return [useStateCtx, useDispatchCtx, Provider];
}

export function createCtx() {
    const ctx = React.createContext(undefined);

    function useCtx() {
        const c = React.useContext(ctx);
        if (!c) throw new Error('useCtx must be inside a Provider with a value');
            return c;
        }

    return [useCtx, ctx.Provider];
}