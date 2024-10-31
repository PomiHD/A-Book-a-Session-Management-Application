import { type FormEvent, useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import Modal from "../UI/Modal.tsx";
import useSession from "../../hook/useSession.tsx";
import { Session } from "../../types/session.ts";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

export default function BookSession({ session, onDone }: BookSessionProps) {
  const [open, setOpen] = useState(false);
  const { addSession } = useSession();

  useEffect(() => {
    setOpen(true);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // would normally be sent to a server, together with session data
    addSession(session);
    onDone();
  }

  return (
      <Modal open={open} onClose={onDone} title="Book Session">
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '500px',
              margin: '0 auto',
              padding: 2,
              boxSizing: 'border-box',
            }}
        >
          <TextField sx={{background: "white"}} label="Your name" id="name" name="name" type="text" required fullWidth />
          <TextField sx={{background: "white"}} label="Your email" id="email" name="email" type="email" required fullWidth />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="button" onClick={onDone} variant="outlined">Cancel</Button>
            <Button type="submit" variant="contained">Confirm</Button>
          </Box>
        </Box>
      </Modal>
  );
}