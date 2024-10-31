import {useContext} from "react";
import SessionsContext from "../context/SessionsContext.tsx";

export default function useSession() {
    const context = useContext(SessionsContext);

    if (!context) throw new Error('context must be use inside provider');

    return context;
}