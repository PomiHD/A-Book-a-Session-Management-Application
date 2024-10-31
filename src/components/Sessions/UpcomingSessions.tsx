import { ReactNode, useState, useEffect } from "react";
import Modal from "../UI/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import Button from "../UI/Button.tsx";
import useSession from "../../hook/useSession.tsx";
import {Box} from "@mui/material";

type UpcomingSessionsProps = {
  onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const [open, setOpen] = useState(false);
  const { upcomingSessions, deleteSession } = useSession();

  useEffect(() => {
    setOpen(true);
  }, []);

  const upcomingSessionsExist = upcomingSessions.length > 0;
  let content: ReactNode;

  if (!upcomingSessionsExist) {
    content =   <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          margin: '0 auto',
          padding: 2,
          boxSizing: 'border-box',
        }}
    >No upcoming sessions</Box>;
  } else {
    content = (
        <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              width: '500px',
              margin: '0 auto',
              padding: 2,
              boxSizing: 'border-box',
            }}
        >
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
        </Box>
    );
  }

  return (
      <Modal open={open} onClose={onClose} title="Upcoming Sessions">
        {content}
        <Button onClick={onClose}>Close</Button>
      </Modal>
  );
}