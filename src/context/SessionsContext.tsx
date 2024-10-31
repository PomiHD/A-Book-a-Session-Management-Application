import{createContext, ReactNode, useReducer} from "react";
import sessionsReducer from "./sessions-reducer/sessions.ts";
import {initialState} from "./sessions-reducer/sessions.ts";
import {SESSIONS_ADD , SESSIONS_DELETE} from "./sessions-reducer/actions.ts";
import {Session} from "../types/session.ts";

interface SessionsContextValue {
    upcomingSessions: Session[];
    addSession: (sessionData: Session) => void;
    deleteSession: (sessionId: string) => void;
    }


const SessionsContext = createContext<SessionsContextValue | null>(null);

export const SessionsProvider = ({ children }: { children: ReactNode }) => {
  
    const [state, dispatch] = useReducer(sessionsReducer, initialState);
    
    const addSession = (sessionData: Session) => {
        dispatch({ type: SESSIONS_ADD, payload: sessionData });
    };
    
    const deleteSession = (sessionId: string) => {
        dispatch({ type: SESSIONS_DELETE, sessionId });
    };

    return (
        <SessionsContext.Provider value={{ upcomingSessions: state.upcomingSessions, addSession, deleteSession }}>
            {children}
        </SessionsContext.Provider>
    );
}

export default SessionsContext;
