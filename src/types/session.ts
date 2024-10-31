import {SESSIONS_ADD, SESSIONS_DELETE} from "../context/sessions-reducer/actions.ts";

export interface Session {
    id: string;
    title: string;
    summary: string;
    description: string;
    date: string;
    image: string;
    duration: number;
}

export interface SessionsState {
    upcomingSessions: Session[];
}

type AddSessionAction = {
    type: typeof SESSIONS_ADD;
    payload: Session;
};

type DeleteSessionAction = {
    type: typeof SESSIONS_DELETE;
    sessionId: string;
};

export type SessionsActionProps = AddSessionAction | DeleteSessionAction;