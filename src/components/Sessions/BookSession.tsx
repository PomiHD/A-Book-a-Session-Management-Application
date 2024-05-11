import { useEffect, useRef } from "react";
import Input from "../UI/Input.tsx";
import Button from "../UI/Button.tsx";
import Modal, { ModalHandle } from "../UI/Modal.tsx";

type BookSessionProps = {
  onDone: () => void;
};

export default function BookSession({ onDone }: BookSessionProps) {
  const modal = useRef<ModalHandle>(null);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  return (
    <Modal onClose={onDone} ref={modal}>
      <form>
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
