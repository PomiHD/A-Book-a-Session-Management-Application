import { SessionItem, SessionItemProps } from "./SessionItem.tsx";

type SessionsListProps = {
  sessions: SessionItemProps[];
};
function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id={"sessions-list"}>
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
}

export default SessionsList;
