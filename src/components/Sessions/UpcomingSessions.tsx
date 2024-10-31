import Modal, { ModalHandle } from "../UI/Modal.tsx";
import { ReactNode, useEffect, useRef } from "react";
import UpcomingSession from "./UpcomingSession.tsx";
import Button from "../UI/Button.tsx";
import useSession from "../../hook/useSession.tsx";

type UpcomingSessionsProps = {
  onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};
export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const { upcomingSessions, deleteSession } = useSession();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const upcomingSessionsExist = upcomingSessions.length > 0;
  let content: ReactNode;

  if (!upcomingSessionsExist) {
    content = <p>No upcoming sessions</p>;
  }
  if (upcomingSessionsExist) {
    content = (
      <ul>
        {upcomingSessions.map((session) => (
          <li key={session.id}>
            <UpcomingSession
              session={session}
              onCancel={() => deleteSession(session.id)}
            />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <Modal ref={modal} onClose={onClose}>
      {content}
      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
}
