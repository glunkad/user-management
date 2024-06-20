import {createContext, ReactNode, useContext} from "react";
import {RootStore} from "./RootStore";
import React from "react";

const Context = createContext<RootStore>({} as RootStore);
const Provider = Context.Provider;

interface IProps {
    children: ReactNode;
}

export const StoreProvider: React.FC<IProps> = ({children}) => {
    const store = new RootStore();
    return <Provider value={store}>{children}</Provider>;
};

export const useStore = () => useContext(Context)
