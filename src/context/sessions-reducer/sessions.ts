import { SESSIONS_ADD, SESSIONS_DELETE } from "./actions";
import {SessionsActionProps, SessionsState} from "../../types/session.ts";


export const initialState: SessionsState = {
    upcomingSessions: [],
};

const sessions = (state = initialState, action: SessionsActionProps): SessionsState => {
    switch (action.type) {
        case SESSIONS_ADD:
            if (state.upcomingSessions.some((session) => session.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                upcomingSessions: state.upcomingSessions.concat(action.payload),
            };
        case SESSIONS_DELETE:
            return {
                ...state,
                upcomingSessions: state.upcomingSessions.filter((session) => session.id !== action.sessionId),
            };
        default:
            return state;
    }
};

export default sessions;