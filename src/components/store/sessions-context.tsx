import { createContext, type ReactNode, useContext, useReducer } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionsState = {
  upcomingSessions: Session[];
};

const initialState: SessionsState = {
  upcomingSessions: [],
};

type SessionsContextValue = SessionsState & {
  addSession: (sessionData: Session) => void;
  deleteSession: (sessionId: string) => void;
};

const SessionsContext = createContext<SessionsContextValue | null>(null);

export function useSessionsContext() {
  const sessionsCtx = useContext(SessionsContext);

  if (sessionsCtx === null) {
    throw new Error("SessionsContext is null - that should not be the case!");
  }
  return sessionsCtx;
}

type SessionsContextProviderProps = {
  children: ReactNode;
};

type AddSessionAction = {
  type: "ADD_SESSION";
  session: Session;
};

type DeleteSessionAction = {
  type: "DELETE_SESSION";
  sessionId: string;
};

type Action = AddSessionAction | DeleteSessionAction;

function sessionsReducer(state: SessionsState, action: Action): SessionsState {
  if (action.type === "ADD_SESSION") {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      ...state,
      upcomingSessions: state.upcomingSessions.concat(action.session),
    };
  }
  if (action.type === "DELETE_SESSION") {
    return {
      ...state,
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId,
      ),
    };
  }
  return state;
}

export default function SessionsContextProvider({
  children,
}: SessionsContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);

  const ctx: SessionsContextValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    addSession(session: Session) {
      dispatch({ type: "ADD_SESSION", session });
    },
    deleteSession(sessionId: string) {
      dispatch({ type: "DELETE_SESSION", sessionId });
    },
  };

  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  );
}
