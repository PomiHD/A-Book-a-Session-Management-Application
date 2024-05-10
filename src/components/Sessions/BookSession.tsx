import { useEffect, useRef } from "react";
import Input from "../UI/Input.tsx";
import Button from "../UI/Button.tsx";
import Modal, { ModalHandle } from "../UI/Modal.tsx";

type BookSessionProps = {
  onClose: () => void;
};

export default function BookSession({ onClose }: BookSessionProps) {
  const modalRef = useRef<ModalHandle>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }, []);

  return (
    <Modal onClose={onClose} ref={modalRef}>
      <form>
        <h2>Book Session</h2>
        <Input label={"Your name"} id={"name"} type={"text"} required />
        <Input label={"Your email"} id={"email"} type={"email"} required />
        <div className="actions">
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </div>
      </form>
    </Modal>
  );
}
