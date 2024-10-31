import { type FormEvent, useEffect, useRef } from "react";
import Input from "../UI/Input.tsx";
import Button from "../UI/Button.tsx";
import Modal, { ModalHandle } from "../UI/Modal.tsx";
import useSession from "../../hook/useSession.tsx";
import {Session} from "../../types/session.ts";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

export default function BookSession({ session, onDone }: BookSessionProps) {
  const modal = useRef<ModalHandle>(null);
  const { addSession } = useSession();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handelSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // would normally be sent to a server, together with session data
    addSession(session);
    onDone();
  }

  return (
    <Modal onClose={onDone} ref={modal}>
      <form onSubmit={handelSubmit}>
        <h2>Book Session</h2>
        <Input label={"Your name"} id={"name"} type={"text"} required />
        <Input label={"Your email"} id={"email"} type={"email"} required />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </p>
      </form>
    </Modal>
  );
}
