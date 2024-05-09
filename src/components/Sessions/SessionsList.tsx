type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};
type SessionsListProps = {
  sessions: Session[];
};
function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul className={"sessions-list"}>
      {sessions.map((session) => (
        <li key={session.id}>
          <img src={`${session.image}`} alt={session.title} />
          <h2>{session.title}</h2>
          <p>{session.summary}</p>
          <button>Learn more</button>
        </li>
      ))}
    </ul>
  );
}

export default SessionsList;
