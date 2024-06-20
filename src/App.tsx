import React, {useEffect, useState} from "react"
import Pages from "./pages"
import {useStore} from "./stores";
import {Loader} from "./components";

export const App = () => {
    const [authLoaded, setAuthLoaded] = useState(false)
    const {authStore} = useStore();

    useEffect(() => {
        authStore.getUser().then(() => setAuthLoaded(true));
    }, []);
    if(!authLoaded){
        return <Loader />
    }

    return (
        <div>
            <Pages />
        </div>
    )
}